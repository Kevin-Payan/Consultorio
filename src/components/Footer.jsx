import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Address = "./src/assets/Address.svg";
const medAid = "./src/assets/medic_aid.svg";
const medCar = "./src/assets/med_car.svg";

const Footer = () => {
  return (
    <div className="flex justify-evenly text-white bg-primary p-2">
      <div className="flex p-2 justify-center items-center">
        <Phone className="h-5 w-5 mr-2" />+ 52 (686) 551-9333
      </div>
      <div className="flex p-2 justify-center items-center">
        <Mail className="h-5 w-5 mr-2" />
        nieves.unidadmedica@outlook.com
      </div>
      <div className="flex p-2 justify-center items-center">
        <MapPin className="h-5 w-5 mr-2" />
        Avenida Francisco I. Madero 1436, 21100 Mexicali BC.
      </div>
    </div>
  );
};

export default Footer;
