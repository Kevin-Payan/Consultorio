import React from "react";
import Card from "./Card";

const Conocenos = () => {
  const doctores = [
    {
      name: "Dra. Yolanda Correa Bautista",
      title: "Pediatra, Inmunólogo",
      image: "./src/assets/Doctor_male.svg",
      services: ["Hago x", "Servicio 2", "Servicio 3"],
    },
    {
      name: "Dr. Victor Payan Navarro",
      title: "Pediatra",
      image: "./src/assets/Doctor_male.svg",
      services: ["Servicio 1", "Servicio 2", "Servicio 3"],
    },
    {
      name: "Dra. Laura Isabel Vicente A.",
      title: "Medico Internista",
      image: "./src/assets/Doctor_male.svg",
      services: ["Servicio 1", "Hago y", "Servicio 3"],
    },
  ];

  return (
    <div id="section2" className="flex justify-around p-8 h-screen pt-14">
      <Card doctores={doctores} />
    </div>
  );
};

export default Conocenos;
