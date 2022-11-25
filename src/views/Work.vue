<template>
  <div id="work-page">
    <div class="title">
      <textCode text="h1" />
      <textHeader text="My Work" close="true" />
    </div>
    <div class="work-list">
      <div class="work" v-for="(work, index) in reports" :key="index">
        <div class="information">
          <textCode text="h1" />
          <h1 class="work-title">0{{ index + 1 }}.</h1>
          <h1 class="work-title">
            {{ work.title }}
            <textCode text="h1" isClose />
          </h1>
          <img
            :src="require(`@/assets/images/works/${work.img}`)"
            alt=""
            class="mobile-img"
          />
          <textCode text="p" />
          <p class="description">
            {{ work.description }}
          </p>
          <div class="tools">
            <p>
              Code Tools :
              <span>{{ work.codeTools.join(", ") }}</span>
            </p>
            <p class="design">
              Design : <span>{{ work.design }}</span>
            </p>
          </div>
          <textCode text="p" isClose />
          <div class="links">
            <a
              target="_blank"
              :href="work.link"
              :class="work.link === '' ? 'disabled' : 'links'"
            >
              Visit Now
            </a>
          </div>
        </div>
        <div class="img">
          <img :src="require(`@/assets/images/works/${work.img}`)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkPage",
  components: {
    textHeader: () => import("@/components/atoms/text-header.vue"),
    textCode: () => import("@/components/atoms/text-code.vue"),
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

<style lang="scss" scoped>
@import "@/assets/scss/work.scss";
</style>
