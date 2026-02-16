import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Pizza,
  Beef,
  Sandwich,
  FishIcon as Fries,
  Coffee,
  IceCream,
  GlassWater,
} from "lucide-react";
import ContactModal from "./ContactModal";
import { menuCategories } from "../data/menuData";

const Menu = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  // Map categories to display format with icons
  const iconMap = {
    "Pizza Naans": Pizza,
    Burgers: Beef,
    Wraps: Sandwich,
    Fries: Fries,
    "Traditional Tea & Coffee": Coffee,
    "Ice Shakes": IceCream,
    "Ice Creams": IceCream,
    Drinks: GlassWater,
  };

  const colorMap = {
    "Pizza Naans": "from-primary-500 to-orange-600",
    Burgers: "from-secondary-500 to-red-600",
    Wraps: "from-accent-500 to-yellow-600",
    Fries: "from-amber-500 to-orange-600",
    "Traditional Tea & Coffee": "from-amber-500 to-orange-600",
    "Ice Shakes": "from-pink-500 to-purple-600",
    "Ice Creams": "from-cyan-500 to-blue-600",
    Drinks: "from-blue-500 to-cyan-600",
  };

  const menuItems = menuCategories.map((category) => ({
    ...category,
    icon: iconMap[category.name] || Pizza,
    color: colorMap[category.name] || "from-primary-500 to-orange-600",
    price: category.items[0]?.sizes
      ? category.items[0].sizes[0]?.price || "$0.00"
      : category.items[0]?.price || "$0.00",
  }));

  return (
    <section id="menu" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Menu
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our <span className="text-gradient">Delicious</span> Menu
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover a world of flavors with our handcrafted dishes made fresh
            daily
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={`/menu/${item.slug}`}
              onClick={() => {
                // Save current scroll position before navigating
                sessionStorage.setItem("menuScrollPosition", window.scrollY.toString());
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon Badge */}
                <div
                  className={`absolute top-4 right-4 bg-gradient-to-br ${item.color} p-3 rounded-full shadow-lg`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    From {item.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowContactModal(true)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Order Now</span>
          </button>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
            🍕 Fresh ingredients • ⚡ Fast delivery • ⭐ Highly rated
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </section>
  );
};

export default Menu;
