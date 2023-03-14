<template>
  <button class="btn-primary" @click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-primary {
  // Box model
  padding: 0.6em 2em;

  // Typography
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: var(--main-color);
  font-size: 1rem;

  // Visual
  background: var(--secondary-color);
  border: 1px solid var(--secondary-color);

  // Misc
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: translate(-0.25rem, -0.25rem);
    box-shadow: 0.25rem 0.25rem var(--red-color);
  }

  &:active {
    transform: translate(0);
    box-shadow: none;
  }
}

@media only screen and (max-width: 600px) {
  .btn-primary {
    border: 1px solid var(--secondary-color);
    padding: 0.4rem 1.5rem !important;
    font-size: 0.7rem;
    font-weight: 500;
  }
}
</style>
