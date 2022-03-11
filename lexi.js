import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
const container = document.createElement( 'div' );
document.body.appendChild( container );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.5, 50 );
camera.position.set( 0.5, 0.75, 2 );

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


loader.load( 'http://localhost:5500/model/Airpods/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );
	scene.background = new THREE.Color(0xffffff)
	var light = new THREE.HemisphereLight(0xffffff,0x000000,2)
	gltf.scene.scale.multiplyScalar(1/25); // adjust scalar factor to match your scene scale
	scene.add(light);	
	render();

}, undefined, function ( error ) {

	console.error( error );

} );

function render() {

	renderer.render( scene, camera );

}