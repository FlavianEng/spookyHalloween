<template>
  <div class="font-Poppins">
    <Scene
      ref="scene"
      class="fixed top-0 left-0"
      @sceneIsReady="hideSplashscreen"
    ></Scene>
    <HalloweenText
      v-if="!debug"
      class="absolute"
      :class="{ 'overflow-hidden': isLoading }"
      :play-audio="playAudio"
      :stop-audio="stopAudio"
    ></HalloweenText>
    <SplashScreen
      v-show="isLoading && !debug"
      ref="splashscreen"
    ></SplashScreen>
  </div>
</template>

<script>
import Scene from "./components/Scene.vue";
import HalloweenText from "./components/HalloweenText.vue";
import SplashScreen from "./components/SplashScreen.vue";

// TASK Create a README.MD with a link to the 3D model author
export default {
  name: "App",
  components: {
    Scene,
    HalloweenText,
    SplashScreen,
  },
  data() {
    return {
      isLoading: true,
      debug: false,
    };
  },
  methods: {
    hideSplashscreen() {
      this.$refs.splashscreen.resetSplashscreen();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    playAudio() {
      this.$refs.scene.playAudio();
    },
    stopAudio() {
      this.$refs.scene.stopAudio();
    },
  },
};
</script>
