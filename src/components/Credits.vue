<template>
  <div
    v-show="isCreditsDisplayed"
    class="w-full h-screen fixed top-0 left-0 flex justify-center items-center"
  >
    <div class="bg-gray-900 w-full h-screen z-40 absolute opacity-90"></div>
    <div class="bg-purple-900 w-3/4 p-4 z-50 rounded">
      <div class="flex items-center justify-center flex-col">
        <div
          class="flex items-center justify-center text-white font-bold p-4 pt-0"
        >
          <h2 class="text-lg">Credits</h2>
          <button
            class="
              absolute
              right-60
              text-4xl
              transform
              origin-center
              rotate-0
              hover:rotate-90
              transition-all
              duration-300
            "
            @click="closeCredits"
          >
            &times;
          </button>
        </div>
        <div class="w-11/12 h-1 bg-yellow-400 rounded-full"></div>
      </div>
      <div class="flex flex-col justify-center items-center mt-2 text-white">
        <!-- TOON HOUSE -->
        <div class="w-11/12 p-4 my-2 bg-purple-700 rounded shadow-sm">
          <a class="text-yellow-500 font-bold" href="https://skfb.ly/DJyP"
            >Toon houses night version</a
          >
          by
          <a
            class="text-yellow-500 font-bold"
            href="https://sketchfab.com/luyssport"
            >luyssport</a
          >
          is licensed under
          <a
            class="text-yellow-500 font-bold"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC Attribution - NonCommercial - ShareAlike</a
          >
        </div>

        <!-- CAT -->
        <div class="w-11/12 p-4 my-2 bg-purple-700 rounded shadow-sm">
          <a class="text-yellow-500 font-bold" href="https://skfb.ly/V7TZ"
            >HH</a
          >
          by
          <a
            class="text-yellow-500 font-bold"
            href="https://sketchfab.com/luyssport"
            >luyssport</a
          >
          is licensed under
          <a
            class="text-yellow-500 font-bold"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC Attribution - NonCommercial - ShareAlike</a
          >
        </div>

        <!-- PUMPKIN -->
        <div class="w-11/12 p-4 my-2 bg-purple-700 rounded shadow-sm">
          <a class="text-yellow-500 font-bold" href="https://skfb.ly/HNDx"
            >Pumpkin final step</a
          >
          by
          <a
            class="text-yellow-500 font-bold"
            href="https://sketchfab.com/luyssport"
            >luyssport</a
          >
          is licensed under
          <a
            class="text-yellow-500 font-bold"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC Attribution - NonCommercial - ShareAlike</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Credits",
  props: {
    isCreditsDisplayed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  methods: {
    closeCredits() {
      this.$emit("close");
    },
  },
};
</script>
