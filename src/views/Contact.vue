<template>
  <div class="content-body" id="contact-page">
    <div class="left">
      <textCode text="h1" />
      <textHeader text="Contact Me" close="true" class="title"></textHeader>
      <div class="deks">
        <textCode text="p" />
        <p style="margin-bottom: 1rem">
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </p>
        <textCode text="p" />
      </div>
      <textCode text="form" />
      <form action="mailto:lazlanrafar@gmail.com" autocomplete="off">
        <div class="flex">
          <input
            type="text"
            name="name"
            placeholder="Name"
            class="double"
            autocomplete="true"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            class="double"
            autocomplete="true"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          class="single flex"
          autocomplete="true"
        />
        <textarea
          name="field"
          id="field"
          cols="30"
          rows="5"
          placeholder="Message"
          class="flex"
          autocomplete="true"
        ></textarea>
        <div class="action">
          <a
            type="submit"
            onclick="location.href='mailto:lazlanrafar@gmail.com';"
            class="btn-message"
          >
            <box-icon name="paper-plane"></box-icon>
          </a>
        </div>
      </form>
      <textCode text="form" isClose />
    </div>
    <div class="right">
      <ul class="sosmed">
        <li v-for="(item, index) in socialMedia" :key="index">
          <a :href="item.link" target="_blank">
            <box-icon :name="item.icon" type="logo"></box-icon>
            <span>{{ item.username }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {
    textHeader: () => import("@/components/atoms/text-header.vue"),
    textCode: () => import("@/components/atoms/text-code.vue"),
  },
  data() {
    return {
      socialMedia: [
        {
          icon: "gmail",
          username: "lazlanrafar@gmail.com",
          link: "mailto:lazlanrafar@gmail.com",
        },
        {
          icon: "instagram-alt",
          username: "lazlanrafar",
          link: "https://www.instagram.com/lazlanrafar/",
        },
        {
          icon: "github",
          username: "lazlanrafar",
          link: "https://github.com/lazlanrafar",
        },
        {
          icon: "twitter",
          username: "lazlanrafar",
          link: "https://twitter.com/lazlanrafar",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/contact.scss";
</style>
