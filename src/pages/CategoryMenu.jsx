import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Plus } from "lucide-react";
import { menuCategories } from "../data/menuData";
import ContactModal from "../components/ContactModal";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const CategoryMenu = () => {
  const { categorySlug } = useParams();
  const [showContactModal, setShowContactModal] = useState(false);
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});
  const navigate = useNavigate();

  const category = menuCategories.find((cat) => cat.slug === categorySlug);

  const handleBackToMenu = () => {
    navigate("/");
    // Restore scroll position after navigation
    setTimeout(() => {
      const savedPosition = sessionStorage.getItem("menuScrollPosition");
      if (savedPosition) {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: "smooth",
        });
        // Clear saved position after restoring
        sessionStorage.removeItem("menuScrollPosition");
      } else {
        // If no saved position, scroll to menu section
        const element = document.getElementById("menu");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100);
  };

  const handleAddToCart = (item) => {
    if (item.sizes) {
      // For drinks, need to select a size first
      const selectedSize = selectedSizes[item.name];
      if (!selectedSize) {
        alert("Please select a size first");
        return;
      }
      addToCart(
        {
          ...item,
          price: selectedSize.price,
          size: selectedSize.size,
        },
        category.name
      );
    } else {
      addToCart(item, category.name);
    }
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Category Not Found
          </h1>
          <Link
            to="/"
            className="text-primary-500 hover:text-primary-600 underline"
          >
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 py-12 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleBackToMenu}
              className="inline-flex items-center space-x-2 text-white hover:text-white/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Menu</span>
            </button>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {category.name}
              </h1>
              <p className="text-white/90 text-lg">{category.description}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {item.spicy && (
                      <div className="bg-red-500 px-3 py-1 rounded-full shadow-lg">
                        <span className="text-white text-xs font-semibold">
                          🌶️ Spicy
                        </span>
                      </div>
                    )}
                    {item.veg && (
                      <div className="bg-green-500 px-3 py-1 rounded-full shadow-lg">
                        <span className="text-white text-xs font-semibold">
                          🥬 Veg
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-lg text-gray-900 dark:text-white">
                      {item.sizes
                        ? `From ${item.sizes[0]?.price || "$0.00"}`
                        : item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Size Selector for Drinks */}
                  {item.sizes && (
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Select Size:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {item.sizes.map((sizeOption, sizeIndex) => (
                          <button
                            key={sizeIndex}
                            onClick={() =>
                              setSelectedSizes({
                                ...selectedSizes,
                                [item.name]: sizeOption,
                              })
                            }
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                              selectedSizes[item.name]?.size === sizeOption.size
                                ? "bg-primary-500 text-white shadow-md"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            }`}
                          >
                            {sizeOption.size} - {sizeOption.price}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2.5 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Order?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Call us, visit us, or order online for pickup or delivery
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all"
            >
              <span>Order Now</span>
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
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
};

export default CategoryMenu;
