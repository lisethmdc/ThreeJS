import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/ Make scene */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(  //fov: small number = more closer
  50,
  window.innerWidth / window.innerHeight
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x0e2f44);
document.body.appendChild(renderer.domElement);

/ Controls */

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(30, 10, 10);
controls.update();

//* Make cube
const geometry = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);
const material = new THREE.MeshBasicMaterial( {color: 0xa1d9d8, wireframe: true} );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;

/* cube with shaders */

/* const geometry = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);
const material = new THREE.ShaderMaterial({
  color: 0xa1d9d8,
  wireframe: true,
  vertexShader: `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, position.z, 1.0);
  }`,
  fragmentShader: `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
  `
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5; */


/ Make function to animate */
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
