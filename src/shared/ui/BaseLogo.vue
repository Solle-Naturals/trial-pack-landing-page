<script lang="ts">
export default {
  props: {
    variant: {
      type: String,
      default: 'base',
      validator: (value: string) => ['base', 'white'].includes(value),
    },
  },
};
</script>

<template>
  <a href="#" class="logo">
    <img
      v-if="variant === 'base'"
      src="@/app/assets/images/icons/logo.svg"
      class="logo__image"
      alt="logo"
    />
    <img
      v-if="variant === 'white'"
      src="@/app/assets/images/icons/logo-white.png"
      class="logo__image"
      alt="logo"
    />
  </a>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.logo {
  position: relative;
  display: inline-block;
  width: toRem(149);
  height: toRem(40);
  transition: opacity $transition;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: $mobile) {
    width: toRem(83);
    height: toRem(34);
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
