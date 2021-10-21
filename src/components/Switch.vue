<template>
  <div
    class="flex justify-end items-center cursor-pointer w-full md:w-auto"
    @click="toggleSwitch"
  >
    <div
      class="text-yellow-500 mr-auto md:mr-2 font-bold"
      :class="{ 'text-purple-500': isOn }"
    >
      {{ label }}
    </div>
    <!-- Switch -->
    <div
      class="h-7 min-w-14 bg-yellow-500 rounded-full flex items-end p-1"
      :class="{ 'bg-purple-600': isOn }"
    >
      <button
        class="
          w-5
          h-5
          rounded-full
          bg-white
          border-2 border-gray-50
          transform
          transition-all
          duration-500
          translate-x-0
        "
        :class="{ 'translate-x-7': isOn }"
      ></button>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Switch",
  props: {
    label: {
      type: String,
      default: "Switched on",
    },
    initialState: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["isSwitchToggled"],
  data() {
    return {
      isOn: this.initialState,
    };
  },
  methods: {
    toggleSwitch() {
      this.isOn = !this.isOn;
      this.$emit("isSwitchToggled", this.isOn);
    },
  },
};
</script>
