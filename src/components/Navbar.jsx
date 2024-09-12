import React from "react";

const Logo = "./src/assets/Logov2.svg";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 sticky top-0 z-50  ">
      {/* La navbar tiene el problema de que como siempre esta hasta arriba tapa siempre la parte de arriba de los demas componentes. (Esto se soluciona con padding top restando el navbar) */}
      <div className="flex w-72 justify-center pt-6">
        <img src={Logo} />
      </div>

      <div className="flex w-screen justify-end items-center text-white font-medium pt-6">
        <a href="#section1">
          <h1 className="p-3 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Inicio
          </h1>
        </a>
        <a href="#section2">
          <h1 className="p-3 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Conocenos
          </h1>
        </a>
        <a href="#section3">
          <h1 className="p-3 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Direccion
          </h1>
        </a>
        <a href="#section4">
          <h1 className="p-3 pr-12 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Agenda tu cita
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
