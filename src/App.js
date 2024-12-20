import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./components/ScrollTop";
import { useEffect } from "react";
import WOW from "wowjs";
import AOS from "aos";
import CustomCursor from "./components/CustomCursor";
import LogoLoader from "./components/LogoLoader";
import AboutUs from "./pages/AboutUs";
import Brochures from "./pages/Brochures";
import Support from "./pages/Support";
import ContactUs from "./pages/ContactUs";
import Category from "./pages/Category";
import Collection from "./pages/Collection";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Router basename="/">
      <ScrollTop />
      <LogoLoader logoSrc="/images/Ashish Rolling Shutter Logo.png" />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/brochures" element={<Brochures />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/:category_slug/:slug" element={<Collection />} />
      </Routes>
    </Router>
  );
}

export default App;
