<template>
  <canvas id="sceneCanvas" class="fixed top-0 left-0"></canvas>
</template>

<script>
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// DEBUG
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  name: "Scene",
  emits: ["sceneIsReady"],
  data() {
    return {
      debug: false,
      audio: null,
      isCatSceneReady: false,
      isHouseSceneReady: false,
      isPumpkinSceneReady: false,
      isSoundsReady: false,
    };
  },
  mounted() {
    this.createScene();
    this.addAudio();
  },
  methods: {
    createScene() {
      // INFO There are no lights because GTLF loader has an on-board light map

      // Creating scene
      const scene = new Three.Scene();

      //#region Creating camera.s
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

      // Camera initial position
      camera.position.setX(1);
      camera.position.setY(1);
      camera.position.setZ(-5);

      const newCameraAngle = new Three.Euler(0, 160, 0, "XYZ");
      camera.setRotationFromEuler(newCameraAngle);

      // DEBUG
      // const cameraHelp = new Three.PerspectiveCamera(
      //   90,
      //   window.innerWidth / window.innerHeight,
      //   0.1,
      //   1000
      // );
      // cameraHelp.position.setX(10);
      // cameraHelp.position.setY(10);
      // cameraHelp.position.setZ(10); // distance
      //#endregion

      //#region Creating renderer
      const renderer = new Three.WebGLRenderer({
        canvas: document.querySelector("#sceneCanvas"),
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.outputEncoding = Three.sRGBEncoding;

      renderer.render(scene, camera);
      //#endregion

      //#region Helpers
      if (this.debug) {
        const gridHelper = new Three.GridHelper(200, 50);
        const cameraHelper = new Three.CameraHelper(camera);
        const axesHelper = new Three.AxesHelper(10);
        scene.add(gridHelper, axesHelper, camera, cameraHelper);
      }
      // DEBUG
      // const controls = new OrbitControls(cameraHelp, renderer.domElement);
      //#endregion

      //#region Creating models
      // Loaders
      const catLoader = new GLTFLoader();
      const houseLoader = new GLTFLoader();
      const pumpkinLoader = new GLTFLoader();

      // Url of the file refer to the public repo
      catLoader.load(
        "/mesh/cat/scene.gltf",
        (gltf) => {
          this.toggleSceneReady("cat");
          const catModel = gltf.scene;

          catModel.traverse((texture) => {
            // Hide white ugly edge
            if (texture.name === "edge_0") {
              texture.visible = false;
            }
          });

          scene.add(catModel);
        },
        undefined, // In progress
        function (err) {
          console.error("Three has an error : ", err);
        }
      );

      houseLoader.load(
        "/mesh/house/scene.gltf",
        (gltf) => {
          this.toggleSceneReady("house");
          const houseModel = gltf.scene;

          const scale = 2;
          houseModel.scale.set(scale, scale, scale);
          houseModel.position.x = -3.5 * scale;
          houseModel.position.y = 3.75 * scale;
          houseModel.position.z = -4.5 * scale;
          houseModel.rotateY(47.1);

          scene.add(houseModel);
        },
        undefined, // In progress
        function (err) {
          console.error("Three has an error : ", err);
        }
      );

      pumpkinLoader.load(
        "/mesh/pumpkin/scene.gltf",
        (gltf) => {
          this.toggleSceneReady("pumpkin");
          const pumpkinModel = gltf.scene;
          pumpkinModel.position.x = 0.4;
          pumpkinModel.position.z = -11.5;
          pumpkinModel.rotateY(5.2);

          scene.add(pumpkinModel);
        },
        undefined, // In progress
        function (err) {
          console.error("Three has an error : ", err);
        }
      );
      //#endregion

      function moveCamera() {
        const t = document.body.getBoundingClientRect().top;

        camera.position.x = 1 + t * -0.0001;
        camera.position.y = 1 + t * -0.0003;
        camera.position.z = -5 + t * -0.003; //Zoom effect

        const newCameraAngle = new Three.Euler(0, 160 + t * 0.0007, 0, "XYZ");
        camera.setRotationFromEuler(newCameraAngle);
      }

      document.body.onscroll = moveCamera;

      function animate() {
        requestAnimationFrame(animate);

        // Comment this when debug
        renderer.render(scene, camera);

        // DEBUG
        // controls.update();
        // renderer.render(scene, cameraHelp);
      }

      animate();
    },
    addAudio() {
      if (this.audio) {
        this.stopAudio();
        this.audio = null;
      }

      this.audio = new Audio("/audio/horrorThemeSong.mp3");
      this.audio.loop = true;
      this.audio.addEventListener("canplaythrough", () => {
        this.isSoundsReady = true;
        this.isAllScenesLoaded();
      });
    },
    playAudio() {
      this.audio.play();
    },
    stopAudio() {
      this.audio.pause();
    },
    isAllScenesLoaded() {
      if (
        this.isCatSceneReady &&
        this.isHouseSceneReady &&
        this.isPumpkinSceneReady &&
        this.isSoundsReady
      ) {
        this.$emit("sceneIsReady");
      }
    },
    toggleSceneReady(sceneName) {
      switch (sceneName) {
        case "cat":
          this.isCatSceneReady = true;
          break;
        case "house":
          this.isHouseSceneReady = true;
          break;
        case "pumpkin":
          this.isPumpkinSceneReady = true;
          break;

        default:
          break;
      }

      this.isAllScenesLoaded();
    },
  },
};
</script>
