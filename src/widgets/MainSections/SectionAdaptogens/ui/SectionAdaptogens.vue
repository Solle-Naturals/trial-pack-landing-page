<script lang="ts">
import { defineComponent } from 'vue';
import { BaseContainer, BaseButton, BaseAnimation } from '@/shared/ui';
import Background from '../images/bg.jpg';
import { useTranslation } from '@/app/i18n/hooks';

export default defineComponent({
  components: {
    BaseContainer,
    BaseButton,
    BaseAnimation,
  },
  data() {
    return {
      Background,
      t: useTranslation('HomePage.Adaptogens'),
    };
  },
  computed: {
    checkoutLink() {
      const checkoutUrl =
        process.env.VUE_APP_CHECKOUT_URL || 'https://checkout.sollenaturals.com';

      return `${checkoutUrl}/?lang=en&country_id=185&order_type_id=40&products%5B1094%5D=1`;
    },
  },
});
</script>

<template>
  <section class="adaptogens">
    <div class="adaptogens__bg">
      <img :src="Background" alt="Background" />
    </div>
    <BaseContainer class="adaptogens__container">
      <v-row no-gutters class="adaptogens__content">
        <v-col :cols="12" class="adaptogens__center">
          <BaseAnimation :delay="200">
            <h3 class="adaptogens__title">{{ t('title') }}</h3>
          </BaseAnimation>
          <BaseAnimation :delay="400">
            <BaseButton
              as="a"
              variant="second"
              :href="checkoutLink"
              class="adaptogens__button"
            >
              {{ t('buy') }}
            </BaseButton>
          </BaseAnimation>
        </v-col>
      </v-row>
    </BaseContainer>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.adaptogens {
  padding: toRem(40) 0;
  position: relative;
  width: 100%;
  height: min(100svh, toRem(683));
  overflow: hidden;

  @media (max-width: $mobile) {
    height: min(100svh, toRem(375));
  }

  &__bg {
    &,
    &::after,
    & > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    @media (max-width: $mobileSmall) {
    }

    &::after {
      content: '';
      background-color: #00000099;
    }

    & > img {
      object-fit: cover;
      object-position: 50% 90%;

      @media (max-width: $mobileSmall) {
        height: 125%;
        top: -25%;
      }
    }
  }

  &__container {
    height: 100%;
  }

  &__content {
    position: relative;
    @include flexColumn(center, center);
    text-align: center;
    max-width: toRem(524);
    height: 100%;
    margin: 0 auto;
    z-index: $zIndex_1;
  }

  &__center {
    @include flexColumn(center, center);
  }

  &__title {
    color: $white;
    font-weight: 700;
  }

  &__button {
    margin-top: toRem(20);
  }
}
</style>
