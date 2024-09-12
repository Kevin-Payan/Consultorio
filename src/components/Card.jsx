import React from "react";

const Card = ({ doctor, isVisible, toggleServices }) => {
  return (
    <div className="flex-col w-52 bg-babyBlue">
      <div className="text-center p-2">
        <h1 className="font-bold p-2">{doctor.name}</h1>
        <p className="p-2">{doctor.title}</p>
      </div>
      <div>
        <img src={doctor.image} alt="Foto del Doctor" className="p-8" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={toggleServices}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {isVisible ? "Menos Informacion" : "Mas Informacion"}
        </button>
      </div>
      <div
        className={`p-3 text-center transition-all duration-500 ease-in-out overflow-hidden ${
          isVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul>
          {doctor.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
