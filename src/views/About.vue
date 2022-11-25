<template>
  <div class="content-body" id="about">
    <div class="text">
      <textCode text="h1" />
      <textHeader
        text="Me,Myself & I"
        class="title"
        open="true"
        close="true"
      ></textHeader>
      <div class="deks">
        <textCode text="p" />
        <p style="margin-bottom: 1rem">
          Hii I'm a Full Stack Web Developer based in Indonesia. I describe
          myself as a passionate developer who loves coding, open source, and
          the web platform.
        </p>
        <p>
          Aside from my job, I like to create and contribute to open source
          projects. That helps me to learn a ton of new stuff, grow as a
          developer and support other open source projects.
        </p>
        <textCode text="p" isClose />
      </div>
    </div>
    <tagCloud />
  </div>
</template>

<script>
export default {
  name: "About",
  components: {
    textHeader: () => import("@/components/atoms/text-header.vue"),
    textCode: () => import("@/components/atoms/text-code.vue"),
    tagCloud: () => import("@/components/organisms/tag-cloud/index.vue"),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/about.scss";
</style>
