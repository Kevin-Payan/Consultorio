import React, { useState } from "react";

const GeoLocationButton = ({ setUserLocation }) => {
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log("User location obtained:", location); // Debugging line
          setUserLocation(location);
          setError(null); // Clear any previous error
        },
        (err) => {
          setError(`Error: ${err.message}`);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex justify-center">
      <button className="p-2 rounded-md bg-cyan-300" onClick={getLocation}>
        Llevame Ahi
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default GeoLocationButton;
