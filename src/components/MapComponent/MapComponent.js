import React from 'react';
import { GoogleMap, useLoadScript, Polygon } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '500px',
  height: '350px',
};

const options = {
  fillColor: "lightblue",
  fillOpacity: 0.5,
  strokeColor: "blue",
  strokeOpacity: 10,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};




function MapComponent({ zipCodeBoundary }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBN1f7zvX-nLieuiAa7I--fnx10H2sA0Ys", // Use your Google Maps API key
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={zipCodeBoundary[0]}
    >
      <Polygon
        paths={zipCodeBoundary}
        options={options}
      />
    </GoogleMap>
  );
}

export default MapComponent;

//https://www.arcgis.com/apps/instant/basic/index.html?appid=c4803853fecc4fd3a23f4224bbf096f3
