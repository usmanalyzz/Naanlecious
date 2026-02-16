import { Truck, ShieldCheck, Gift, Coffee } from "lucide-react";

const FeaturesBanner = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      tagline: "Quick, safe & on-time delivery",
    },
    {
      icon: ShieldCheck,
      title: "100% Halal",
      tagline: "Certified halal ingredients",
    },
    {
      icon: Gift,
      title: "Loyalty Rewards",
      tagline: "Earn points on every order",
    },
    {
      icon: Coffee,
      title: "Authentic Chai",
      tagline: "Best chai with pure milk",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon with circular background */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {feature.tagline}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
