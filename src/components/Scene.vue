<template>
  <canvas id="sceneCanvas" class="fixed top-0 left-0"></canvas>
</template>

<script>
// TASK Create a README.MD with a link to the 3D model author
import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  name: "Scene",
  data() {
    return {
      debug: false,
    };
  },
  methods: {
    init() {
      // The Three scene is the container
      const scene = new Three.Scene();
      scene.background = new Three.Color(0x281f2e);

      // Params : Field of view, aspectRation, viewFrustrum
      const camera = new Three.PerspectiveCamera(
        75,
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

      camera.position.setZ(30);

      renderer.render(scene, camera);

      // Light
      const pointLight = new Three.PointLight(0xffffff);
      pointLight.position.set(5, 5, 5);

      const ambientLight = new Three.AmbientLight(0xffffff);

      scene.add(pointLight, ambientLight);

      // Helper
      if (this.debug) {
        const lightHelper = new Three.PointLightHelper(pointLight);
        const gridHelper = new Three.GridHelper(200, 50);

        scene.add(lightHelper, gridHelper);
      }
      const controls = new OrbitControls(camera, renderer.domElement);

      // Loader
      const loader = new GLTFLoader();

      // Url of the file refer to the public repo
      loader.load(
        "/3dModels/scene.gltf",
        (gltf) => {
          // TASK Give author with gltf extra
          console.log("It is load", gltf);

          const model = gltf.scene;
          scene.add(model);
        },
        undefined, //Progress step
        function (err) {
          console.error("Three is an error", err);
        }
      );

      function animate() {
        requestAnimationFrame(animate);

        controls.update();

        renderer.render(scene, camera);
      }

      animate();
    },
  },
};
</script>
