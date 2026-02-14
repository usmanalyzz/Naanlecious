import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: "" });

    // Validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message:
          "Please fill in all required fields (First Name, Email, Message)",
      });
      return;
    }

    try {
      // Web3Forms - Simple and fast email service
      // Emails will be sent to: mmaan3495@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "adfcdb70-d5bb-4224-84a1-651bfccdadc0", // Get free key from https://web3forms.com
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New Contact Form Submission - Naanlecious",
          from_name: "Naanlecious Website",
          to_email: "mmaan3495@gmail.com", // Your testing email
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon!",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus({
            loading: false,
            success: false,
            error: false,
            message: "",
          });
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message:
          "Oops! Something went wrong. Please try again or contact us directly.",
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+92 300 1234567",
      color: "from-primary-500 to-orange-600",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "Liberty Market, Sialkot Rd, Block B Satellite Town, Gujranwala",
      color: "from-secondary-500 to-red-600",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "hello@naanlecious.com",
      color: "from-accent-500 to-yellow-600",
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Mon-Sun: 12:00 PM - 1:00 AM",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://www.facebook.com/Naanlaecious/",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/naanleciousgrw/",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Decoration - reduced blur */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Visit Us <span className="text-gradient">Today</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Come experience the delicious fusion of tradition and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div
                  className={`bg-gradient-to-br ${item.color} p-4 rounded-xl flex-shrink-0`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="font-bold text-xl mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-white/10 p-4 rounded-full border border-white/20 hover:border-white/40 hover:scale-110 transition-all ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

            {/* Success Message */}
            {formStatus.success && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-green-100 text-sm">{formStatus.message}</p>
              </div>
            )}

            {/* Error Message */}
            {formStatus.error && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-100 text-sm">{formStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name <span className="text-primary-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder-gray-400 text-white"
                    placeholder="first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder-gray-400 text-white"
                    placeholder="last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-primary-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder-gray-400 text-white"
                  placeholder="your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder-gray-400 text-white"
                  placeholder="+92 300 0000000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message <span className="text-primary-400">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder-gray-400 resize-none text-white"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.loading}
                className={`w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 ${
                  formStatus.loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {formStatus.loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Find Us on <span className="text-gradient">Map</span>
            </h3>
            <p className="text-gray-300">Click on the map to get directions</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl h-[400px] md:h-[500px]">
            {/* Clickable overlay for mobile/better UX */}
            <a
              href="https://www.google.com/maps/dir//Naanlecious,+Liberty+Market,+Sialkot+Rd,+opposite+Jinnah+Stadium,+Block+B+Satellite+Town,+Gujranwala/@32.1628628,74.1934776,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 cursor-pointer group"
              aria-label="Open location in Google Maps"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/95 px-6 py-3 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span className="font-bold text-gray-900">
                      Get Directions
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.0234!2d74.1934776!3d32.1628628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2a203343a7af%3A0x8a3a7021b78fa725!2sLiberty%20Market!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Naanlecious Location Map"
              className="w-full h-full"
            />
          </div>

          {/* Location Details Card */}
          <div className="mt-6 bg-white/10 rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Naanlecious, Liberty Market, Sialkot Rd
                    <br />
                    Opposite Jinnah Stadium, Block B Satellite Town
                    <br />
                    Gujranwala, Pakistan
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir//Naanlecious,+Liberty+Market,+Sialkot+Rd,+opposite+Jinnah+Stadium,+Block+B+Satellite+Town,+Gujranwala/@32.1628628,74.1934776,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all whitespace-nowrap">
                  Open in Maps
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
