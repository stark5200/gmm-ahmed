import Image from "next/image";

// video component

type PrivateProp = {
  source: string
}

const CustomImage = ({source}: PrivateProp) => {
  return (
    <div className="">
      //Videom goes here
    </div>
  )
}

export default CustomImage

import { useEffect, useRef } from 'react';

function VideoPlayer = () {
  const cloudinaryRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if ( cloudinaryRef.current ) return;

    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: 'colbycloud-examples'
    })
  }, []);

  return (
      <video
        ref={videoRef}
      />
  );
}
