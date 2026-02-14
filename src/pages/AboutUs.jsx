import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  Heart,
  Target,
  Users,
  Award,
  Clock,
  Star,
  Sparkles,
  TrendingUp,
  Smile,
  ChefHat,
  Flame,
} from "lucide-react";
import { useState } from "react";
import ContactModal from "../components/ContactModal";

const AboutUs = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "Every dish we create is infused with love and dedication to culinary excellence",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "We never compromise on ingredients or preparation methods, ensuring premium taste",
      color: "from-primary-500 to-orange-600",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building lasting relationships with our customers and serving with a smile",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Constantly exploring new flavors and techniques to surprise and delight",
      color: "from-accent-500 to-yellow-600",
    },
  ];

  const journey = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "Started with a small kitchen and a big dream to revolutionize naan-based cuisine",
      icon: Sparkles,
    },
    {
      year: "2020",
      title: "First Store",
      description:
        "Opened our first location, introducing Pizza Naans to the community",
      icon: Star,
    },
    {
      year: "2022",
      title: "Expansion",
      description:
        "Expanded our menu to include burgers, wraps, and signature shakes",
      icon: TrendingUp,
    },
    {
      year: "2025",
      title: "Today",
      description:
        "Serving thousands of happy customers with our unique fusion cuisine",
      icon: Heart,
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Smile },
    { number: "100+", label: "Unique Recipes", icon: ChefHat },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "4.8", label: "Average Rating", icon: Star },
  ];

  const team = [
    {
      name: "Chef Ahmed",
      role: "Head Chef & Founder",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
      specialty: "Pizza Naan Master",
    },
    {
      name: "Sarah Khan",
      role: "Co-Founder & Manager",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      specialty: "Customer Experience",
    },
    {
      name: "Chef Marco",
      role: "Burger Specialist",
      image:
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&q=80",
      specialty: "Fusion Creations",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-500/20 to-primary-500/20 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
            </motion.div>

            {/* Hero Content */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6"
              >
                <Flame className="w-4 h-4 inline-block mr-2" />
                Our Story
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Welcome to <span className="text-gradient">Naanlecious</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Where tradition meets innovation, and every bite tells a story
                of passion, flavor, and culinary excellence.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Naanlecious was born from a simple yet revolutionary idea:
                  what if we could transform the humble naan bread into
                  something extraordinary? Our founders, passionate food
                  enthusiasts with deep roots in traditional cooking, saw an
                  opportunity to create a unique fusion experience.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Starting in a modest kitchen in 2019, we experimented with
                  countless recipes, perfecting our signature Pizza Naans. The
                  response was overwhelming! Customers loved the crispy yet soft
                  texture, the perfect blend of spices, and the innovative
                  toppings.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we've grown into a beloved local destination, serving
                  not just Pizza Naans, but a full menu of delicious fast-food
                  items with our unique twist. Every dish reflects our
                  commitment to quality, innovation, and the joy of sharing
                  great food with great people.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80"
                  alt="Restaurant interior"
                  className="rounded-2xl shadow-lg object-cover h-64"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                  alt="Food preparation"
                  className="rounded-2xl shadow-lg object-cover h-64 mt-8"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80"
                  alt="Pizza naan"
                  className="rounded-2xl shadow-lg object-cover h-64"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80"
                  alt="Burgers"
                  className="rounded-2xl shadow-lg object-cover h-64 mt-8"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full -mr-20 -mt-20" />
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To revolutionize fast food by combining traditional flavors
                    with modern innovation, creating memorable dining
                    experiences that bring joy to every customer, one delicious
                    bite at a time.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-20 -mt-20" />
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To become the most loved fusion fast-food destination,
                    inspiring culinary creativity while staying true to our
                    roots, and expanding our unique flavors to communities
                    everywhere.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core <span className="text-gradient">Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do, from selecting
                ingredients to serving our customers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 text-center relative overflow-hidden"
                >
                  <div
                    className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From a small kitchen to your favorite food destination.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500" />

              <div className="space-y-12">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1" />
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex-1 bg-white rounded-2xl shadow-lg p-6"
                    >
                      <div className="text-primary-500 font-bold text-2xl mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate people behind your favorite flavors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.specialty}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience Naanlecious?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of happy customers and taste the difference.
                Order now and let us bring the flavors to you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/menu">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-500 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    View Our Menu
                  </motion.button>
                </Link>
                <motion.button
                  onClick={() => setShowContactModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white hover:text-primary-500 transition-all"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
};

export default AboutUs;
