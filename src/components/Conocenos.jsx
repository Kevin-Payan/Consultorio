import React, { useState } from "react";
import Card from "./Card";

const Conocenos = () => {
  const doctores = [
    {
      name: "Dra. Yolanda Correa Bautista",
      title: "Pediatra, Inmunólogo",
      image: "./src/assets/female_doctor.svg",
      services: ["Hago x", "Servicio 2", "Servicio 3"],
    },
    {
      name: "Dr. Victor Payan Navarro",
      title: "Pediatra",
      image: "./src/assets/foto_victor.jpeg",
      services: [
        "Crecimiento y desarrollo",
        "Vacunas",
        "Seguimiento niño sano",
      ],
    },
    {
      name: "Dra. Laura Isabel Vicente",
      title: "Medico Internista",
      image: "./src/assets/foto_vicente.jpeg",
      services: [
        "Valoraciones Preoperatorias,",
        "Diabetes e Hipertensión",
        "Adulto joven, medio y tercera edad.",
      ],
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
    <div id="section2" className="flex-col w-screen min-h-screen pb-8 pt-14">
      <h1 className="text-center font-semibold text-3xl pb-8">
        ¡Conoce a
        <span className="text-primary font-bold"> Nuestros Doctores</span>!
      </h1>
      <div className="flex justify-evenly">
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
