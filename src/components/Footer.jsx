import { Phone, Mail, MapPin, Facebook, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const menuCategories = [
    "Pizza Naans",
    "Burgers",
    "Wraps",
    "Fries",
    "Drinks",
    "Ice Shakes",
    "Ice Creams",
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/Naanlaecious/",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/naanleciousgrw/",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Naanlecious Logo"
                className="w-12 h-12 rounded-lg object-cover shadow-md"
              />
              <span className="text-2xl font-bold text-gradient">
                Naanlecious
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Where tradition meets innovation. Serving delicious fusion food
              with love and passion since 2019.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary-500 group-hover:w-4 transition-all mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Menu</h3>
            <ul className="space-y-2">
              {menuCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#menu"
                    className="text-gray-400 hover:text-primary-500 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary-500 group-hover:w-4 transition-all mr-2" />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">hello@naanlecious.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">
                    123 Food Street
                    <br />
                    Flavor City, FC 12345
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Naanlecious. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Naanlecious Team</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
