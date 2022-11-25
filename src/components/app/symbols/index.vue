<template>
  <div class="symbols">
    <div class="top" v-if="position == 'top'">
      <div class="code">html</div>
      <div class="code" style="margin-left: 0.5rem">body</div>
    </div>
    <div class="bottom" v-if="position == 'bottom'">
      <div class="code" style="margin-left: 0.5rem">/body</div>
      <div class="code">/html</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-symbols",
  props: {
    position: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.symbols {
  position: absolute;
  left: calc(var(--nav-lg) + 2rem);

  .top {
    top: 1rem;
    position: absolute;
  }

  .bottom {
    bottom: 1rem;
    position: absolute;
  }
}
</style>
