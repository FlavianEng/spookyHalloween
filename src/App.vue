<template>
  <div class="font-Poppins">
    <Scene
      ref="bgScene"
      class="fixed top-0 left-0"
      @sceneIsReady="hideSplashscreen"
    ></Scene>
    <HalloweenText
      v-if="true"
      class="absolute"
      :class="{ 'overflow-hidden': isLoading }"
    ></HalloweenText>
    <SplashScreen v-show="isLoading" ref="splashscreen"></SplashScreen>
    <!-- TASK Add an animated scroll icon -->
  </div>
</template>

<script>
import Scene from "./components/Scene.vue";
import HalloweenText from "./components/HalloweenText.vue";
import SplashScreen from "./components/SplashScreen.vue";

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
    };
  },
  mounted() {
    this.$refs.bgScene.init();
  },
  methods: {
    hideSplashscreen() {
      // TASK Adds a fading animation
      this.isLoading = false;
      this.$refs.splashscreen.resetSplashscreen();
      // TASK Once splashscreen is hided, fade the text with opacity 0 to opacity 1
    },
  },
};
</script>
