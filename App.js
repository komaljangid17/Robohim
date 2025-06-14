import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import ChooseUs from "./components/ChooseUs";
import Services from "./components/Services";
import Blog from "./components/Blog"; // ✅ Add this
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Vision />
      <ChooseUs />
      <div id="services">
        <Services />
      </div>
      <div id="blog">      {/* ✅ Blog Section */}
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
