<template>
  <div
    class="
      w-full
      h-screen
      overflow-hidden
      bg-yellow-500
      flex flex-col
      justify-center
      items-center
      z-60
      absolute
    "
  >
    <div class="flex justify-start items-center w-full">
      <WitchIcon
        icon-name="witch"
        :height="witchSize"
        :width="witchSize"
      ></WitchIcon>
    </div>

    <div>
      <h2 class="font-Creepster text-4xl p-4 mt-8 text-purple-700">
        {{ loadingText }}
      </h2>
    </div>
  </div>
</template>

<script>
import WitchIcon from "./icons/WitchIcon.vue";

export default {
  name: "SplashScreen",
  components: {
    WitchIcon,
  },
  data() {
    return {
      witchSize: 150,
      loadingTextInterval: null,
      loadingTextDelay: 1250,
      loadingText: "",
      loadingTexts: [
        "Knock over the cauldrons",
        "Hunting ghosts",
        "Burning witches",
        "Picking pumpkins",
        "Fighting the undead",
        "Drinking potions",
        "Scaring the black cats",
      ],
      iteratorPosition: 0,
    };
  },
  mounted() {
    this.rotateLoadingTexts();
  },
  methods: {
    rotateLoadingTexts() {
      if (!this.loadingTextInterval) {
        this.loadingTextInterval = setInterval(
          this.updateIterator,
          this.loadingTextDelay
        );
      }
    },
    updateIterator() {
      if (this.iteratorPosition === this.loadingTexts.length - 1) {
        this.iteratorPosition = 0;
      } else {
        this.iteratorPosition++;
      }

      this.getLoadingText();
    },
    getLoadingText() {
      this.loadingText = this.loadingTexts[this.iteratorPosition];
    },
    resetSplashscreen() {
      clearInterval(this.loadingTextInterval);
      this.loadingTextInterval = null;
      this.iteratorPosition = 0;
    },
  },
};
</script>
