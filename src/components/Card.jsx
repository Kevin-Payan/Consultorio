import React from "react";

const checkmark = "./src/assets/checkmark.svg";

const Card = ({ doctor, isVisible, toggleServices }) => {
  return (
    <div className="flex flex-col w-52 bg-babyBlue p-4 rounded-lg shadow-md">
      <div className="text-center mb-2">
        <h1 className="text-lg font-semibold">{doctor.name}</h1>
        <h2 className="text-sm text-gray-600 p-2">{doctor.title}</h2>
      </div>
      <div className="flex justify-center mb-2 p-2">
        <img
          src={doctor.image}
          alt="Foto del Doctor"
          className="w-24 h-24 object-cover rounded-full"
        />
      </div>
      <div className="flex justify-center mb-2 p-2">
        <button
          onClick={toggleServices}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          {isVisible ? "Menos Informacion" : "Mas Informacion"}
        </button>
      </div>
      <div
        className={`p-3 transition-all duration-500 ease-in-out overflow-hidden ${
          isVisible ? "max-h-45 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-2">
          {doctor.services.map((service, index) => (
            <li
              key={index}
              className="flex items-center justify-start space-x-1"
            >
              <img src={checkmark} className="w-5 h-5" alt="Checkmark" />
              <span className="text-sm text-gray-700">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
