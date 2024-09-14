import React from "react";

const Logo = "./src/assets/Logov2.svg";

const navItems = [
  { text: "Inicio", href: "#section1" },
  { text: "Conocenos", href: "#section2" },
  { text: "Ubicacion", href: "#section3" },
  { text: "Agenda tu cita", href: "#section4" },
];

const Navbar = ({ activeSection }) => {
  const textColorClass =
    activeSection === "section2" || activeSection === "section4"
      ? "text-black"
      : "text-white";

  return (
    <div className="flex w-full h-20 sticky top-0 z-50 bg-transparent">
      <div className="flex w-72 justify-center pt-6">
        <img src={Logo} alt="Logo" />
      </div>

      <div
        className={`flex w-screen justify-end items-center font-medium p-4 ${textColorClass}`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`p-3 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
          >
            <h1>{item.text}</h1>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
