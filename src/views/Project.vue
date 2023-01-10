<template>
  <div id="page-project">
    <div class="title-page">
      <textCode text="h1" />
      <header-text text="My Project" close="true"></header-text>
    </div>

    <div class="row">
      <article v-for="(item, index) in reports" :key="index" class="column">
        <a :href="item.link" target="_blank">
          <div class="card">
            <img
              :src="require(`@/assets/images/projects/${item.image}`)"
              class="project-img"
              alt=""
            />

            <div class="action">
              <a target="_blank" :href="item.sourceCode"> Source Code </a>
              <a target="_blank" :href="item.link"> Visit </a>
            </div>

            <img
              src="https://i.imgur.com/wxn8iAD.png"
              alt="anya"
              class="anya"
            />
          </div>
        </a>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  components: {
    HeaderText: () => import("@/components/atoms/text-header.vue"),
    TextCode: () => import("@/components/atoms/text-code.vue"),
  },
  data() {
    return {};
  },
  computed: {
    reports() {
      return this.$store.state.Project.reports;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/project.scss";
</style>
