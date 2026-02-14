import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Blogger",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      rating: 5,
      comment:
        "Naanlecious has completely changed my perspective on fast food! The Pizza Naan is absolutely divine - it's the perfect fusion of tradition and innovation. I'm a regular customer now!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 5,
      comment:
        "As someone who's always on the go, Naanlecious is a lifesaver. The food is incredibly delicious, service is lightning fast, and the quality never disappoints. Highly recommend the burgers!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "College Student",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 5,
      comment:
        "The ice shakes are to die for! Every visit feels special, and the staff is always friendly. It's become my favorite spot to hang out with friends. The vibe is just perfect!",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary-500" />
              </div>

              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-800 px-8 py-6 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 fill-accent-500 text-accent-500" />
              <span className="text-4xl font-bold text-gray-900 dark:text-white">4.9</span>
            </div>
            <div className="text-left border-l-2 border-gray-300 dark:border-gray-600 pl-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                10,000+ Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
