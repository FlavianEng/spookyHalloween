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
      this.$refs.splashscreen.resetSplashscreen();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>
