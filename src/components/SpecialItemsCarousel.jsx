import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Signature",
    title: "Loaded Pizza Naan",
    description:
      "Crispy naan base topped with juicy chicken, cheese, and our secret house sauce.",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    badge: "New",
    title: "Smoky BBQ Burger",
    description:
      "Smash-style patty layered with cheese, caramelized onions, and BBQ glaze.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    badge: "Tea Time",
    title: "Karak Chai & Snacks",
    description:
      "Strong, aromatic karak chai paired with crispy sides for the perfect chai break.",
    image:
      "https://images.unsplash.com/photo-1513639725746-c5d3e861f32a?w=1200&q=80&auto=format&fit=crop",
  },
];

const SpecialItemsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSlide = (index) => {
    if (!slides.length) return;
    const normalized = (index + slides.length) % slides.length;
    setActiveIndex(normalized);
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("menu");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById("menu");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!slides.length) return null;

  return (
    <section className="relative w-full min-h-[80vh] bg-gradient-to-b from-orange-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 pt-20 pb-10 flex items-center">
      <div className="w-full h-full px-0 sm:px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-none sm:rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 shadow-xl w-full h-full">
          <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
            {/* Slides */}
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="min-w-full flex flex-col md:flex-row items-stretch"
                >
                  {/* Text content */}
                  <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-gray-900/70 text-amber-700 dark:text-amber-300 shadow-sm">
                        {slide.badge}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 max-w-md">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={handleMenuClick}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                      >
                        View Full Menu
                      </button>
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        Freshly made at Naanlecious every day.
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/20 dark:from-black/40 dark:via-transparent dark:to-black/60" />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Left / Right Controls */}
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/80 text-gray-800 dark:text-gray-100 shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-800 items-center justify-center transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/80 text-gray-800 dark:text-gray-100 shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-800 items-center justify-center transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Mobile arrow hints */}
            <div className="sm:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none">
              <div className="w-7 h-7 rounded-full bg-white/70 dark:bg-gray-900/70 flex items-center justify-center text-gray-700 dark:text-gray-200 text-xs">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <div className="w-7 h-7 rounded-full bg-white/70 dark:bg-gray-900/70 flex items-center justify-center text-gray-700 dark:text-gray-200 text-xs">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-6 bg-primary-500"
                      : "w-2 bg-white/70 dark:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialItemsCarousel;

