import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import FullMenu from "./pages/FullMenu";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <ThemeProvider>
      <Router basename="/Naanlecious">
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<FullMenu />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
