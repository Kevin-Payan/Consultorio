import React, { useState } from "react";
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
      name: "Dra. Laura Isabel Vicente",
      title: "Medico Internista",
      image: "./src/assets/Doctor_male.svg",
      services: ["Servicio 1", "Hago y", "Servicio 3"],
    },
  ];

  const [visibleServices, setVisibleServices] = useState(
    Array(doctores.length).fill(false)
  );

  const toggleServices = (index) => {
    setVisibleServices((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <div id="section2" className="flex-col pb-8 pt-14">
      <h1 className="text-center font-semibold text-3xl pb-8">
        ¡Conoce a{" "}
        <span className="text-primary font-bold">Nuestro Doctores</span>!
      </h1>
      <div className="flex justify-around">
        {doctores.map((doctor, index) => (
          <Card
            key={index}
            doctor={doctor}
            isVisible={visibleServices[index]}
            toggleServices={() => toggleServices(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Conocenos;
