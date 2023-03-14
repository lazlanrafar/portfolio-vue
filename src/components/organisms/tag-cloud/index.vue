<template>
  <div class="global" ref="skill"></div>
</template>

<script>
import TagCloud from "TagCloud";

export default {
  name: "tag-cloud",
  mounted() {
    const container = this.$refs.skill;
    var x = window.matchMedia("(max-width: 600px)");
    let radius = 350;

    if (x.matches) {
      radius = 200;
    }

    const texts = [
      "HTML 5",
      "CSS 3",
      "JavaScript",
      "Vue.js",
      "Next.js",
      "Jquery",
      "Bootstrap 5",
      "Laravel",
      "Tawilwind CSS",
      "Wordpress",
      "SASS",
      "Git",
      "TypeScript",
      "Express.js",
    ];
    const options = {
      radius: radius,
      itemClass: "item",
    };

    TagCloud(container, texts, options);
    document.querySelector(".tagcloud").style.margin = "auto";
  },
};
</script>

<style lang="scss" scoped>
.global {
  margin: 0 auto;
  font-weight: 600;
  color: var(--font-color);
  font-family: "Poppins", sans-serif;
  user-select: none;
}

@media only screen and (max-width: 1024px) {
  .global {
    display: block;
  }
}

@media only screen and (max-width: 600px) {
  .global {
    position: relative;
    font-weight: 500;
    font-size: 1rem;
  }
}
</style>
