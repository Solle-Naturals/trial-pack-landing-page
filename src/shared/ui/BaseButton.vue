<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    as: {
      type: String,
      default: 'button',
      validator: (value: string) => ['button', 'a'].includes(value),
    },
    variant: {
      type: String,
      default: 'base',
      validator: (value: string) => ['base', 'second'].includes(value),
    },
  },
  setup(props) {
    const elementType = computed(() => props.as);
    const variantClass = computed(() => props.variant);

    return {
      elementType,
      variantClass,
    };
  },
});
</script>

<template>
  <component :is="elementType" class="button" :class="variant">
    <slot />
  </component>
</template>

<style scoped lang="scss">
@import 'src/app/assets/styles/variables.scss';

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: toRem(8);
  padding: toRem(16) toRem(32);
  border-radius: toRem(50);
  font-size: toRem(18);
  line-height: 150%; /* 27/18 */
  font-weight: 500;
  transition: all $transition;

  @media (max-width: $mobile) {
    font-size: toRem(16);
  }

  &.base {
    color: $white;
    background-color: $accent;

    @media (any-hover: hover) {
      &:hover {
        filter: brightness(1.05);
      }
    }
  }

  &.second {
    color: $mainColor;
    background-color: $white;

    @media (any-hover: hover) {
      &:hover {
        background-color: $grey_light;
      }
    }
  }
}
</style>
