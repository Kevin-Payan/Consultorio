import React from "react";
const backgroundImage = "./src/assets/consultorio_frontal.webp";
const blobScene = "./src/assets/blob_scene.svg";

const Hero = () => {
  return (
    <div
      id="section1"
      className="flex justify-evenly w-screen h-screen bg-primary pt-14"
    >
      <div className="flex-col">
        <h1 className="relative text-6xl text-center font-medium">
          <span className="text-secondary block">Unidad Médica</span>
          <span className="block text-white">María del Angel</span>
        </h1>
        <h1 className="text-black p-2">
          "Comprometidos con tu bienestar, fomentando una vida saludable."
        </h1>
      </div>
    </div>
  );
};

export default Hero;
