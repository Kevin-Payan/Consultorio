import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Address = "./src/assets/Address.svg";
const medAid = "./src/assets/medic_aid.svg";
const medCar = "./src/assets/med_car.svg";

const Footer = () => {
  return (
    <div className="flex text-white bg-primary p-2 w-screen justify-evenly">
      <div className="flex p-2 justify-center items-center">
        <p>@2024 by Kevin Payan</p>
      </div>
    </div>
  );
};

export default Footer;
