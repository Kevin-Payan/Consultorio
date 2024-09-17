import React, { useState } from "react";
import Mapa from "./Mapa";
import GeoLocationButton from "./GeoLocationButton";

const ubicacion = "./src/assets/address.svg";

const Ubicacion = () => {
  const [userLocation, setUserLocation] = useState(null);

  return (
    <div
      id="section3"
      className="flex text-white h-screen w-screen bg-primary p-12 pt-14"
    >
      <div className="flex flex-col text-left p-8 pt-12 justify-evenly">
        <div className="flex">
          <h1 className="text-3xl font-medium flex items-center">
            Encuentranos
          </h1>
          <img src={ubicacion} alt="Ubicacion" className="w-24 h-24 p-5" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="p-2">Nuestro Horario:</h2>
          <ul className="p-2">
            <li className="p-1">Lunes a Viernes: 8:00 am - 8:00 pm</li>
            <li className="p-1">Sabado: 8:00 am - 8:00 pm</li>
            <li className="p-1">Domingo: 8:00 am - 8:00 pm</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col p-8 pt-12 items-center">
        <h1>Sobre Avenida Francisco I. Madero 1436, 21100 Mexicali BC.</h1>
        <Mapa userLocation={userLocation} />
        <GeoLocationButton setUserLocation={setUserLocation} />
      </div>
    </div>
  );
};

export default Ubicacion;
