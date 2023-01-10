<template>
  <div id="work-page">
    <div class="title">
      <textCode text="h1" />
      <textHeader text="My Work" close="true" />
    </div>
    <div class="work-list">
      <workItem
        v-for="(work, index) in reports"
        :key="index"
        :work="work"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkPage",
  components: {
    textHeader: () => import("@/components/atoms/text-header.vue"),
    textCode: () => import("@/components/atoms/text-code.vue"),
    workItem: () => import("@/components/organisms/work-item/index.vue"),
  },
  data() {
    return {};
  },
  computed: {
    reports() {
      return this.$store.state.Work.reports;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/work.scss";
</style>
