<script lang="ts">
export default {
  name: 'BaseDropdown',
  props: {
    isOpen: Boolean,
    position: {
      type: String,
      default: 'center',
    },
  },
};
</script>

<template>
  <transition name="transition">
    <div class="dropdown" :class="position" v-if="isOpen">
      <div class="dropdown__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import 'src/app/assets/styles/variables.scss';

.dropdown {
  position: absolute;
  top: 100%;
  z-index: $zIndex_5;
  width: fit-content;

  &.center {
    left: 50%;
    transform: translateX(-50%);
  }

  &.right {
    right: 0;
  }

  &__content {
    background-color: $white;
    box-shadow: $box_shadow;
    width: toRem(320);
    border-radius: toRem(4);

    @media (max-width: $mobile) {
      width: toRem(224);
    }
  }
}

.transition {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: translateY(0);
    transition: all $transition;
  }

  &-enter,
  &-leave-to {
    pointer-events: none;
    transform: translateY(toRem(-12));
    opacity: 0;
  }
}
</style>
