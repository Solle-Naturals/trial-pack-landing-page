<script lang="ts">
import { defineComponent } from 'vue';
import { BaseContainer, BaseAnimation } from '@/shared/ui';
import { useTranslation } from '@/app/i18n/hooks';

import Vegetarian from '../images/vegetarian.png';
import GlutenFree from '../images/gluten-free.png';
import SoyFree from '../images/soy-free.png';
import NonGmo from '../images/non-gmo.png';
import NoFillers from '../images/no-fillers.png';
import MsgFree from '../images/msg-free.png';
import NutFree from '../images/nut-free.png';
import HeavyMetals from '../images/heavy-metals.png';

interface ICard {
  title: string;
  image: string;
}

export default defineComponent({
  components: {
    BaseContainer,
    BaseAnimation,
  },
  data() {
    return {
      t: useTranslation('HomePage.Cards'),
      CARDS: [
        {
          title: 'vegetarian',
          image: Vegetarian,
        },
        {
          title: 'glutenFree',
          image: GlutenFree,
        },
        {
          title: 'soyFree',
          image: SoyFree,
        },
        {
          title: 'nonGmo',
          image: NonGmo,
        },
        {
          title: 'noFillers',
          image: NoFillers,
        },
        {
          title: 'MsgFree',
          image: MsgFree,
        },
        {
          title: 'nutFree',
          image: NutFree,
        },
        {
          title: 'heavyMetals',
          image: HeavyMetals,
        },
      ] as ICard[],
    };
  },
});
</script>

<template>
  <section class="cards">
    <div class="cards__wrapper">
      <BaseContainer>
        <BaseAnimation :delay="300" :duration="700">
          <v-list class="cards__list">
            <v-list-item
              class="card"
              v-for="(card, index) in CARDS"
              :key="index"
            >
              <div class="card__box">
                <div class="card__image">
                  <v-img :src="card.image" :alt="card.title" />
                </div>
                <p class="card__title">{{ t(card.title) }}</p>
              </div>
            </v-list-item>
          </v-list>
        </BaseAnimation>
      </BaseContainer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.cards {
  position: relative;
  overflow: hidden;

  @media (max-width: $mobile) {
    padding-top: toRem(40);
  }

  &__wrapper {
    background-color: $parchment_cream;
    padding: toRem(48) 0;

    @media (max-width: $mobile) {
      padding: toRem(12) 0;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    justify-content: space-between;
    row-gap: toRem(54);
    column-gap: toRem(16);
    margin: 0 auto;
    box-shadow: none;
    background-color: transparent;

    @media (max-width: em($maxWidthContainer)) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: $mobile) {
      column-gap: toRem(14);
      row-gap: toRem(28);
    }
  }
}

.card {
  padding: 0;
  min-height: auto;
  align-items: flex-start;

  &__box {
    text-align: center;
    margin: 0 auto;
  }

  &__image {
    width: toRem(90);
    height: toRem(90);
    margin: 0 auto;

    @media (max-width: $mobile) {
      width: toRem(50);
      height: toRem(50);
    }
  }

  &__title {
    margin-top: toRem(16);
    font-size: toRem(14);
    line-height: 114.285714%; /* 16/14 */

    @media (max-width: $mobileSmall) {
      font-size: toRem(10);
    }
  }
}
</style>
