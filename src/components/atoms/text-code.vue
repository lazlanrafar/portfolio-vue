<template>
  <div class="code"><span v-if="isClose">/</span>{{ text }}</div>
</template>

<script>
export default {
  name: "text-code",
  props: {
    text: {
      type: String,
      required: true,
    },
    isClose: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.code {
  font-size: 1rem;
  font-family: "La Belle Aurore", cursive;
  position: relative;
  user-select: none;
  color: var(--muted-color);
  margin-left: -1em;

  &::before {
    content: "<";
  }

  &::after {
    content: ">";
  }
}
</style>
