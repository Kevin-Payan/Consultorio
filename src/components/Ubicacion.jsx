import React from "react";

const Ubicacion = () => {
  return (
    <div id="section3" className="flex h-screen w-screen bg-primary p-12">
      <div className="flex flex-col text-left p-8">
        <h1 className="text-white text-3xl">Encuentranos</h1>
        <h2>Nuestro Horario:</h2>
        <ul>
          <li>Lunes a Viernes: 8:00 am - 8:00 pm</li>
          <li>Sabado: 8:00 am - 8:00 pm</li>
          <li>Domingo: 8:00 am - 8:00 pm</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h1>Aqui va el mapa</h1>
        <h1>Aqui va el boton de llevame ahi</h1>
        <p>Sobre Avenida Francisco I. Madero 1436, 21100 Mexicali BC.</p>
      </div>
    </div>
  );
};

export default Ubicacion;
