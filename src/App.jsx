import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Conocenos from "./components/Conocenos";
import Footer from "./components/Footer";
import Ubicacion from "./components/Ubicacion";
import Contacto from "./components/Contacto";

function App() {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id^='section']");
    console.log("Sections found:", sections); // Debugging line

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Intersecting section:", entry.target.id); // Debugging line
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.85 } // Adjusted threshold
    );

    sections.forEach((section) => {
      console.log("Observing section:", section.id); // Debugging line
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Conocenos />
      <Ubicacion />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
