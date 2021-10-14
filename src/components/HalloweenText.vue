<template>
  <div class="w-full h-screen">
    <Switch
      class="fixed top-0 right-0"
      @isSwitchToggled="toggleTextVisibility"
    ></Switch>
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

      <h2 class="text-9xl mb-40% font-Creepster text-center text-yellow-500">
        Spooky Halloween !
      </h2>
    </div>
  </div>
</template>

<script>
import Switch from "./Switch.vue";
export default {
  name: "TextContent",
  components: {
    Switch,
  },
  data() {
    return {
      isTextVisible: true,
    };
  },
  methods: {
    toggleTextVisibility(toggleState) {
      this.isTextVisible = toggleState;
    },
  },
};
</script>
