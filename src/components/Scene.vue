<template>
  <canvas id="sceneCanvas" class="fixed top-0 left-0"></canvas>
</template>

<script>
// TASK Create a README.MD with a link to the 3D model author
import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { GUI } from "three/examples/jsm/libs/dat.gui.module";

export default {
  name: "Scene",
  data() {
    return {
      debug: true,
    };
  },
  methods: {
    init() {
      // The Three scene is the container
      const scene = new Three.Scene();
      scene.background = new Three.Color(0x281f2e);

      // Camera params
      // fov — Camera frustum vertical field of view.
      // aspect — Camera frustum aspect ratio.
      // near — Camera frustum near plane.
      // far — Camera frustum far plane.
      const camera = new Three.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const cameraHelp = new Three.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new Three.WebGLRenderer({
        canvas: document.querySelector("#sceneCanvas"),
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.outputEncoding = Three.sRGBEncoding;

      cameraHelp.position.setX(10);
      cameraHelp.position.setY(10);
      cameraHelp.position.setZ(10); // distance

      // Camera initial position
      camera.position.setX(0);
      camera.position.setY(1);
      camera.position.setZ(-2);
      // camera.rotateX(1);
      camera.rotateY(160.3);
      // camera.rotateZ(-3.14);

      renderer.render(scene, camera);

      // Light
      // TASK Set better light, coming from the moon
      const pointLight = new Three.PointLight(0xffffff);
      pointLight.position.set(5, 5, 5);

      const ambientLight = new Three.AmbientLight(0xffffff);

      scene.add(pointLight, ambientLight);

      // Helper
      if (this.debug) {
        // const lightHelper = new Three.PointLightHelper(pointLight);
        // const gridHelper = new Three.GridHelper(200, 50);
        const cameraHelper = new Three.CameraHelper(camera);
        // const axesHelper = new Three.AxesHelper(5);

        scene.add(
          // lightHelper,
          // gridHelper,
          // axesHelper,
          camera,
          cameraHelper
        );
      }
      const controls = new OrbitControls(cameraHelp, renderer.domElement);

      // Loader
      const loader = new GLTFLoader();

      // Url of the file refer to the public repo
      loader.load(
        "/mesh/scene.gltf",
        (gltf) => {
          // TASK Give author with gltf extra
          console.log("It is load", gltf);
          const model = gltf.scene;

          model.traverse((texture) => {
            // Hide white ugly edge
            if (texture.name === "edge_0") {
              texture.visible = false;
            }
          });

          scene.add(model);
        },
        undefined, // In progress
        function (err) {
          console.error("Three has an error : ", err);
        }
      );

      function animate() {
        requestAnimationFrame(animate);

        controls.update();

        renderer.render(scene, camera);
        // renderer.render(scene, cameraHelp);
      }

      animate();
    },
  },
};
</script>
