<template>
  <div class="flex items-center justify-center animate-arrow-down">
    <svg
      id="scrollDownIcon"
      data-name="scrollDownIcon"
      :height="height"
      viewBox="0 0 24 24"
      :width="width"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        fill="none"
        points="7 13 12 18 17 13"
        :stroke="iconColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />
      <polyline
        fill="none"
        points="7 6 12 11 17 6"
        :stroke="iconColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-width="strokeWidth"
      />
    </svg>
    <p class="text-yellow-500 font-bold text-base">Scroll</p>
  </div>
</template>

<script>
export default {
  name: "ArrowDownIcon",
  props: {
    width: {
      type: [Number, String],
      default: 30,
    },
    height: {
      type: [Number, String],
      default: 30,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
    strokeWidth: {
      type: [Number, String],
      default: 2,
    },
  },
};
</script>
