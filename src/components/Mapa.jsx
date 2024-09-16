import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
  MarkerF,
} from "@react-google-maps/api";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Mapa = ({ userLocation }) => {
  const [directions, setDirections] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  });

  useEffect(() => {
    if (isLoaded && userLocation) {
      console.log("User location:", userLocation); // Debugging line
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: new window.google.maps.LatLng(
            userLocation.latitude,
            userLocation.longitude
          ),
          destination: new window.google.maps.LatLng(
            32.665999574447014,
            -115.46754232461609
          ),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            console.log("Directions result:", result); // Debugging line
            setDirections(result);
          } else {
            console.error(`Error fetching directions: ${result}`);
          }
        }
      );
    }
  }, [isLoaded, userLocation]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <GoogleMap
        mapContainerStyle={{ width: "50vw", height: "50vh" }}
        center={{ lat: 32.665999574447014, lng: -115.46754232461609 }}
        zoom={15}
        options={{ gestureHandling: "greedy" }}
      >
        {directions ? (
          <DirectionsRenderer directions={directions} />
        ) : (
          <MarkerF
            position={{
              lat: 32.665999574447014,
              lng: -115.46754232461609,
            }}
            options={{ animation: window.google.maps.Animation.BOUNCE }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default Mapa;
