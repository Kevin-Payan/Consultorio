import React, { useState } from "react";
import Mapa from "./Mapa";
import GeoLocationButton from "./GeoLocationButton";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Ubicacion = () => {
  const [userLocation, setUserLocation] = useState(null);

  return (
    <div
      id="section3"
      className="text-white h-screen w-screen bg-primary p-12 pt-14"
    >
      <h1 className="text-white text-center font-semibold text-3xl">
        Encuéntranos
      </h1>
      <div className="flex">
        <div className="flex flex-col p-4">
          <div className="p-4 bg-white/75 rounded-lg opacity-75">
            <p className="flex pb-8 font-semibold items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Nuestra Ubicacion
            </p>
            <p className="flex pb-2 items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Avenida Francisco I. Madero 1436, 21100 Mexicali BC.
            </p>
            <p className="flex pb-2 items-center">
              <Phone className="h-5 w-5 mr-2" />+ 52 (686) 551-9333
            </p>
            <p className="flex pb-2 items-center">
              <Mail className="h-5 w-5 mr-2" />
              <h2>nieves.unidadmedica@outlook.com</h2>
            </p>
          </div>
          <div className="p-4 bg-white/75 rounded-lg">
            <p className="flex pb-6 font-semibold items-center">
              <Clock className="h-5 w-5 mr-2" />
              Horario de Atencion
            </p>
            <ul>
              <li>Lunes a Viernes: 8:00 am - 8:00 pm</li>
              <li>Sábado: 8:00 am - 8:00 pm</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col p-8 pt-12 items-center">
          <Mapa userLocation={userLocation} />
          <GeoLocationButton setUserLocation={setUserLocation} />
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
