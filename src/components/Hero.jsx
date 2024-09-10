import React from "react";
const backgroundImage = "./src/assets/consultorio_frontal.webp";

const Hero = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-6xl">Unidad Medica Maria del Angel</h1>
      <h2>para niños y adultos</h2>
    </div>
  );
};

export default Hero;
