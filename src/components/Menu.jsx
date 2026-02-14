import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Pizza,
  Beef,
  Sandwich,
  FishIcon as Fries,
  Coffee,
  IceCream,
} from "lucide-react";
import ContactModal from "./ContactModal";

const Menu = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  
  const menuItems = [
    {
      id: 1,
      name: "Pizza Naan",
      description: "Traditional naan bread topped with premium pizza toppings",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
      icon: Pizza,
      price: "$8.99",
      color: "from-primary-500 to-orange-600",
    },
    {
      id: 2,
      name: "Burgers",
      description: "Juicy beef burgers with fresh vegetables and special sauce",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
      icon: Beef,
      price: "$7.99",
      color: "from-secondary-500 to-red-600",
    },
    {
      id: 3,
      name: "Wraps",
      description: "Delicious wraps packed with flavor and fresh ingredients",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
      icon: Sandwich,
      price: "$6.99",
      color: "from-accent-500 to-yellow-600",
    },
    {
      id: 4,
      name: "Fries",
      description: "Crispy golden fries seasoned to perfection",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
      icon: Fries,
      price: "$3.99",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 5,
      name: "Traditional Tea & Coffee",
      description: "Authentic Pakistani chai, green tea, and specialty coffee",
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
      icon: Coffee,
      price: "$2.49",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 6,
      name: "Ice Shakes",
      description: "Creamy milkshakes in various delicious flavors",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
      icon: IceCream,
      price: "$4.99",
      color: "from-pink-500 to-purple-600",
    },
    {
      id: 7,
      name: "Ice Creams",
      description: "Delicious ice cream with traditional & classic flavors",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
      icon: IceCream,
      price: "$3.99",
      color: "from-cyan-500 to-blue-600",
    },
  ];

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
            <div
              key={item.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
                    {item.price}
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
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/menu">
              <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                <span>View Complete Menu</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
            <button
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20"
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
          </div>
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
