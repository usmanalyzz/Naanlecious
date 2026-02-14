import { motion } from "framer-motion";
import { Coffee, Heart, Flame, Leaf, Sparkles } from "lucide-react";

const ChaiSpecialty = () => {
  const teaCategories = [
    {
      icon: Coffee,
      title: "Traditional Chai",
      description: "Authentic Pakistani tea flavors",
      items: [
        "Doodh Patti Chai",
        "Karak Chai",
        "Elaichi Chai",
        "Masala Chai",
        "Adrak Chai",
        "Kashmiri Chai",
      ],
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    },
    {
      icon: Leaf,
      title: "Green Tea",
      description: "Refreshing & healthy options",
      items: [
        "Pure Green Tea",
        "Lemon Green Tea",
        "Mint Green Tea",
        "Honey Green Tea",
      ],
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
    },
    {
      icon: Flame,
      title: "Specialty Coffee",
      description: "Premium coffee selection",
      items: [
        "Doodh Coffee",
        "Cappuccino",
        "Cafe Latte",
        "Espresso",
        "Turkish Coffee",
      ],
      color: "from-brown-500 to-orange-700",
      bgColor: "from-orange-50 to-amber-50",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cup brewed to perfection",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Finest tea leaves & ingredients",
    },
    {
      icon: Coffee,
      title: "Authentic Recipes",
      description: "Traditional Pakistani methods",
    },
  ];

  return (
    <section
      id="chai-specialty"
      className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Decorations - static for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-amber-200/15 to-orange-200/15 dark:from-amber-500/5 dark:to-orange-500/5 rounded-full blur-xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-yellow-200/15 to-amber-200/15 dark:from-yellow-500/5 dark:to-amber-500/5 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
          >
            <Coffee className="w-5 h-5" />
            <span>Our Specialty</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Authentic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Pakistani Chai
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the rich tradition of Pakistani tea culture with our
            diverse selection of handcrafted chai, green tea, and specialty
            coffee. Every cup is brewed with passion and authenticity.
          </p>
        </motion.div>

        {/* Features Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-xl">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tea Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teaCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 transition-colors">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon Badge */}
                  <div
                    className="absolute top-4 right-4 p-3 rounded-xl shadow-lg"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(to bottom right, #f59e0b, #ea580c)"
                          : index === 1
                          ? "linear-gradient(to bottom right, #22c55e, #059669)"
                          : "linear-gradient(to bottom right, #a16207, #78350f)",
                    }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>

                  {/* Items List */}
                  <div
                    className={`bg-gradient-to-br ${category.bgColor} dark:from-gray-700 dark:to-gray-700 rounded-2xl p-4 space-y-2`}
                  >
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price Badge */}
                  <div className="mt-4 inline-flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <span>Starting at</span>
                    <span
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}
                    >
                      $2.49
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#menu"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <Coffee className="w-6 h-6" />
            <span>Explore Full Menu</span>
          </a>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            🍵 Visit us at Liberty Market, Gujranwala for the authentic chai
            experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChaiSpecialty;
