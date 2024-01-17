<script lang="ts">
import { useTranslation } from '@/app/i18n/hooks';
import { BaseContainer, BaseAnimation } from '@/shared/ui';
import Wave from '../images/wave.png';
import Box from '../images/box.png';

import Man from '../images/man.png';
import Lightning from '../images/lightning.png';
import Shit from '../images/shit.png';
import HairSlin from '../images/hair-skin.png';

export default {
  components: {
    BaseContainer,
    BaseAnimation,
  },
  data() {
    return {
      Wave,
      Box,
      t: useTranslation('HomePage.Help'),
      list: [
        { img: Man, bold: 'stress_bold', text: 'stress' },
        { img: Lightning, bold: 'sustained_bold', text: 'sustained' },
        { img: Shit, bold: 'immune_bold', text: 'immune' },
        { img: HairSlin, bold: 'hair_bold', text: 'hair' },
      ],
    };
  },
};
</script>

<template>
  <section class="help">
    <div class="help__wave">
      <img :src="Wave" alt="wave" />
    </div>
    <div class="help__wrapper">
      <BaseContainer>
        <div class="help__header">
          <h3>{{ t('title') }}</h3>
          <div class="help__content">
            <div>
              <v-list class="help__list">
                <v-list-item
                  class="item"
                  v-for="(item, index) in list"
                  :key="index"
                >
                  <BaseAnimation variant="slideLeft" :delay="index * 200">
                    <div class="item__box">
                      <div class="item__image">
                        <img :src="item.img" :alt="item.bold" />
                      </div>
                      <p class="item__text">
                        <strong>{{ t(item.bold) }} </strong> {{ t(item.text) }}
                      </p>
                    </div>
                  </BaseAnimation>
                </v-list-item>
              </v-list>
            </div>
            <div class="help__image">
              <img :src="Box" alt="Box" />
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';
.help {
  position: relative;

  @media (max-width: $mobile) {
    padding-top: toRem(64);
  }

  &__wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    & img {
      width: 100%;
      aspect-ratio: 1604 / 417;
    }
  }

  &__wrapper {
    position: relative;
    z-index: $zIndex_1;
    background-color: $white;
  }

  &__header {
    text-align: center;
    max-width: toRem(1260);
    margin: 0 auto;
  }

  &__content {
    padding-top: toRem(92);
    display: grid;
    grid-template-columns: 1fr 1.17fr;
    align-items: center;
    gap: toRem(20);

    @media (max-width: $tablet) {
      display: flex;
      flex-direction: column-reverse;
      gap: toRem(42);
    }

    @media (max-width: $mobile) {
      padding-top: toRem(30);
    }
  }

  &__list {
    @include flexColumn();
    row-gap: toRem(38);
    padding: 0;
    margin: 0;

    @media (max-width: $mobile) {
      row-gap: toRem(16);
    }
  }

  &__image {
    text-align: center;

    & img {
      max-width: toRem(666);
      width: 100%;
      height: auto;
      aspect-ratio: 666 / 346;
      object-fit: contain;
      object-position: center;
    }
  }
}
.item {
  padding: 0;
  margin: 0;

  &__box {
    @include flexRow(center);
    column-gap: toRem(16);
  }

  &__image {
    & img {
      width: toRem(62);
      height: toRem(62);
      object-fit: contain;

      @media (max-width: $mobile) {
        width: toRem(42);
        height: toRem(42);
      }
    }
  }

  &__text {
    text-align: left;

    @media (max-width: $mobile) {
      font-size: toRem(10);
      line-height: 150%; /* 15/10 */
    }

    & strong {
      font-weight: 700;
    }
  }
}
</style>
