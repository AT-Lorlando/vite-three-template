import * as THREE from "three"
import * as TWEEN from "@tweenjs/tween.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

let renderer, scene, camera, controls
let cube, light
const canvas = document.getElementById("three")

init()
animate()

// Initialising three js
function init() {
    // Creating scene
    scene = new THREE.Scene()

    // Creating renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Creating camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 5


    // Creating light
    light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(10, 10, 10)
    scene.add(light)

    // Creating orbit controls
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true

    // Creating cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube)
}

function animate() {
    requestAnimationFrame(animate)
    render()
}

function render() {
    TWEEN.update()
    renderer.render(scene, camera)
}