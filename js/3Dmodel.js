import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";


//*  Scene and render 
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x524961);
const camera = new THREE.PerspectiveCamera(
30,
window.innerWidth / window.innerHeight
);

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setClearColor(0x0e2f44);
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 6;
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);


//* Controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(30, 10, 10);
controls.update();

//scene.add(new THREE.AxesHelper(10));

//* Add light
const light = new THREE.AmbientLight(0xffffff, 100);
scene.add(light);


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
