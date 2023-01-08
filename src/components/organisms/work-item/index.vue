<template>
  <div class="work">
    <div class="left">
      <textCode text="h1" />
      <h1 class="work-title">0{{ index + 1 }}.</h1>
      <h1 class="work-title">
        {{ work.title }}
        <textCode text="h1" isClose />
      </h1>
      <workImage
        class="mobile-img"
        :img="require(`@/assets/images/works/${work.img}`)"
        :background="work.background"
      />
      <textCode text="p" />
      <p class="description">
        {{ work.description }}
      </p>
      <div class="tools">
        <p>
          Tools :
          <span>{{ work.codeTools.join(", ") }}</span>
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
    <workImage
      class="right"
      :img="require(`@/assets/images/works/${work.img}`)"
    />
  </div>
</template>

<script>
export default {
  name: "WorkItem",
  components: {
    textCode: () => import("@/components/atoms/text-code.vue"),
    workImage: () => import("./work-image.vue"),
  },
  props: {
    work: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.work {
  display: flex;
  padding: 2rem 0;
  justify-content: space-around;
  align-items: center;
  font-family: poppins;

  .left {
    width: 40%;
    color: var(--secondary-color);

    .work-title {
      font-size: 2vw;
      display: flex;
      align-items: flex-end;
    }

    .mobile-img {
      height: 100%;
      width: 100%;
      display: none;
    }

    .description {
      font-size: 1vw;
    }

    .tools {
      margin-top: 2rem;
      font-weight: 600;
      font-size: 1vw;

      span {
        font-weight: 400;
      }

      .design {
        margin-top: 0.5rem;
      }
    }

    .links {
      margin-top: 2rem;

      a {
        background-color: var(--secondary-color);
        padding: 0.5rem 1rem;
        color: var(--main-color);
        text-decoration: none;
        border-radius: 5px;
        opacity: 0.9;

        &:hover {
          opacity: 1;
        }
      }
      a.disabled {
        pointer-events: none;
        /* background-color: gray; */
        opacity: 0.3;
      }
    }
  }

  .right {
    width: 40%;
  }
}

@media only screen and (max-width: 1024px) {
  .work {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;

    .left {
      width: 90%;

      .work-title {
        font-size: 4vw;
        margin-top: 1rem;
      }

      p {
        font-size: 1rem !important;
      }
      .mobile-img {
        display: block;
        margin-top: 1rem;
      }
    }
    .right {
      display: none;
    }
  }
}

@media only screen and (max-width: 600px) {
  .work {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0 2rem 0;

    .left {
      width: 100%;

      .work-title {
        font-size: 6vw;
      }

      p {
        font-size: 1rem !important;
      }

      .links {
        margin-top: 1rem !important;
      }
    }
  }
}
</style>
