import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const destinations = data.map((place) => {
    return (
      <>
        <Card
          key={place.id}
          title={place.title}
          location={place.location}
          googleMapsUrl={place.googleMapsUrl}
          visitDate={place.visitDate}
          description={place.description}
          imageUrl={place.imageUrl}
        />
        <hr
          style={{
            borderColor: "purple",
            borderRadius: "50%",
            margin: "auto",
          }}
        />
      </>
    );
  });

  return (
    <div>
      <Navbar />
      {destinations}
    </div>
  );
}
