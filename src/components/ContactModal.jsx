import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Check if restaurant is open (12:00 PM - 1:00 AM)
  const isRestaurantOpen = () => {
    const now = new Date();
    const currentHour = now.getHours();

    // Open from 12 PM (noon) to 1 AM (next day)
    // This means: 12, 13, 14, ... 23 (12 PM to 11:59 PM) and 0 (12 AM to 12:59 AM)
    // Closed from 1 AM to 11:59 AM (hours 1-11)
    return currentHour >= 12 || currentHour === 0;
  };

  const restaurantStatus = isRestaurantOpen();

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+92 300 8114077",
      action: "tel:+923008114077",
      color: "from-green-500 to-emerald-600",
      description: "Quick phone orders",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "+92 300 8114077",
      action: "https://wa.me/923008114077",
      color: "from-green-400 to-green-600",
      description: "Chat with us",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@naanlecious.com",
      action: "mailto:hello@naanlecious.com",
      color: "from-blue-500 to-blue-600",
      description: "For detailed inquiries",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Liberty Market, Sialkot Rd, Block B Satellite Town, Gujranwala",
      action:
        "https://www.google.com/maps/dir//Naanlecious,+Liberty+Market,+Sialkot+Rd,+opposite+Jinnah+Stadium,+Block+B+Satellite+Town,+Gujranwala/@32.1628628,74.1934776,17z",
      color: "from-red-500 to-pink-600",
      description: "Dine-in available",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-8 pb-20">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Title */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4"
                  >
                    <Phone className="w-8 h-8 text-primary-500" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Order Now!
                  </h2>
                  <p className="text-white/90 text-lg">
                    Choose your preferred way to order
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-10 left-0 right-0 h-20 bg-white dark:bg-gray-900 rounded-t-[3rem]" />
              </div>

              {/* Content */}
              <div className="px-6 pb-8 -mt-6 relative">
                {/* Opening Hours Badge */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`flex items-center justify-center space-x-2 ${
                    restaurantStatus
                      ? "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800"
                      : "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 border-2 border-red-200 dark:border-red-800"
                  } rounded-2xl p-4 mb-6`}
                >
                  <Clock
                    className={`w-5 h-5 ${
                      restaurantStatus ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                    }`}
                  />
                  <div className="text-center">
                    <p
                      className={`text-sm font-semibold ${
                        restaurantStatus ? "text-green-900 dark:text-green-200" : "text-red-900 dark:text-red-200"
                      }`}
                    >
                      {restaurantStatus ? "🟢 Open Now" : "🔴 Closed"}
                    </p>
                    <p
                      className={`text-xs ${
                        restaurantStatus ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"
                      }`}
                    >
                      Mon-Sun: 12:00 PM - 1:00 AM
                    </p>
                  </div>
                </motion.div>

                {/* Closed Message */}
                {!restaurantStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-xl p-4 mb-6 text-center"
                  >
                    <p className="text-sm text-orange-900 dark:text-orange-200 font-medium">
                      We're currently closed. We open at 12:00 PM!
                    </p>
                    <p className="text-xs text-orange-700 dark:text-orange-400 mt-1">
                      You can still leave us a message and we'll get back to you
                      soon.
                    </p>
                  </motion.div>
                )}

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.action}
                      target={
                        method.action.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 rounded-2xl p-5 transition-all hover:shadow-lg"
                    >
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl mb-3 group-hover:scale-110 transition-transform`}
                      >
                        <method.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 break-words">
                        {method.detail}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {method.description}
                      </p>

                      {/* Arrow indicator */}
                      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="w-5 h-5 text-primary-500"
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
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-center"
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Or scroll down to fill our{" "}
                    <button
                      onClick={() => {
                        onClose();
                        setTimeout(() => {
                          document.querySelector("#contact")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }, 300);
                      }}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold underline"
                    >
                      contact form
                    </button>
                  </p>

                  {/* Quick Stats */}
                  <div className="flex items-center justify-center space-x-6 text-center">
                    <div>
                      <p className="text-2xl font-bold text-gradient">⚡</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Fast Delivery</p>
                    </div>
                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-700" />
                    <div>
                      <p className="text-2xl font-bold text-gradient">🍕</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Fresh Food</p>
                    </div>
                    <div className="w-px h-8 bg-gray-300 dark:bg-gray-700" />
                    <div>
                      <p className="text-2xl font-bold text-gradient">⭐</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">4.9 Rating</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
