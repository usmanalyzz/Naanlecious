import { X, Plus, Minus, ShoppingBag, MapPin, Loader2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import {
  STORE_LOCATION,
  DELIVERY_RATE_PER_KM,
  OPENROUTESERVICE_API_KEY,
} from "../config/delivery";
import {
  getDistanceFromLatLonInKm,
  getRoadDistanceOSRM,
  getRoadDistanceOpenRouteService,
} from "../utils/geo";
import { geocodeAddress } from "../utils/geo";

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
    clearCart,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [deliveryDistanceKm, setDeliveryDistanceKm] = useState(null);
  const [deliveryChargeRs, setDeliveryChargeRs] = useState(null);
  const [customerCoords, setCustomerCoords] = useState(null); // { lat, lng } when we have them
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [usedCurrentLocation, setUsedCurrentLocation] = useState(false);

  const calculateDeliveryFromCoords = async (lat, lng) => {
    let oneWayKm;

    // Try OpenRouteService first if API key is available (better multi-route support)
    if (OPENROUTESERVICE_API_KEY) {
      const orsKm = await getRoadDistanceOpenRouteService(
        STORE_LOCATION.lat,
        STORE_LOCATION.lng,
        lat,
        lng,
        OPENROUTESERVICE_API_KEY,
      );
      if (orsKm != null && !isNaN(orsKm)) {
        oneWayKm = orsKm;
      }
    }

    // Fallback to OSRM if OpenRouteService not available or failed
    if (!oneWayKm) {
      const roadKm = await getRoadDistanceOSRM(
        STORE_LOCATION.lat,
        STORE_LOCATION.lng,
        lat,
        lng,
      );
      if (roadKm != null && !isNaN(roadKm)) {
        oneWayKm = roadKm;
      }
    }

    // Final fallback to straight-line if both fail
    if (!oneWayKm || isNaN(oneWayKm)) {
      oneWayKm = getDistanceFromLatLonInKm(
        STORE_LOCATION.lat,
        STORE_LOCATION.lng,
        lat,
        lng,
      );
      if (!oneWayKm) {
        setLocationError("Could not calculate distance. Please try again.");
        return null;
      }
      setLocationError(
        "Using approximate distance (road distance unavailable).",
      );
    }

    const EXTRA_DELIVERY_FEE = 20;
    const roundTripKm = oneWayKm * 2;
    const baseCharge = Math.ceil(roundTripKm * DELIVERY_RATE_PER_KM);
    const charge = baseCharge + EXTRA_DELIVERY_FEE;

    setDeliveryDistanceKm(Math.round(oneWayKm * 10) / 10);
    setDeliveryChargeRs(charge);
    setCustomerCoords({ lat, lng });
    if (!locationError.includes("approximate")) {
      setLocationError("");
    }
    return { oneWayKm, charge };
  };

  const handleUseMyLocation = () => {
    setLocationLoading(true);
    setLocationError("");
    setDeliveryDistanceKm(null);
    setDeliveryChargeRs(null);
    if (!navigator.geolocation) {
      setLocationError("Location is not supported by your browser.");
      setLocationLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await calculateDeliveryFromCoords(latitude, longitude);
        setUsedCurrentLocation(true);
        setLocationLoading(false);
      },
      (err) => {
        setLocationError(
          err.message ||
            "Could not get your location. Please enter address and calculate.",
        );
        setLocationLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  };

  const handleCalculateDelivery = async () => {
    if (!customerLocation.trim()) {
      setErrors((e) => ({
        ...e,
        location: "Enter address to calculate delivery.",
      }));
      return;
    }
    setLocationLoading(true);
    setLocationError("");
    setDeliveryDistanceKm(null);
    setDeliveryChargeRs(null);
    setErrors((e) => ({ ...e, location: "" }));
    const coords = await geocodeAddress(customerLocation);
    setLocationLoading(false);
    if (!coords) {
      setLocationError(
        "Could not find this address. Try a more detailed address or use 'Use my location'.",
      );
      return;
    }
    await calculateDeliveryFromCoords(coords.lat, coords.lng);
    setUsedCurrentLocation(false);
  };

  const grandTotal = () => {
    const subtotal = getTotalPrice();
    const delivery = deliveryChargeRs != null ? deliveryChargeRs : 0;
    return { subtotal, deliveryRs: delivery, total: subtotal + delivery };
  };

  const formatWhatsAppMessage = () => {
    const { subtotal, deliveryRs, total } = grandTotal();
    let message = "🍕 *Order from Naanlecious*\n\n";
    message += "━━━━━━━━━━━━━━━━━━━━\n\n";

    // Customer Information
    message += "*Customer Details:*\n";
    message += `Name: ${customerName}\n`;
    message += `Phone: ${customerPhone}\n`;
    message += `Location: ${customerLocation}\n`;
    if (customerCoords) {
      message += `Coordinates: ${customerCoords.lat}, ${customerCoords.lng}\n`;
      message += `Google Maps: https://www.google.com/maps?q=${customerCoords.lat},${customerCoords.lng}\n`;
    }
    if (deliveryDistanceKm != null && deliveryChargeRs != null) {
      message += `Distance: ${deliveryDistanceKm} km (one way)\n`;
      message += `Delivery charge: Rs ${deliveryChargeRs}\n`;
    }
    message += "\n━━━━━━━━━━━━━━━━━━━━\n\n";

    // Group items by category
    const groupedItems = {};
    cartItems.forEach((item) => {
      const key = item.category;
      if (!groupedItems[key]) {
        groupedItems[key] = [];
      }
      groupedItems[key].push(item);
    });

    // Add items grouped by category
    Object.keys(groupedItems).forEach((category) => {
      message += `*${category}*\n`;
      groupedItems[category].forEach((item) => {
        const sizeText = item.size ? ` (${item.size})` : "";
        message += `• ${item.name}${sizeText} x${item.quantity} - ${item.price}\n`;
      });
      message += "\n";
    });

    message += "━━━━━━━━━━━━━━━━━━━━\n";
    message += `*Order Total: $${subtotal.toFixed(2)}*\n`;
    if (deliveryChargeRs != null) {
      message += `*Delivery: Rs ${deliveryChargeRs}* (${deliveryDistanceKm} km)\n`;
    }
    message += "\nThank you for your order! 🙏";

    return encodeURIComponent(message);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!customerName.trim()) {
      newErrors.name = "Name is required";
    }

    if (!customerPhone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!customerLocation.trim()) {
      newErrors.location = "Location/Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderNow = () => {
    if (!validateForm()) {
      return;
    }

    const phoneNumber = "923008114077"; // WhatsApp number
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Clear cart items after confirming order
    clearCart();

    // Close cart and reset form
    setIsCartOpen(false);
    setCustomerName("");
    setCustomerPhone("");
    setCustomerLocation("");
    setErrors({});
    setDeliveryDistanceKm(null);
    setDeliveryChargeRs(null);
    setCustomerCoords(null);
    setLocationError("");
    setUsedCurrentLocation(false);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 text-primary-500" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Your Cart
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Your cart is empty
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                Add items to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.name}
                        {item.size && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                            ({item.size})
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.category}
                      </p>
                      <p className="text-primary-600 dark:text-primary-400 font-bold mt-1">
                        {item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-lg px-2 py-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </button>
                      <span className="text-gray-900 dark:text-white font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                    <span className="text-gray-900 dark:text-white font-bold">
                      $
                      {(
                        parseFloat(item.price.replace("$", "")) * item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4 bg-white dark:bg-gray-900">
            {/* Customer Information Form */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Delivery Information
              </h3>

              {/* Name Field */}
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="Enter your name"
                  className={`w-full px-3 py-2 rounded-lg border ${
                    errors.name
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => {
                    setCustomerPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  placeholder="Enter your phone number"
                  className={`w-full px-3 py-2 rounded-lg border ${
                    errors.phone
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Location Field */}
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location/Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={customerLocation}
                  onChange={(e) => {
                    setCustomerLocation(e.target.value);
                    if (errors.location) setErrors({ ...errors, location: "" });
                  }}
                  placeholder="Enter your delivery address"
                  rows={3}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    errors.location
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 resize-none`}
                />
                {errors.location && (
                  <p className="text-xs text-red-500 mt-1">{errors.location}</p>
                )}
              </div>

              {/* Delivery charge - get location */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Delivery charge
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Road distance from Naanlecious × 2 (round trip) × Rs{" "}
                  {DELIVERY_RATE_PER_KM}/km
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleUseMyLocation}
                    disabled={locationLoading}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 disabled:opacity-50"
                  >
                    {locationLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <MapPin className="w-4 h-4" />
                    )}
                    Use my location
                  </button>
                  <button
                    type="button"
                    onClick={handleCalculateDelivery}
                    disabled={locationLoading || !customerLocation.trim()}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
                  >
                    {locationLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Calculate from address"
                    )}
                  </button>
                </div>
                {locationError && (
                  <p className="text-xs text-red-500">{locationError}</p>
                )}
                {deliveryDistanceKm != null && deliveryChargeRs != null && (
                  <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-3 text-sm">
                    <p className="text-gray-700 dark:text-gray-300">
                      Distance: <strong>{deliveryDistanceKm} km</strong> (one
                      way, by road)
                      <br />
                      Round trip:{" "}
                      <strong>
                        {(Number(deliveryDistanceKm) * 2).toFixed(1)} km
                      </strong>
                    </p>
                    <p className="text-green-700 dark:text-green-400 font-semibold mt-1">
                      Delivery charge: Rs {deliveryChargeRs}
                    </p>
                    {customerCoords && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Your location: {customerCoords.lat.toFixed(6)},{" "}
                        {customerCoords.lng.toFixed(6)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-1 border-t border-gray-200 dark:border-gray-700 pt-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  Order total
                </span>
                <span className="text-gray-900 dark:text-white font-medium">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              {deliveryChargeRs != null && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Delivery
                  </span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    Rs {deliveryChargeRs}
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={handleOrderNow}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Order on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
