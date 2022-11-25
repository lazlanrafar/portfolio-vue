<template>
  <div class="symbols">
    <div class="bottom">
      <div class="code" style="margin-left: 0.5rem">/body</div>
      <div class="code">/html</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "text-code",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.symbols {
  position: absolute;
  left: calc(var(--nav-lg) + 2rem);

  .top {
    top: 1rem;
    position: absolute;
  }

  .bottom {
    bottom: 1rem;
    position: absolute;
  }
}

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
