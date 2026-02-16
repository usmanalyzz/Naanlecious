import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import CategoryMenu from "./pages/CategoryMenu";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu/:categorySlug" element={<CategoryMenu />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            <Footer />
            <Cart />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
