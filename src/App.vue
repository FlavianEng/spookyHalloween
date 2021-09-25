<template>
  <div>
    <Scene ref="bgScene"></Scene>
  </div>
</template>

<script>
import Scene from "./components/Scene.vue";

export default {
  name: "App",
  components: {
    Scene,
  },
  mounted() {
    this.$refs.bgScene.init();
  },
};
</script>
