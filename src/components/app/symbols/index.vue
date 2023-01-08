<template>
  <div class="symbols">
    <div class="top" v-if="position == 'top'">
      <textCode text="html" />
      <textCode text="body" style="margin-left: 0.5rem" />
    </div>
    <div class="bottom" v-if="position == 'bottom'">
      <textCode isClose text="body" style="margin-left: 0.5rem" />
      <textCode isClose text="html" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app-symbols",
  components: {
    textCode: () => import("@/components/atoms/text-code.vue"),
  },
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

  .top {
    top: 1rem;
    position: absolute;
  }

  .bottom {
    bottom: 1rem;
    position: absolute;
  }
}

@media only screen and (max-width: 1024px) {
  .symbols {
    left: 1.5rem !important;
  }
}

@media only screen and (max-width: 600px) {
  .symbols {
    left: 1rem !important;
  }
}
</style>
