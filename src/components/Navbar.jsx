import React from "react";

const Logo = "./src/assets/logo_white.png";

const Navbar = () => {
  return (
    <div className="flex w-screen h-14 bg-cyan-500 sticky top-0">
      {/* La navbar tiene el problema de que como siempre esta hasta arriba tapa siempre la parte de arriba de los demas componentes */}
      <div className="flex w-72 justify-center p-2">
        <img src={Logo} />
      </div>

      <div className="flex w-screen justify-around items-center font-medium">
        <a href="#section1">
          <h1 className="text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Inicio
          </h1>
        </a>
        <a href="#section2">
          <h1 className="text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Conocenos
          </h1>
        </a>
        <a href="#section3">
          <h1 className="text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Nuestros Servicios
          </h1>
        </a>
        <a href="#section4">
          <h1 className="text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Contacto
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
