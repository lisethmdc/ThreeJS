import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



/* Make scene */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor ( 0xfffafa );
document.body.appendChild( renderer.domElement );

/* Controls */

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set(0, 0, 100);
controls.update();

/* Make cube */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( {color: 0xa1d9d8} );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;

/* Model */

/*const loader = new GLTFLoader();

loader.load('/Models/houseUP.glb', function ( gltf ) {
    scene.add( gltf.scene );
}, undefined, function ( error ) {

	console.error( error );

});

camera.position.z = 5;*/


/* Make function to animate */
function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}
animate();
