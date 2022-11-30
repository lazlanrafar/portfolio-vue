<template>
  <nav class="sidebar">
    <div class="logo">
      <h1>La.</h1>
    </div>
    <div class="direct" ref="navList">
      <div class="active-back" ref="menuBag">
        <span class="top-white"></span>
        <span class="top-black"></span>
        <span class="bot-white"></span>
        <span class="bot-black"></span>
      </div>
      <div
        v-for="(navItem, index) in navList"
        :key="index"
        class="list"
        @click="navTransition(index)"
      >
        <router-link :to="navItem.link" :data-content="navItem.content">
          <box-icon
            :name="navItem.icon"
            style="fill: currentColor"
            class="icon"
          ></box-icon>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import TransitionMixin from "@/mixins/transition";
export default {
  name: "app-sidebar",
  mixins: [TransitionMixin],
  data() {
    return {
      navListSize: 0,
      navList: [
        {
          name: "Home",
          link: "/",
          content: "Home",
          icon: "home-alt",
        },
        {
          name: "About",
          link: "/about",
          content: "About",
          icon: "user",
        },
        {
          name: "Work",
          link: "/work",
          content: "Work",
          icon: "bowl-rice",
        },
        {
          name: "Project",
          link: "/project",
          content: "Project",
          icon: "coffee",
        },
        {
          name: "Contact",
          link: "/contact",
          content: "Contact",
          icon: "phone",
        },
      ],
    };
  },
  methods: {
    setActive() {
      for (const i in this.navList) {
        if (this.navList[i].name === this.$route.name) {
          this.navTransition(i);
        }
      }
    },
  },
  mounted() {
    this.$refs.navList.children[1].classList.add("active");

    this.$store.state.App.navBG = this.$refs.menuBag;
    this.$store.state.App.navHeight = this.$refs.menuBag.clientHeight;
    this.$store.state.App.navList = this.$refs.navList;
    this.$store.state.App.navLastActive = this.$refs.navList.children[1];

    this.navTransition(+this.$route.name);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/sidebar.scss";
</style>
