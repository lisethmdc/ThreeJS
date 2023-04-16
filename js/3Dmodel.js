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

scene.add(new THREE.AxesHelper(10));

//* Add light
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

const dl = new THREE.DirectionalLight(0xffffff, 0,5);
dl.position.set(0, 6, 0);
const dlHelper = new THREE.DirectionalLightHelper(dl, 3);
scene.add(dl, dlHelper);


/ Add 3D model */
const gltfLoader = new GLTFLoader(); //loader depends on file type

gltfLoader.load('/assets/models/scene.gltf', (gltf) => {
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
