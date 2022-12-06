<template>
  <div id="app">
    <welcome />

    <sidebar />

    <div class="content">
      <symbols position="top" />

      <transition name="fade" mode="out-in" class="route">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>

      <symbols position="bottom" />
    </div>

    <div class="trans-back" ref="transition">
      <img src="@/assets/images/loading.gif" alt="Image GIF" width="100" />
      <p>Let me think &#129300; ...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    sidebar: () => import("@/components/app/sidebar/index.vue"),
    symbols: () => import("@/components/app/symbols/index.vue"),
    welcome: () => import("@/components/app/welcome/index.vue"),
  },
  mounted() {
    this.$store.state.App.bgTranstition = this.$refs.transition;
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
