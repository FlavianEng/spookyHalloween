<template>
  <div class="w-screen h-screen bg-green-500 flex">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>
