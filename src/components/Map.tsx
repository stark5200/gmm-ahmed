'use client';

import { useMemo } from "react";
import {  GoogleMap, InfoWindowF, MarkerF, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import { Loading } from "@nextui-org/react"; 

export default function Home() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`, 
    libraries: ["places"],
  });

  if(!isLoaded) return <Loading>Loading</Loading>;

  return <Map />;
}

function Map() {
  const center = useMemo( () => ({lat:47.36911, lng:8.54429}), []);
  
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container" >
      <Marker 
        position={center} 
        label={'Green Marmot Capsule Hotel Zürich'}>
      </Marker >
    </GoogleMap>)
}

//icon={<img src="./pictures/double_capsule1" alt="" className="rounded-2xl" width={50} height={50}/>}