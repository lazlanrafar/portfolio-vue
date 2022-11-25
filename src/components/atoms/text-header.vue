<template>
  <div class="wrapper">
    <h1 :class="{ 'head-home': home, 'head-common': !home }">
      <span
        v-for="(letter, index) in text"
        :key="index"
        :class="{ space: letter.indexOf(' ') >= 0 }"
      >
        <span class="letter">
          {{ letter }}
        </span>
      </span>
    </h1>
    <div class="code" style="margin-left: 1rem" v-if="close">/h1</div>
  </div>
</template>

<script>
export default {
  name: "text-header",
  props: {
    text: {
      type: String,
      required: true,
    },
    close: {
      type: Boolean,
      default: false,
    },
    home: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
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
    transition: all 0.4s ease;
    display: inline-block;
    &:hover,
    &::after {
      animation: rubberband linear 1s;
    }
  }
  .space {
    padding: 5px;
  }
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
    font-size: 12vw;
    letter-spacing: 1px;
    line-height: normal;
  }
}
</style>
