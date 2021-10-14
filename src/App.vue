<template>
  <div class="font-Poppins">
    <Scene ref="bgScene" class="fixed top-0 left-0"></Scene>
    <HalloweenText v-if="true" class="absolute"></HalloweenText>
    <!-- TASK Add an animated scroll icon -->
  </div>
</template>

<script>
import Scene from "./components/Scene.vue";
import HalloweenText from "./components/HalloweenText.vue";

export default {
  name: "App",
  components: {
    Scene,
    HalloweenText,
  },
  mounted() {
    this.$refs.bgScene.init();
  },
};
</script>
