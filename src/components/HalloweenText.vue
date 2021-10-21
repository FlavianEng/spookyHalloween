<template>
  <div
    class="w-full h-screen"
    :class="{ 'overflow-hidden': isCreditsDisplayed }"
  >
    <ArrowDownIcon
      v-show="isShowScrollIcon"
      :height="iconSize"
      :width="iconSize"
      class="text-yellow-500 flex w-full fixed bottom-28 ml-auto"
    ></ArrowDownIcon>
    <Credits
      :is-credits-displayed="isCreditsDisplayed"
      @close="toggleCreditsDisplayed"
    ></Credits>

    <!-- Header -->
    <!-- Desktop menu -->
    <div class="hidden md:block">
      <div class="fixed top-0 flex w-full justify-between z-20 my-4">
        <div class="ml-4">
          <button
            class="
              text-purple-500
              font-bold
              border-b-2 border-transparent
              hover:border-purple-500 hover:text-yellow-500
              transition-all
              duration-500
            "
            @click="toggleCreditsDisplayed"
          >
            Credits
          </button>
        </div>
        <div class="mr-4">
          <Switch
            label="Display texts"
            class="mb-2"
            @isSwitchToggled="toggleTextVisibility"
          ></Switch>
          <Switch
            label="Activate the sound"
            :initial-state="false"
            @isSwitchToggled="toggleAudio"
          ></Switch>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div class="block md:hidden fixed top-0 z-20">
      <button
        v-show="!isMenuOpen"
        class="flex items-center justify-center text-yellow-500 m-1"
        @click="openMenu"
      >
        <p class="text-vertical tracking-tightest text-xs font-bold">Menu</p>
        <WitchIcon
          :height="iconSize"
          :width="iconSize"
          class="mt-1"
        ></WitchIcon>
      </button>
    </div>
    <div
      class="
        h-screen
        bg-gray-900
        w-56
        text-purple-500
        font-bold
        p-4
        flex flex-col
        justify-start
        items-start
        transform
        transition-all
        duration-500
        md:hidden
        fixed
        top-0
        z-20
      "
      :class="[isMenuOpen ? 'translate-x-0' : '-translate-x-56']"
    >
      <div class="flex flex-col w-full mb-4">
        <div class="flex justify-between items-center" @click="closeMenu">
          <p>Menu</p>
          <span class="text-xl">&times;</span>
        </div>
        <span class="w-full h-1 bg-purple-500 rounded"></span>
      </div>

      <button
        class="
          text-purple-500
          font-bold
          border-b-2 border-transparent
          hover:border-purple-500 hover:text-yellow-500
          transition-all
          duration-500
          mb-2
        "
        @click="toggleCreditsDisplayed"
      >
        Credits
      </button>

      <Switch
        label="Display texts"
        class="mb-4"
        @isSwitchToggled="toggleTextVisibility"
      ></Switch>
      <Switch
        label="Activate the sound"
        :initial-state="false"
        @isSwitchToggled="toggleAudio"
      ></Switch>
    </div>
    <!-- Content -->
    <div
      class="
        flex flex-col
        p-10
        mt-60
        md:mt-80
        text-white
        transition-all
        duration-500
      "
      :class="[isTextVisible ? 'opacity-100' : 'opacity-0']"
    >
      <p class="text-base-halloween">
        Halloween has always been a holiday filled with mystery, magic and
        superstition. It began as a Celtic end-of-summer festival during which
        people felt especially close to deceased relatives and friends.
      </p>

      <p class="text-base-halloween">
        For these friendly spirits, they set places at the dinner table, left
        treats on doorsteps and along the side of the road and lit candles to
        help loved ones find their way back to the spirit world.
      </p>

      <p class="text-base-halloween">
        Today’s Halloween ghosts are often depicted as more fearsome and
        malevolent, and our customs and superstitions are scarier too.
      </p>

      <p class="text-base-halloween">
        We avoid crossing paths with black cats, afraid that they might bring us
        bad luck. This idea has its roots in the Middle Ages, when many people
        believed that witches avoided detection by turning themselves into black
        cats.
      </p>

      <p class="text-base-halloween">
        We try not to walk under ladders for the same reason. This superstition
        may have come from the ancient Egyptians, who believed that triangles
        were sacred (it also may have something to do with the fact that walking
        under a leaning ladder tends to be fairly unsafe).
      </p>

      <p class="text-base-halloween">
        And around Halloween, especially, we try to avoid breaking mirrors,
        stepping on cracks in the road or spilling salt.
      </p>

      <h2
        class="
          text-5xl
          lg:text-9xl
          mb-70vh
          font-Creepster
          text-center text-yellow-500
        "
      >
        Spooky Halloween !
      </h2>
    </div>
  </div>
</template>

<script>
import Switch from "./Switch.vue";
import Credits from "./Credits.vue";
import ArrowDownIcon from "./icons/ArrowDownIcon.vue";
import WitchIcon from "./icons/WitchIcon.vue";

export default {
  name: "TextContent",
  components: {
    Switch,
    Credits,
    ArrowDownIcon,
    WitchIcon,
  },
  props: {
    playAudio: {
      type: Function,
      required: true,
    },
    stopAudio: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isTextVisible: true,
      isCreditsDisplayed: false,
      iconSize: 40,
      scrollIconTimeoutDelay: 10000,
      scrollIconTimeout: null,
      isShowScrollIcon: false,
      isAudioPlaying: false,
      isMenuOpen: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.stopScrollIconTimeout);
    this.startScrollIconTimeout();
  },
  destroyed() {
    window.addEventListener("scroll", this.stopScrollIconTimeout);
  },
  methods: {
    toggleTextVisibility(toggleState) {
      this.isTextVisible = toggleState;
    },
    toggleAudio(toggleState) {
      this.isAudioPlaying = toggleState;
      if (this.isAudioPlaying) {
        this.playAudio();
      } else {
        this.stopAudio();
      }
    },
    toggleCreditsDisplayed() {
      this.isCreditsDisplayed = !this.isCreditsDisplayed;
    },
    startScrollIconTimeout() {
      this.scrollIconTimeout = setTimeout(() => {
        this.isShowScrollIcon = true;
      }, this.scrollIconTimeoutDelay);
    },
    stopScrollIconTimeout() {
      this.isShowScrollIcon = false;
      clearTimeout(this.scrollIconTimeout);
      this.scrollIconTimeout = null;
    },
    openMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
