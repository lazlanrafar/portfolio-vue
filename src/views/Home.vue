<template>
  <div id="home">
    <div>
      <textCode text="h1" />
      <textHeader text="Hi," home="true" />
      <textHeader text="I'm Latoe," home="true" />
      <textHeader text="web developer" close="true" home="true" />
      <textCode text="p" />
      <p class="desc">Front-End & Back-End Developer 🎉</p>
      <textCode text="p" isClose />
      <br />
      <buttonPrimary text="About me!" :onClick="handleAbout" />
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
    buttonPrimary: () => import("@/components/atoms/button-primary.vue"),
  },
  methods: {
    handleAbout() {
      this.$router.push("/about");

      this.navTransition(1);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/home.scss";
</style>
