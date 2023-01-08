<template>
  <div class="wrapper">
    <div class="pointer top-left"></div>
    <div class="pointer top-right"></div>
    <div class="pointer bottom-left"></div>
    <div class="pointer bottom-right"></div>
    <img :src="img" alt="banner" />
  </div>
</template>

<script>
export default {
  name: "WorkImage",
  data() {
    return {};
  },
  props: {
    img: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .pointer {
    width: 12px;
    height: 12px;
    background-color: var(--main-color);
    border: 2px solid var(--secondary-color);
    position: absolute;
  }

  .top-left {
    top: -4px;
    left: -4px;
  }

  .top-right {
    top: -4px;
    right: -4px;
  }

  .bottom-left {
    bottom: 4px;
    left: -4px;
  }

  .bottom-right {
    bottom: 4px;
    right: -4px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border: 4px solid var(--secondary-color);
  }
}
</style>
