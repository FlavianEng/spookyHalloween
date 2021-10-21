<template>
  <div
    v-show="isCreditsDisplayed"
    class="
      w-full
      fixed
      h-full
      top-0
      left-0
      flex
      justify-center
      items-center
      z-40
      overflow-y-auto
    "
  >
    <div class="bg-gray-900 w-full h-full fixed top-0 opacity-90"></div>
    <div class="bg-purple-900 w-11/12 p-4 z-50 rounded absolute mb-4 top-4">
      <div class="flex items-center justify-center flex-col">
        <div
          class="flex items-center justify-center text-white font-bold p-4 pt-0"
        >
          <h2 class="text-lg">Credits</h2>
          <button
            class="
              absolute
              right-4
              text-2xl
              md:text-4xl
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
      <div
        class="
          flex flex-col
          justify-center
          items-center
          mt-2
          text-white text-sm
          md:text-base
        "
      >
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

        <!-- TEXT -->
        <div class="w-11/12 p-4 my-2 bg-purple-700 rounded shadow-sm">
          <a
            class="text-yellow-500 font-bold"
            href="https://www.history.com/topics/halloween/history-of-halloween"
            >Text : Black cats and Ghosts on Halloween</a
          >
          by
          <a class="text-yellow-500 font-bold" href="History.com Editors"
            >History.com Editors</a
          >
        </div>

        <!-- SOUND -->
        <div class="w-11/12 p-4 my-2 bg-purple-700 rounded shadow-sm">
          <a
            class="text-yellow-500 font-bold"
            href="https://www.youtube.com/watch?v=6wgClhYQpB8"
            >Free Sound Effect - Horror Ambience</a
          >
          by
          <a
            class="text-yellow-500 font-bold"
            href="https://www.youtube.com/channel/UCaDZv4oLT0uUIwsu68tJnfg"
            >Stingray Productions</a
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
