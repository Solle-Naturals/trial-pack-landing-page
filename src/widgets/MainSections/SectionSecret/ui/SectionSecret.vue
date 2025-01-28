<script lang="ts">
import { useTranslation } from '@/app/i18n/hooks';
import { BaseContainer } from '@/shared/ui';

import SuperiorIngredients from '../images/superior-ingredients.png';
import ThirdParty from '../images/third-party.png';
import SolleCertain from '../images/solle-certain.png';

export default {
  components: {
    BaseContainer,
  },
  data() {
    return {
      t: useTranslation('HomePage.Secret'),
      cards: [
        {
          img: SuperiorIngredients,
          bold: 'superior.bold',
          text: 'superior.text',
        },
        { img: ThirdParty, bold: 'third.bold', text: 'third.text' },
        {
          img: SolleCertain,
          bold: 'solle_certain.bold',
          text: 'solle_certain.text',
        },
      ],
    };
  },
};
</script>

<template>
  <section class="secret">
    <BaseContainer>
      <div class="secret__header">
        <h3>{{ t('title') }}</h3>
        <p class="secret__subtile">{{ t('subtitle') }}</p>
      </div>
      <v-list class="secret__list">
        <v-list-item class="item" v-for="(card, index) in cards" :key="index">
          <div class="item__image">
            <img :src="card.img" :alt="card.bold" />
          </div>
          <p class="item__text">
            <strong>{{ t(card.bold) }} </strong> {{ t(card.text) }}
          </p>
        </v-list-item>
      </v-list>
    </BaseContainer>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.secret {
  &__header {
    text-align: center;
  }

  &__subtile {
    @include adaptiveValue('font-size', 32, 16, 991, 375, 1);
    margin-top: toRem(20);
    font-weight: 300;

    @media (max-width: $mobile) {
      margin-top: toRem(16);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    column-gap: toRem(52);
    margin: 0;
    padding: 0;
    margin-top: toRem(80);

    @media (max-width: $mobile) {
      margin-top: toRem(30);
      grid-template-columns: 1fr;
      row-gap: toRem(40);
    }
  }
}
.item {
  padding: 0;
  @include flexColumn(center);
  min-height: auto;
  gap: toRem(14);
  text-align: center;
  // max-width: toRem(414);
  margin: 0 auto;

  @media (max-width: $mobile) {
    border-top: toRem(1) solid $accent;
    padding-top: toRem(22);
  }

  &__image {
    & img {
      @media (max-width: $mobile) {
        width: toRem(130);
        height: toRem(95);
        object-fit: contain;
        object-position: center;
      }
    }
  }

  &__text {
    @media (max-width: $mobile) {
      font-size: toRem(12);
      line-height: 150%; /* 18/12 */
    }
  }
}
</style>
