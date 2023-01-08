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
      <form @submit.prevent="handleSubmit">
        <input type="hidden" name="_captcha" value="false" />
        <div class="flex">
          <input
            type="text"
            name="name"
            placeholder="Name"
            class="double"
            v-model="email.name"
            required
            autocomplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            class="double"
            v-model="email.email"
            required
            autocomplete="off"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          class="single flex"
          v-model="email.subject"
          required
          autocomplete="off"
        />
        <textarea
          name="field"
          id="field"
          cols="30"
          rows="5"
          placeholder="Message"
          class="flex"
          v-model="email.message"
          required
          autocomplete="off"
        ></textarea>
        <div class="action">
          <ul class="sosmed">
            <li v-for="(item, index) in socialMedia" :key="index">
              <a :href="item.link" target="_blank">
                <box-icon :name="item.icon" type="logo" class="icon"></box-icon>
              </a>
            </li>
          </ul>
          <button type="submit" class="btn-message">Send</button>
        </div>
      </form>
      <textCode text="form" isClose />
    </div>
    <div class="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253421.23467417312!2d109.00882292810135!3d-7.043702235702081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fc7eb6d12ff35%3A0x5027a76e35665a0!2sKertayasa%2C%20Kec.%20Kramat%2C%20Kabupaten%20Tegal%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1669638706021!5m2!1sid!2sid"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        lang="en"
      ></iframe>
    </div>

    <div class="loader" v-if="isShowingStatus">
      <div class="lds-ring" v-if="isLoading"></div>
      <div v-else class="message-status">
        <b>{{ sendMessageStatus }}</b>
        <p>{{ statusMessage }}</p>
        <button @click="toggleStatusPage">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
          link: "mailto:lazlanrafar@gmail.com",
        },
        {
          icon: "instagram-alt",
          link: "https://www.instagram.com/lazlanrafar/",
        },
        {
          icon: "github",
          link: "https://github.com/lazlanrafar",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/lazlanrafar",
        },
      ],
      email: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      statusMessage:
        "Your Message has been sent successfully, I will contact you very soon !",
      sendMessageStatus: "Thank you !",
      isLoading: false,
      isShowingStatus: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.isLoading = true;
      this.toggleStatusPage();
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post("https://formsubmit.co/ajax/lazlanrafar@gmail.com", {
          name: this.email.name,
          email: this.email.email,
          subject: this.email.subject,
          message: this.email.message,
        })
        .then(() => {
          // console.log(res);
          this.email = {
            name: "",
            email: "",
            subject: "",
            message: "",
          };
          this.isLoading = false;
          this.isShowingStatus = true;
          this.statusMessage =
            "Your Message has been sent successfully, I will contact you very soon !";
          this.sendMessageStatus = "Thank you !";
        })
        .catch((err) => {
          console.log(err);
          this.isShowingStatus = true;
          this.isLoading = false;
          this.statusMessage =
            "Some error has occured, Please try again next time !";
          this.sendMessageStatus = "Sorry !";
        });
    },
    toggleStatusPage() {
      this.isShowingStatus = !this.isShowingStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/contact.scss";
</style>
