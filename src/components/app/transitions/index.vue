<template>
  <div class="trans-back" ref="transition">
    <img src="@/assets/images/loading.gif" alt="Image GIF" width="100" />
    <p>Let me think &#129300; ...</p>
  </div>
</template>

<script>
export default {
  name: "app-transitions",
  mounted() {
    this.$store.state.App.bgTranstition = this.$refs.transition;
  },
};
</script>

<style lang="scss">
.trans-back {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(--main-color);
  z-index: 99;
  color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  transform: translateX(100%);
  transition: transform 800ms ease;

  p {
    margin: 0.5rem 0;
  }
}
.trans-back.show {
  transform: translateX(0);
}
</style>
