<template>
  <div class="wrapper">
    <h1 :class="{ 'head-home': home, 'head-common': !home }">
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
    </h1>
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
  align-items: flex-end;
}
.head-home {
  font-size: 5vw;
  letter-spacing: 4px;
}
.head-common {
  font-size: 4vw;
  letter-spacing: 2px;
}
h1 {
  font-family: coolvetica;
  color: var(--bfont-color);
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

.bouncing {
  animation: rubberband 800ms alternate ease-out;
}

@media only screen and (max-width: 1024px) {
  .head-home {
    font-size: 10vw;
  }
  .head-common {
    font-size: 9vw;
  }
}
@media only screen and (max-width: 600px) {
  .head-home,
  .head-common {
    font-size: 11vw;
    letter-spacing: 1px;
    line-height: normal;
  }
}
</style>
