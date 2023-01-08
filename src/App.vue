<template>
  <div id="app">
    <welcome />

    <sidebar />

    <div class="content">
      <symbols position="top" />

      <transition name="fade" mode="out-in" class="route">
        <keep-alive>
          <router-view class="content-body" />
        </keep-alive>
      </transition>

      <symbols position="bottom" />
    </div>

    <transitions />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    sidebar: () => import("@/components/app/sidebar/index.vue"),
    symbols: () => import("@/components/app/symbols/index.vue"),
    welcome: () => import("@/components/app/welcome/index.vue"),
    transitions: () => import("@/components/app/transitions/index.vue"),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

.fade-enter {
  opacity: 1 !important;
}

.fade-enter-active {
  opacity: 0.3 !important;
}

.fade-leave-active {
  opacity: 0;
  transition: all 600ms;
}
</style>
