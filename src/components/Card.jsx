import React from "react";

const Card = (props) => {
  const doctores = props.doctores;

  return (
    <>
      {doctores.map((doctor) => (
        <div className="bg-babyBlue flex-col w-52">
          <div className="text-center p-2">
            <h1>{doctor.name}</h1>
          </div>
          <div>
            <img src={doctor.image} alt="Foto del Doctor" className="p-8" />
          </div>
          <div className="p-3 text-center">
            <ul className="list-image-checkmark pl-5">
              <li>{doctor.services[0]}</li>
              <li>{doctor.services[1]}</li>
              <li>{doctor.services[2]}</li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
