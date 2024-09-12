import React from "react";
const backgroundImage = "./src/assets/consultorio_frontal.webp";
const blobScene = "./src/assets/blob_scene.svg";

const Hero = () => {
  return (
    <div
      id="section1"
      className="relative w-full h-screen bg-cover bg-center bg-white pt-14"
    >
      <img
        src={blobScene}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="flex">
        <div className="flex-col">
          <h1 className="relative text-6xl text-center">
            <span className="text-teal-500 block">Unidad Médica</span>
            <span className="block">María del Angel</span>
          </h1>
          <p className="text-black p-2">
            Comprometidos con una cultura de salud, Igualdad de Género, No
            Discriminación y Cultura Laboral. Esta unidad brindará atención
            permanente con la finalidad de que su desempeño sea óptimo en sus
            funciones, generando una cultura de salud ocupacional a través de
            atención oportuna, orientación nutricional y brindando espacios para
            el acondicionamiento físico, lo que dará como resultado un personal
            con mejor salud. ''Es indispensable contar con una unidad como tal
            que dé la atención médica, pero sobre todo preventiva”.
          </p>
        </div>

        <div>
          <img src={backgroundImage} className="p-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
