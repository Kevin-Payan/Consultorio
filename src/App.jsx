import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Conocenos from "./components/Conocenos";
import Footer from "./components/Footer";
import Ubicacion from "./components/Ubicacion";

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
      <div id="section4" className="h-screen bg-white">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          provident, impedit consequuntur maxime modi libero mollitia dicta
          pariatur perferendis ea voluptates minima cumque error vitae corrupti
          voluptatum expedita, rem aliquam.
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
