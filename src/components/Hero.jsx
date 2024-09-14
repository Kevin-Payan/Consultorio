import React from "react";

const maleDoctor = "./src/assets/male_doctor.svg";
const femaleDoctor = "./src/assets/female_doctor.svg";
const bloodTest = "./src/assets/blood_test.svg";
const stethoscope = "./src/assets/stethoscope.svg";
const thermometer = "./src/assets/thermometer.svg";
const medicalKit = "./src/assets/medical_kit.svg";
const heartbeat = "./src/assets/heartbeat_chart.svg";
const medAid = "./src/assets/medic_aid.svg";

const Hero = () => {
  return (
    <div
      id="section1"
      className="flex relative justify-evenly w-full h-screen bg-primary p-4"
    >
      <div className="flex flex-col justify-center p-2 text-center">
        <h1 className="relative text-6xl font-medium p-3">
          <span className="block text-cyan-400">Unidad Médica</span>
          <span className="block text-white">María del Angel</span>
        </h1>
        <h1 className="text-white text-2xl p-4">
          "Comprometidos con tu bienestar, fomentando una vida saludable."
        </h1>
      </div>

      <div className="grid grid-cols-4 grid-rows-3 gap-2 place-items-center">
        <div className="col-start-2 row-start-2">
          <img
            src={maleDoctor}
            alt="Male Doctor"
            className="w-auto h-40 transform scale-x-[-1]"
          />
        </div>
        <div className="col-start-3 row-start-2">
          <img src={femaleDoctor} alt="Male Doctor" className="w-auto h-40" />
        </div>
        <div className="col-start-2 row-start-3">
          <img
            src={stethoscope}
            alt="stethoscope"
            className="w-16 h-16 animate-move-around"
          />
        </div>
        <div className="col-start-2 row-start-1">
          <img
            src={bloodTest}
            alt="stethoscope"
            className="w-16 h-16 animate-move-around"
          />
        </div>
        <div className="col-start-3 row-start-1">
          <img
            src={thermometer}
            alt="stethoscope"
            className="w-16 h-16 animate-move-around"
          />
        </div>
        <div className="col-start-4 row-start-2">
          <img
            src={medicalKit}
            alt="stethoscope"
            className="w-16 h-16 animate-move-around"
          />
        </div>
        <div className="col-start-3 row-start-3">
          <img
            src={heartbeat}
            alt="stethoscope"
            className="w-16 h-16 animate-move-around"
          />
        </div>
        <div className="col-start-1 row-start-2">
          <img
            src={medAid}
            alt="stethoscope"
            className="w-16 h-16 animate-move-around"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
