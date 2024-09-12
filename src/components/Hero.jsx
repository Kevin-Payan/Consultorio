import React from "react";
const backgroundImage = "./src/assets/consultorio_frontal.webp";
const blobScene = "./src/assets/blob_scene.svg";

const Hero = () => {
  return (
    <div
      id="section1"
      className="relative w-full h-screen bg-cover bg-center bg-slate-300 pt-14"
    >
      <div className="flex">
        <div className="flex-col">
          <h1 className="relative text-6xl text-center font-medium">
            <span className="text-secondary block">Unidad Médica</span>
            <span className="block">María del Angel</span>
          </h1>
          <p className="text-black p-2">
            "Comprometidos con la salud, igualdad de género, no discriminación y
            cultura laboral, esta unidad ofrecerá atención permanente,
            orientación nutricional y espacios para ejercicio, promoviendo la
            salud ocupacional y prevención médica."
          </p>
        </div>

        <div>
          <img src={backgroundImage} className="p-6 bg-cover w-3/6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
