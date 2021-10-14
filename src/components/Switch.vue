<template>
  <div
    class="flex justify-end items-center cursor-pointer"
    @click="toggleSwitch"
  >
    <div
      class="text-yellow-500 mr-2 font-bold"
      :class="{ 'text-purple-500': isOn }"
    >
      Afficher le texte
    </div>
    <div
      class="w-14 h-7 bg-yellow-500 rounded-full flex items-center p-1"
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
  props: {},
  emits: ["isSwitchToggled"],
  data() {
    return {
      isOn: true,
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
