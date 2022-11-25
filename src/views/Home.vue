<template>
  <div class="content-body" id="home">
    <div>
      <textCode text="h1" />
      <textHeader text="Hi," home="true" />
      <textHeader text="I'm Latoe," home="true" />
      <textHeader text="Web Developer" close="true" home="true" />
      <textCode text="p" />
      <p class="desc">Front-End & Back-End Developer 🎉</p>
      <textCode text="p" isClose />
      <br />
      <div @click="navTransition(1)">
        <router-link to="/about" class="btn">About me!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TransitionMixin from "@/mixins/transition";

export default {
  name: "Home",
  mixins: [TransitionMixin],
  components: {
    textHeader: () => import("@/components/atoms/text-header.vue"),
    textCode: () => import("@/components/atoms/text-code.vue"),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/home.scss";
</style>
