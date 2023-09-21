import Image from "next/image";

//360 image component

type PrivateProp = {
  source: string
}

const CustomImage = ({source}: PrivateProp) => {
  return (
    <div className="">
      //360 image goes here
    </div>
  )
}

export default CustomImage

// Define variables
let camera, scene, renderer, controls;

// Initialize the scene
init();

function init() {
  // Create a new camera object
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

  // Set the camera position
  camera.position.set(0, 0, 0.1);

  // Create a new scene object
  scene = new THREE.Scene();

  // Load the panorama image
  const loader = new THREE.TextureLoader();
  const texture = loader.load('panorama.jpg');

  // Set the texture wrapping and flipping options
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;

  // Create a new sphere geometry to hold the panorama image
  const geometry = new THREE.SphereGeometry(500, 60, 40);

  // Flip the geometry inside out so that the image is displayed on the inside of the sphere
  geometry.scale(-1, 1, 1);

  // Create a new material with the loaded texture
  const material = new THREE.MeshBasicMaterial({
    map: texture
  });

  // Create a new mesh with the geometry and material
  const mesh = new THREE.Mesh(geometry, material);

  // Add the mesh to the scene
  scene.add(mesh);
}
