import { Link } from "react-router-dom";
import { Award, Heart, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We use only the finest ingredients to ensure every bite is exceptional",
      color: "from-primary-500 to-orange-600",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each dish is crafted with passion and attention to detail",
      color: "from-secondary-500 to-red-600",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We're proud to serve our community with authentic flavors",
      color: "from-accent-500 to-yellow-600",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick preparation without compromising on quality or taste",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                  alt="Delicious food"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>

              {/* Decorative elements - reduced blur */}
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 w-60 h-60 bg-gradient-to-tr from-accent-500/10 to-primary-500/10 rounded-full blur-xl" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-8 left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 z-20">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-4 rounded-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    5+ Years
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div>
            <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Where Tradition Meets{" "}
              <span className="text-gradient">Innovation</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At <span className="font-bold text-primary-500">Naanlecious</span>
              , we believe in bringing together the best of both worlds. Our
              journey started with a simple idea: to transform the traditional
              naan bread into an exciting culinary experience.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We've created a unique fusion of authentic flavors and modern
              fast-food culture. From our signature Pizza Naans and
              mouthwatering burgers to our{" "}
              <span className="font-bold text-amber-600 dark:text-amber-400">
                authentic Pakistani chai
              </span>{" "}
              with diverse flavors, every item on our menu is crafted with
              passion. Experience traditional tea (chayee), green tea, specialty
              coffee, and more - all served with exceptional taste.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`bg-gradient-to-br ${feature.color} p-3 rounded-lg flex-shrink-0`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about-us">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
