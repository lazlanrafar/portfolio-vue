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
