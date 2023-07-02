"use client";

import { useMemo } from "react";
import {  GoogleMap, InfoWindowF, MarkerF, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import { Loading } from "@nextui-org/react"; 

export default function Home() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`, 
  });

  if(!isLoaded) return <Loading>Loading</Loading>;

  return <Map />;
}

function Map() {
  const center = useMemo( () => ({lat:47.369222464373024, lng:8.54432982564593}), []);
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <Marker position={center}></Marker>
    </GoogleMap>)
}