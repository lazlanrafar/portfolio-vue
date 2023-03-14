<template>
  <div class="wrapper">
    <h2 :class="{ 'head-home': home, 'head-default': !home }">
      <span
        v-for="(letter, index) in text"
        :key="index"
        :class="{ space: letter.indexOf(' ') >= 0 }"
      >
        <span
          class="letter"
          @mouseover="addBouncing"
          @mouseleave="removeBouncing"
        >
          {{ letter }}
        </span>
      </span>
    </h2>
    <textCode text="h1" isClose style="margin-left: 1rem" v-if="close" />
  </div>
</template>

<script>
export default {
  name: "text-header",
  props: ["text", "home", "close"],
  components: {
    textCode: () => import("@/components/atoms/text-code.vue"),
  },
  methods: {
    addBouncing(val) {
      val.target.classList.add("bouncing");
    },
    removeBouncing(val) {
      // set timeout to prevent bouncing when mouse leave
      setTimeout(() => {
        val.target.classList.remove("bouncing");
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  overflow: hidden;

  h2 {
    font-family: "coolvetica" !important;
    color: var(--secondary-color);
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    cursor: text;
    .letter {
      display: inline-block;
    }
    .space {
      padding: 5px;
    }
  }
  .head-home {
    font-size: 6.3rem;
    line-height: 6rem;
  }
  .head-default {
    font-size: 5rem;
  }
}

.bouncing {
  animation: rubberband 800ms alternate ease-out;
}

@media only screen and (max-width: 1800px) {
  .head-home {
    font-size: 5rem !important;
    line-height: 5rem !important;
  }
  .head-default {
    font-size: 3.9rem !important;
    line-height: normal !important;
  }
}

@media only screen and (max-width: 900px) {
  .head-home {
    font-size: 5rem !important;
    line-height: 5rem !important;
  }
  .head-default {
    font-size: 4.5rem !important;
    line-height: normal !important;
  }
}

@media only screen and (max-width: 600px) {
  .head-home,
  .head-default {
    font-size: 3.3rem !important;
    line-height: 3rem !important;
  }
}
</style>
