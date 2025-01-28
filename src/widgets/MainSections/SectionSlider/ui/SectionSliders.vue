<script lang="ts">
import Vue from 'vue';
import Swiper from 'swiper';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { SLIDERS } from '../sliders';
import { useTranslation } from '@/app/i18n/hooks';

import {
  BaseContainer,
  CheckMarkIcon,
  BaseAnimation,
  LongArrowIcon,
} from '@/shared/ui';

export default Vue.extend({
  data() {
    return {
      sliders: SLIDERS,
      slider: null as any,
      modules: [Pagination, EffectFade, Autoplay],
      paginationOptions: {
        el: '.swiper-pagination',
        clickable: true,
        modifierClass: 'sliders__',
        bulletClass: 'sliders__bullet',
        bulletActiveClass: 'sliders__bullet-active',
        renderBullet: (index: number, className: string) => {
          return `<button class='${className}' type='button' />`;
        },
      },
    };
  },
  computed: {
    t() {
      return useTranslation('HomePage.Slider');
    },
  },
  methods: {
    onSwiper(swiper: any) {
      this.slider = swiper;
    },
  },

  components: {
    BaseContainer,
    CheckMarkIcon,
    BaseAnimation,
    LongArrowIcon,
  },
  mounted() {
    new Swiper(this.$refs.swiper, {
      on: {
        init: this.onSwiper,
      },
      modules: this.modules,
      loop: true,
      speed: 800,
      autoHeight: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: this.paginationOptions,
    });
  },
});
</script>

<template>
  <section class="sliders">
    <BaseContainer>
      <v-row class="sliders__header" no-gutters>
        <v-col>
          <h2>{{ t('title') }}</h2>
        </v-col>
      </v-row>
      <div class="sliders__wrapper">
        <div ref="swiper" class="swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(slide, index) in sliders"
              :key="index"
            >
              <v-row class="slide" no-gutters>
                <v-col class="slide__block">
                  <div class="slide__header">
                    <h2 class="slide__title">
                      {{ slide.title.text }}<b>{{ slide.title.strong }}</b>
                    </h2>
                    <div class="slide__box">
                      <p class="slide__subtitle">
                        {{ t(`${slide.key}.${slide.subtitle}`) }}
                      </p>
                      <v-row class="slide__buttons" no-gutters>
                        <v-col>
                          <button
                            class="slide__button slide__button-prev"
                            @click.stop="slider?.slidePrev()"
                            type="button"
                          >
                            <LongArrowIcon />
                          </button>
                        </v-col>
                        <v-col>
                          <button
                            class="slide__button slide__button-next"
                            @click.stop="slider?.slideNext()"
                            type="button"
                          >
                            <LongArrowIcon />
                          </button>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                  <v-list class="slide__items">
                    <v-list-item
                      v-for="(item, index) in slide.items"
                      :key="index"
                      class="slide__vitm"
                    >
                      <BaseAnimation
                        :delay="(index + 1) * 200"
                        variant="slideLeft"
                      >
                        <div class="slide__item">
                          <div><CheckMarkIcon /></div>
                          <p>
                            <strong>{{
                              t(`${slide.key}.${item.title}`)
                            }}</strong>
                            - {{ t(`${slide.key}.${item.text}`) }}
                          </p>
                        </div>
                      </BaseAnimation>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="slide__image">
                  <img :src="slide.imageUrl" alt="Slide Image" />
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="swiper-pagination" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.sliders {
  &__header {
    justify-content: center;
    text-align: center;
  }

  &__wrapper {
    margin-top: toRem(80);
    position: relative;

    @media (max-width: $mobile) {
      margin-top: toRem(30);
    }
  }
}

.slide {
  display: grid;
  grid-template-columns: 1.6fr minmax(toRem(460), 1fr);
  justify-content: space-between;
  column-gap: toRem(24);

  @media (max-width: $tablet) {
    display: flex;
    flex-direction: column-reverse;
    row-gap: toRem(8);
  }

  &__image {
    text-align: center;
    position: relative;
    z-index: $zIndex_1;

    & img {
      aspect-ratio: 528 / 490;
      max-width: toRem(740);
      width: 100%;
      height: auto;
      object-fit: contain;
      object-position: center;
    }
  }

  &__block {
    max-width: toRem(750);

    @media (max-width: $tablet) {
      margin: auto;
    }
  }

  &__header {
    padding-bottom: toRem(16);
    border-bottom: toRem(1) solid $accent;
  }

  &__title {
    font-size: toRem(28);
    line-height: 150%; /* 42/28 */

    @media (max-width: $tablet) {
      text-align: center;
    }

    @media (max-width: $mobile) {
      font-size: toRem(20);
    }

    & > b {
      font-weight: 600;
    }
  }

  &__box {
    @include flexRow(center, space-between);
    column-gap: toRem(16);
    margin-top: toRem(16);
  }

  &__subtitle {
    font-weight: 600;
    font-size: toRem(18);
    line-height: 150%; /* 27/18 */

    @media (max-width: $mobile) {
      font-size: toRem(16);
    }
  }

  &__buttons {
    @include flexRow(center);
    column-gap: toRem(16);
    flex: 0 0 auto;

    @media (max-width: $mobile) {
      column-gap: toRem(8);
    }
  }

  &__button {
    @include flexRow(center, center);
    width: toRem(40);
    height: toRem(40);
    border-radius: 50%;
    transition: filter $transition;

    @media (any-hover: hover) {
      &:hover {
        filter: brightness(1.05);
      }
    }

    @media (max-width: $mobile) {
      width: toRem(34);
      height: toRem(34);
    }

    &-prev {
      background-color: $accent_light;
      color: $accent;

      & svg {
        transform: scale(-1, 1);
      }
    }

    &-next {
      background-color: $accent;
      color: $white;
    }
  }

  &__items {
    display: grid;
    row-gap: toRem(24);
    margin-top: toRem(24);

    @media (max-width: $mobile) {
      row-gap: toRem(16);
      margin-top: toRem(16);
    }
  }

  &__vitm {
    min-height: auto;
    padding: 0;
  }

  &__item {
    @include flexRow(flex-start);
    column-gap: toRem(16);

    @media (max-width: $mobile) {
      column-gap: toRem(8);
    }

    & svg {
      width: toRem(24);
      height: toRem(24);
      color: $accent;

      @media (max-width: $mobile) {
        width: toRem(20);
        height: toRem(20);
        transform: translateY(toRem(2));
      }
    }

    & > p {
      font-weight: 400;

      @media (max-width: $mobile) {
        font-size: toRem(12);
      }

      & strong {
        font-weight: 500;
      }
    }
  }
}
</style>

<style lang="scss">
@import 'src/app/assets/styles/variables.scss';

.sliders {
  &__bullets {
    @include flexRow(center, center);
    column-gap: toRem(8);
    margin-top: toRem(40);

    @media (max-width: $tablet) {
      justify-content: center;
      margin-top: toRem(32);
    }
  }

  &__bullet {
    display: inline-block;
    background-color: $grey;
    width: toRem(20);
    height: toRem(20);
    border-radius: 50%;
    transition: opacity $transition;
    cursor: pointer;

    @media (any-hover: hover) {
      &:hover:not(&-active) {
        opacity: 0.8;
      }
    }

    @media (max-width: $mobile) {
      width: toRem(16);
      height: toRem(16);
    }

    &-active {
      background-color: $accent;
    }
  }
}
</style>
