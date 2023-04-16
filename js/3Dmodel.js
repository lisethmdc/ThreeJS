import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";


//*  Scene and render 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
30,
window.innerWidth / window.innerHeight
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x0e2f44);
document.body.appendChild(renderer.domElement);


//* Controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(30, 10, 10);
controls.update();

//* Add light
var light = new THREE.AmbientLight(0xffffff);
scene.add(light);


/ Add 3D model */
const gltfLoader = new GLTFLoader(); //loader depends on file type

gltfLoader.load('/assets/textures/scene.gltf', (gltf) => {
    gltf.scene.position.y = -3.5; //position model top/bottom
    gltf.scene.scale.set(10, 10, 10);
    scene.add(gltf.scene);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
