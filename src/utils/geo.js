/**
 * Haversine formula - distance between two lat/lng points in km
 * This calculates straight-line (as the crow flies) distance
 */
export function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  // Validate inputs
  if (
    lat1 == null || lon1 == null || lat2 == null || lon2 == null ||
    isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)
  ) {
    console.error("Invalid coordinates:", { lat1, lon1, lat2, lon2 });
    return null;
  }

  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * Get road distance using OSRM (Open Source Routing Machine) - FREE, no API key
 * Returns MAXIMUM driving distance among all possible routes in km or null if request fails
 * OSRM uses longitude,latitude order in the URL
 * Uses alternatives=true to get multiple routes and picks the longest one
 * Uses CORS proxy so it works from browser
 */
/**
 * Helper function to fetch OSRM route with CORS handling
 */
async function fetchOSRM(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (corsErr) {
    // CORS blocked - use public CORS proxy
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    const res = await fetch(proxyUrl);
    return await res.json();
  }
}

/**
 * Calculate intermediate waypoints to force different routes
 * Creates points offset from the direct path to potentially get longer routes
 */
function getIntermediateWaypoints(lat1, lng1, lat2, lng2) {
  const waypoints = [];
  
  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;
  
  // Calculate offset distance (about 10% of total distance)
  const straightDist = getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2);
  const offsetDeg = (straightDist * 0.1) / 111; // ~111 km per degree
  
  // Create waypoints offset north and south of midpoint
  waypoints.push({
    lat: midLat + offsetDeg,
    lng: midLng,
    name: "north"
  });
  waypoints.push({
    lat: midLat - offsetDeg,
    lng: midLng,
    name: "south"
  });
  
  // Also try east/west offsets
  waypoints.push({
    lat: midLat,
    lng: midLng + offsetDeg,
    name: "east"
  });
  waypoints.push({
    lat: midLat,
    lng: midLng - offsetDeg,
    name: "west"
  });
  
  return waypoints;
}

export async function getRoadDistanceOSRM(lat1, lng1, lat2, lng2) {
  try {
    // OSRM format: coords are lon,lat (longitude first!)
    const directCoords = `${lng1},${lat1};${lng2},${lat2}`;
    const allDistances = [];
    
    // Strategy 1: Request alternatives (multiple routes in one call)
    try {
      const alternativesUrl = `https://router.project-osrm.org/route/v1/driving/${directCoords}?overview=false&alternatives=3&steps=false`;
      const data = await fetchOSRM(alternativesUrl);
      
      console.log("OSRM Alternatives Response:", data);
      
      if (data.code === "Ok" && data.routes && data.routes.length > 0) {
        data.routes.forEach((route, index) => {
          if (route.distance != null && !isNaN(route.distance)) {
            const distKm = route.distance / 1000;
            allDistances.push(distKm);
            console.log(`Route ${index + 1}: ${distKm.toFixed(2)} km`);
          }
        });
      }
    } catch (err) {
      console.warn("Alternatives request failed:", err);
    }
    
    // Strategy 2: Try routes with intermediate waypoints to force different paths
    // This helps get longer routes that might not be returned as alternatives
    if (allDistances.length <= 1) {
      const waypoints = getIntermediateWaypoints(lat1, lng1, lat2, lng2);
      console.log(`Trying ${waypoints.length} intermediate waypoints to find longer routes...`);
      
      for (const waypoint of waypoints) {
        try {
          const waypointCoords = `${lng1},${lat1};${waypoint.lng},${waypoint.lat};${lng2},${lat2}`;
          const waypointUrl = `https://router.project-osrm.org/route/v1/driving/${waypointCoords}?overview=false&steps=false`;
          const waypointData = await fetchOSRM(waypointUrl);
          
          if (waypointData.code === "Ok" && waypointData.routes?.[0]?.distance != null) {
            const distKm = waypointData.routes[0].distance / 1000;
            if (!allDistances.some(d => Math.abs(d - distKm) < 0.01)) { // Avoid duplicates
              allDistances.push(distKm);
              console.log(`Waypoint route (${waypoint.name}): ${distKm.toFixed(2)} km`);
            }
          }
        } catch (err) {
          // Silently skip failed waypoint requests
        }
      }
    }
    
    // Strategy 3: Get default route if we still don't have multiple routes
    if (allDistances.length === 0) {
      try {
        const defaultUrl = `https://router.project-osrm.org/route/v1/driving/${directCoords}?overview=false&steps=false`;
        const defaultData = await fetchOSRM(defaultUrl);
        
        if (defaultData.code === "Ok" && defaultData.routes?.[0]?.distance != null) {
          const distKm = defaultData.routes[0].distance / 1000;
          allDistances.push(distKm);
          console.log(`Default route: ${distKm.toFixed(2)} km`);
        }
      } catch (err) {
        console.warn("Default route request failed:", err);
      }
    }
    
    // Use the MAXIMUM distance found
    if (allDistances.length > 0) {
      const maxDistanceKm = Math.max(...allDistances);
      const minDistanceKm = Math.min(...allDistances);
      
      console.log(`Found ${allDistances.length} route(s).`);
      console.log(`All distances: ${allDistances.map(d => d.toFixed(2)).join(', ')} km`);
      console.log(`Minimum: ${minDistanceKm.toFixed(2)} km, Maximum: ${maxDistanceKm.toFixed(2)} km`);
      console.log(`✅ Using MAXIMUM distance: ${maxDistanceKm.toFixed(2)} km`);
      
      return maxDistanceKm;
    }
    
    console.warn("No valid routes found from OSRM");
    return null;
  } catch (err) {
    console.error("OSRM road distance error:", err);
    return null;
  }
}

/**
 * Get road distance using OpenRouteService - FREE (2000 requests/day), requires API key
 * Returns MAXIMUM distance among multiple route alternatives in km
 * Get free API key from: https://openrouteservice.org/
 */
export async function getRoadDistanceOpenRouteService(lat1, lng1, lat2, lng2, apiKey) {
  if (!apiKey) return null;
  
  try {
    // OpenRouteService uses [lon, lat] format in coordinates array
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        coordinates: [[lng1, lat1], [lng2, lat2]],
        alternative_routes: {
          target_count: 3, // Request up to 3 alternative routes
          weight_factor: 1.4, // Factor to prefer longer routes
          share_factor: 0.6
        },
        format: 'json'
      })
    });
    
    const data = await response.json();
    
    if (data.routes && data.routes.length > 0) {
      const distances = data.routes.map(route => route.summary.distance / 1000); // Convert meters to km
      const maxDistanceKm = Math.max(...distances);
      
      console.log(`OpenRouteService found ${data.routes.length} route(s).`);
      console.log(`Distances: ${distances.map(d => d.toFixed(2)).join(', ')} km`);
      console.log(`Using MAXIMUM: ${maxDistanceKm.toFixed(2)} km`);
      
      return maxDistanceKm;
    }
    return null;
  } catch (err) {
    console.error("OpenRouteService error:", err);
    return null;
  }
}

/**
 * Get road distance using Google Maps Distance Matrix API (requires API key)
 * Returns distance in km or null if API key not available
 */
export async function getRoadDistance(lat1, lng1, lat2, lng2, apiKey) {
  if (!apiKey) return null;
  
  try {
    const origin = `${lat1},${lng1}`;
    const dest = `${lat2},${lng2}`;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${dest}&units=metric&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === "OK" && data.rows[0]?.elements[0]?.status === "OK") {
      const distanceKm = data.rows[0].elements[0].distance.value / 1000; // Convert meters to km
      return distanceKm;
    }
    return null;
  } catch (err) {
    console.error("Google Maps Distance API error:", err);
    return null;
  }
}

/**
 * Geocode address using OpenStreetMap Nominatim (free, no API key)
 * Returns { lat, lng } or null if not found
 */
export async function geocodeAddress(address) {
  if (!address || !address.trim()) return null;
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address.trim() + ", Gujranwala, Pakistan"
      )}&limit=1`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "NaanleciousDelivery/1.0 (Food delivery app)",
        },
        credentials: "omit",
      }
    );
    const data = await response.json();
    if (data && data[0]) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      };
    }
    console.warn("No geocoding results for:", address);
    return null;
  } catch (err) {
    console.error("Geocoding error:", err);
    return null;
  }
}
