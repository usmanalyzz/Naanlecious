import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";

const FullMenu = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const menuCategories = [
    {
      name: "Pizza Naans",
      description: "Traditional naan bread with pizza toppings",
      items: [
        {
          name: "Margherita Naan",
          description: "Fresh mozzarella, tomatoes, basil",
          price: "$8.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Pepperoni Naan",
          description: "Spicy pepperoni, mozzarella, tomato sauce",
          price: "$9.99",
          spicy: true,
          veg: false,
        },
        {
          name: "BBQ Chicken Naan",
          description: "Grilled chicken, BBQ sauce, onions",
          price: "$10.99",
          spicy: false,
          veg: false,
        },
        {
          name: "Veggie Supreme Naan",
          description: "Bell peppers, mushrooms, olives, onions",
          price: "$9.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Spicy Paneer Naan",
          description: "Paneer, jalapeños, spicy sauce",
          price: "$10.49",
          spicy: true,
          veg: true,
        },
        {
          name: "Meat Lovers Naan",
          description: "Pepperoni, sausage, bacon, ham",
          price: "$11.99",
          spicy: false,
          veg: false,
        },
      ],
    },
    {
      name: "Burgers",
      description: "Juicy burgers with fresh ingredients",
      items: [
        {
          name: "Classic Beef Burger",
          description: "Beef patty, lettuce, tomato, special sauce",
          price: "$7.99",
          spicy: false,
          veg: false,
        },
        {
          name: "Cheese Burger Deluxe",
          description: "Double patty, cheddar, pickles",
          price: "$8.99",
          spicy: false,
          veg: false,
        },
        {
          name: "Spicy Chicken Burger",
          description: "Crispy chicken, jalapeños, sriracha mayo",
          price: "$8.49",
          spicy: true,
          veg: false,
        },
        {
          name: "Veggie Burger",
          description: "Plant-based patty, avocado, greens",
          price: "$7.49",
          spicy: false,
          veg: true,
        },
        {
          name: "BBQ Bacon Burger",
          description: "Beef patty, bacon, BBQ sauce, onion rings",
          price: "$9.99",
          spicy: false,
          veg: false,
        },
        {
          name: "Mushroom Swiss Burger",
          description: "Beef patty, mushrooms, swiss cheese",
          price: "$8.99",
          spicy: false,
          veg: false,
        },
      ],
    },
    {
      name: "Wraps",
      description: "Delicious wraps packed with flavor",
      items: [
        {
          name: "Chicken Caesar Wrap",
          description: "Grilled chicken, romaine, caesar dressing",
          price: "$6.99",
          spicy: false,
          veg: false,
        },
        {
          name: "Falafel Wrap",
          description: "Crispy falafel, hummus, tahini sauce",
          price: "$6.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Spicy Beef Wrap",
          description: "Seasoned beef, jalapeños, cheese",
          price: "$7.49",
          spicy: true,
          veg: false,
        },
        {
          name: "Veggie Delight Wrap",
          description: "Mixed vegetables, hummus, greens",
          price: "$5.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Tikka Wrap",
          description: "Chicken tikka, mint chutney, onions",
          price: "$7.99",
          spicy: true,
          veg: false,
        },
        {
          name: "Greek Wrap",
          description: "Feta, olives, cucumber, tzatziki",
          price: "$6.99",
          spicy: false,
          veg: true,
        },
      ],
    },
    {
      name: "Sides",
      description: "Perfect sides to complement your meal",
      items: [
        {
          name: "Classic Fries",
          description: "Crispy golden fries",
          price: "$3.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Spicy Fries",
          description: "Fries with spicy seasoning",
          price: "$4.49",
          spicy: true,
          veg: true,
        },
        {
          name: "Cheese Fries",
          description: "Fries loaded with cheese",
          price: "$4.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Onion Rings",
          description: "Crispy battered onion rings",
          price: "$4.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Mozzarella Sticks",
          description: "Breaded mozzarella with marinara",
          price: "$5.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Chicken Wings",
          description: "6 pcs with your choice of sauce",
          price: "$7.99",
          spicy: true,
          veg: false,
        },
      ],
    },
    {
      name: "Drinks",
      description: "Refreshing beverages",
      items: [
        {
          name: "Soft Drinks",
          description: "Coke, Sprite, Fanta - 16oz",
          price: "$2.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Fresh Lemonade",
          description: "Freshly squeezed lemonade",
          price: "$3.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Iced Tea",
          description: "Sweetened or unsweetened",
          price: "$2.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Mango Lassi",
          description: "Traditional Indian yogurt drink",
          price: "$3.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Bottled Water",
          description: "16oz spring water",
          price: "$1.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Energy Drink",
          description: "Red Bull, Monster",
          price: "$3.99",
          spicy: false,
          veg: true,
        },
      ],
    },
    {
      name: "Traditional Tea & Coffee",
      description: "Authentic Pakistani chai with diverse flavors",
      items: [
        {
          name: "Doodh Patti Chai",
          description: "Traditional milk tea with strong flavor",
          price: "$2.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Karak Chai",
          description: "Strong spiced tea with cardamom",
          price: "$2.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Elaichi Chai",
          description: "Cardamom-infused aromatic tea",
          price: "$2.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Masala Chai",
          description: "Spiced tea with ginger, cardamom & cinnamon",
          price: "$3.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Adrak Chai",
          description: "Ginger tea - perfect for cold days",
          price: "$2.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Kashmiri Chai",
          description: "Pink tea with almonds and pistachios",
          price: "$3.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Green Tea",
          description: "Pure green tea leaves",
          price: "$2.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Lemon Green Tea",
          description: "Refreshing green tea with lemon",
          price: "$2.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Mint Green Tea",
          description: "Green tea infused with fresh mint",
          price: "$2.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Honey Green Tea",
          description: "Green tea sweetened with natural honey",
          price: "$3.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Black Coffee",
          description: "Strong aromatic coffee",
          price: "$2.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Doodh Coffee",
          description: "Traditional milk coffee",
          price: "$3.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Cappuccino",
          description: "Espresso with steamed milk foam",
          price: "$3.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Cafe Latte",
          description: "Smooth espresso with steamed milk",
          price: "$3.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Espresso",
          description: "Strong Italian coffee shot",
          price: "$2.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Turkish Coffee",
          description: "Traditional thick coffee",
          price: "$3.49",
          spicy: false,
          veg: true,
        },
      ],
    },
    {
      name: "Ice Shakes",
      description: "Creamy milkshakes and smoothies",
      items: [
        {
          name: "Chocolate Shake",
          description: "Rich chocolate milkshake",
          price: "$4.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Vanilla Shake",
          description: "Classic vanilla milkshake",
          price: "$4.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Strawberry Shake",
          description: "Fresh strawberry milkshake",
          price: "$4.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Oreo Shake",
          description: "Cookies and cream milkshake",
          price: "$5.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Mango Smoothie",
          description: "Fresh mango smoothie",
          price: "$5.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Berry Blast Shake",
          description: "Mixed berries milkshake",
          price: "$5.49",
          spicy: false,
          veg: true,
        },
      ],
    },
    {
      name: "Ice Creams",
      description: "Delicious ice cream flavors",
      items: [
        {
          name: "Vanilla Ice Cream",
          description: "Classic creamy vanilla",
          price: "$3.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Chocolate Ice Cream",
          description: "Rich dark chocolate",
          price: "$3.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Strawberry Ice Cream",
          description: "Fresh strawberry swirl",
          price: "$3.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Mango Ice Cream",
          description: "Tropical mango delight",
          price: "$4.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Pistachio Ice Cream",
          description: "Nutty pistachio flavor",
          price: "$4.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Kulfi (Traditional)",
          description: "Pakistani traditional ice cream",
          price: "$4.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Cookies & Cream",
          description: "Vanilla with Oreo chunks",
          price: "$4.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Mint Chocolate Chip",
          description: "Refreshing mint with chocolate",
          price: "$4.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Butterscotch",
          description: "Creamy butterscotch ripple",
          price: "$4.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Malai Kulfi",
          description: "Creamy traditional kulfi",
          price: "$4.99",
          spicy: false,
          veg: true,
        },
        {
          name: "Falooda Ice Cream",
          description: "Rose flavored with vermicelli",
          price: "$5.49",
          spicy: false,
          veg: true,
        },
        {
          name: "Tutti Frutti",
          description: "Mixed fruit ice cream",
          price: "$4.49",
          spicy: false,
          veg: true,
        },
      ],
    },
  ];

  const categories = ["All", ...menuCategories.map((cat) => cat.name)];

  const filteredMenu = menuCategories.filter((category) => {
    if (selectedCategory !== "All" && category.name !== selectedCategory)
      return false;
    if (searchTerm === "") return true;
    return category.items.some(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 py-12 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-white hover:text-white/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Complete Menu
              </h1>
              <p className="text-white/90 text-lg">
                Explore our full selection of delicious items
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Categories */}
          <div className="space-y-12">
            {filteredMenu.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 md:p-8"
              >
                {/* Category Header */}
                <div className="mb-6 border-b-2 border-gray-100 dark:border-gray-700 pb-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items
                    .filter(
                      (item) =>
                        searchTerm === "" ||
                        item.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        item.description
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                    )
                    .map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: itemIndex * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex justify-between items-start p-4 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 dark:hover:from-gray-700 dark:hover:to-gray-700 transition-all cursor-pointer group"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                              {item.name}
                            </h3>
                            {item.spicy && (
                              <span className="text-red-500">🌶️</span>
                            )}
                            {item.veg && (
                              <span className="text-green-600">🥬</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                        <div className="ml-4">
                          <span className="font-bold text-lg text-primary-600 dark:text-primary-400">
                            {item.price}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl p-8 md:p-12"
          >
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
          </motion.div>
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

export default FullMenu;
