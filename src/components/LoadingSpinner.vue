<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "LoadingSpinner",
  setup() {},
})
</script>

<template>
  <svg viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20"></circle>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: var(--clr-light);
  stroke-width: 3;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>