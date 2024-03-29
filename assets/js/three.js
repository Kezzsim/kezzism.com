import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { Wireframe } from 'three/addons/lines/Wireframe.js';
import { WireframeGeometry2 } from 'three/addons/lines/WireframeGeometry2.js';

let wireframe, renderer, scene, camera, controls;
let wireframe1;
let matLine, matLineBasic, matLineDashed;
const mouse = new THREE.Vector2();
const target = new THREE.Vector2();
const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);

init();
animate();

function init() {
    const container = document.getElementById('professional-3d-1');
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0.0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.set(- 25, 0, 10);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.enableRotate = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minDistance = 10;
    controls.maxDistance = 30;
    let geo = new THREE.IcosahedronGeometry(20, 1);
    const geometry = new WireframeGeometry2(geo);
    matLine = new LineMaterial({

        color: 0xdedddc,
        linewidth: 3, // in pixels
        //resolution:  // to be set by renderer, eventually
        dashed: true

    });
    wireframe = new Wireframe(geometry, matLine);
    wireframe.computeLineDistances();
    wireframe.scale.set(1, 1, 1);
    scene.add(wireframe);
    geo = new THREE.WireframeGeometry(geo);
    matLineBasic = new THREE.LineBasicMaterial({ color: 0xdedddc });
    matLineDashed = new THREE.LineDashedMaterial({ scale: 2, dashSize: 1, gapSize: 1 });
    wireframe1 = new THREE.LineSegments(geo, matLineBasic);
    wireframe1.computeLineDistances();
    wireframe1.visible = false;
    scene.add(wireframe1);
    // Event Listeners
    window.addEventListener('resize', onWindowResize);
    onWindowResize();
    window.addEventListener('mousemove', onMouseMove, false);
}
// end init

function onWindowResize() {
    let box = document.getElementById('professional-3d-1');
    camera.aspect = box.clientWidth / box.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(box.clientWidth, box.clientHeight);
    const width = window.innerWidth;
    const height = window.innerHeight;
    windowHalf.set(width / 2, height / 2);
}

function onMouseMove(event) {
    mouse.x = (event.clientX - windowHalf.x);
    mouse.y = (event.clientY - windowHalf.x);
}

function animate() {
    let box = document.getElementById('professional-3d-1');
    // Insert mouse input feedback if available
    target.x = (1 - mouse.x) * 0.001;
    target.y = (1 - mouse.y) * 0.001;
    camera.rotation.x += 0.03 * (target.y - camera.rotation.x);
    camera.rotation.y += 0.03 * (target.x - camera.rotation.y);
    requestAnimationFrame(animate);
    renderer.setClearColor(0x000000, 0);
    renderer.setViewport(0, 0, box.clientWidth, box.clientHeight);
    // resolution of the viewport
    matLine.resolution.set(box.clientWidth, box.clientHeight);
    renderer.render(scene, camera);
    renderer.setClearColor(0x222222, 1);
    renderer.clearDepth(); // important!
    renderer.setScissorTest(true);
    renderer.setScissorTest(false);
    controls.update();
}