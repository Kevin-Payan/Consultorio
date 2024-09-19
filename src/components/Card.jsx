import React from "react";
import { CheckCircle, Calendar, Clock, Star } from "lucide-react";

const Card = ({ doctor }) => {
  return (
    <div className="flex flex-col w-80 bg-babyBlue p-4 m-4 rounded-lg shadow-md">
      <div className="text-center mb-2">
        <h1 className="text-lg font-bold">{doctor.name}</h1>
        <h2 className="text-sm text-gray-600 p-2">{doctor.title}</h2>
      </div>
      <div className="flex justify-center mb-2 p-2">
        <img
          src={doctor.image}
          alt="Foto del Doctor"
          className="w-24 h-24 object-cover rounded-full"
        />
      </div>
      <div className="p-4 transition-all duration-500 ease-in-out overflow-hidden opacity-100">
        <ul className="space-y-2">
          {doctor.services.map((service, index) => (
            <li key={index}>
              <p className="text-black flex items-center text-sm justify-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                {service}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-8 flex justify-center">
        <p className="flex items-center p-2 text-gray-700 text-sm">
          <Star className="mr-2 h-4 w-4 text-yellow-500" alt="Star" />
          5.0
        </p>
        <p className="flex items-center p-2 text-gray-700 text-sm">
          <Clock className="mr-2 h-4 w-4 text-gray-700" alt="Clock" />
          {doctor.exp}
        </p>
      </div>
    </div>
  );
};

export default Card;
