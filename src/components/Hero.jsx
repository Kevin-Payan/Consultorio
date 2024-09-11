import React from "react";
const backgroundImage = "./src/assets/consultorio_frontal.webp";
const blobScene = "./src/assets/blob_scene.svg";

const Hero = () => {
  return (
    <div
      id="section1"
      className="relative w-full h-screen bg-cover bg-center pt-14"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img
        src={blobScene}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex bg-slate-200">
        <h1 className="relative text-6xl ">
          <span className="text-teal-500">Unidad Medica</span> Maria del Angel
        </h1>
      </div>
      <div>
        <p className="text-white">
          Comprometidos con una cultura de salud, Igualdad de Género, No
          Discriminación y Cultura Laboral; dicha unidad brindará atención
          permanente con la finalidad de que su desempeño sea óptimo en sus
          funciones, generando una cultura de salud ocupacional a través de
          atención oportuna, orientación nutricional y brindando espacios para
          el acondicionamiento físico, lo que dará como resultado un personal
          con mejor salud. ''Es indispensable contar con una unidad como tal que
          dé la atención médica, pero sobre todo preventiva”.
        </p>
      </div>
    </div>
  );
};

export default Hero;
