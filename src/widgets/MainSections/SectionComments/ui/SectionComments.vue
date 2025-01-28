<script lang="ts">
import Vue from 'vue';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import { BaseContainer, BaseRating } from '@/shared/ui';
import Background from '../images/commnet-bg.png';
import Wave from '../images/wave.png';
import { useTranslation } from '@/app/i18n/hooks';
import { isMobile } from '@/shared/lib';

interface IComment {
  text: string;
  name: string;
  rating: number;
}

export default Vue.extend({
  components: {
    BaseContainer,
    BaseRating,
  },
  data() {
    return {
      t: useTranslation('HomePage.Comments'),
      Background,
      Wave,
      isMobile,
      COMMENTS: [
        { text: 'comment_1', name: 'Tanya J, Brand Specialist', rating: 5 },
        { text: 'comment_2', name: 'Sara B', rating: 5 },
        { text: 'comment_3', name: 'Karen S', rating: 5 },
        { text: 'comment_4', name: 'Laura U', rating: 5 },
        { text: 'comment_5', name: 'Mary G', rating: 5 },
      ] as IComment[],
      swiperOptions: {
        modules: [Pagination, Autoplay],
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          modifierClass: 'comments__',
          bulletClass: 'comments__bullet',
          bulletActiveClass: 'comments__bullet-active',
          renderBullet: (index: number, className: string) => {
            return `<button class='${className}' type='button'></button>`;
          },
        },
        autoplay: {
          delay: 10000,
          disableOnInteraction: true,
        },
        breakpoints: {
          767: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  mounted() {
    new Swiper(this.$refs.swiper, this.swiperOptions);
  },
});
</script>

<template>
  <section class="comments">
    <div class="comments__wave">
      <img :src="Wave" alt="wave" />
    </div>
    <div class="comments__wrapper">
      <BaseContainer>
        <v-row no-gutters class="comments__header">
          <v-col>
            <h3>{{ t('title') }}</h3>
          </v-col>
        </v-row>
        <div class="comments__content">
          <div class="comments__swiper swiper" ref="swiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(comment, index) in COMMENTS"
                :key="index"
              >
                <v-card class="comment" outlined>
                  <div class="comment__body">
                    <p class="comment__text">{{ t(comment.text) }}</p>
                  </div>
                  <div class="comment__footer">
                    <p class="comment__name">{{ comment.name }}</p>
                    <div class="comment__rating">
                      <BaseRating :value="comment.rating" />
                    </div>
                  </div>
                  <div class="comment__bg">
                    <v-img
                      :src="Background"
                      alt="background"
                      width="130"
                      height="223"
                    />
                  </div>
                </v-card>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </BaseContainer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.comments {
  &__wave {
    & img {
      width: 100%;
      aspect-ratio: 1604 / 137;
    }
  }

  &__wrapper {
    position: relative;
    padding-bottom: toRem(80);
    background-color: $parchment_cream;

    @media (max-width: $mobile) {
      padding-bottom: toRem(40);
    }
  }

  &__header {
    text-align: center;
    padding-top: toRem(55);

    @media (max-width: $mobile) {
      padding-top: toRem(32);
    }
  }

  &__content {
    margin-top: toRem(80);

    @media (max-width: $tablet) {
      margin-top: toRem(30);
    }
  }

  &__swiper {
    @media (max-width: em($maxWidthContainer)) {
      margin: 0 $paddingContainerMinus;
      padding: toRem(4) $paddingContainer;
    }
  }
}
.comment {
  border: none;
  position: relative;
  @include flexColumn();
  background-color: $white;
  border-radius: $radius;
  box-shadow: 0 toRem(4) toRem(15) 0 #00000026;
  @include adaptiveValue('height', 384, 564, 1350, 768, 1);

  @media (max-width: $mobile) {
    @include adaptiveValue('height', 260, 380, 767, 375, 1);
  }

  &__body {
    position: relative;
    padding: toRem(40) toRem(26) 0;
    flex: 1 1 auto;
    overflow-y: auto;
    z-index: $zIndex_1;

    @media (max-width: em(1350)) {
      padding: toRem(24) toRem(16) 0;
    }
  }

  &__text {
    @media (max-width: $mobile) {
      font-size: toRem(12);
    }
  }

  &__footer {
    padding: toRem(30) toRem(26);

    @media (max-width: em(1350)) {
      padding: toRem(16) toRem(16) toRem(24);
    }
  }

  &__name {
    font-weight: 500;

    @media (max-width: $mobile) {
      font-size: toRem(14);
    }
  }

  &__rating {
    margin-top: toRem(6);
  }

  &__bg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: toRem(130);
    height: toRem(223);

    & > img {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style lang="scss">
@import 'src/app/assets/styles/variables.scss';

.comments {
  &__bullets {
    @include flexRow(center, center);
    column-gap: toRem(6);
    margin-top: toRem(40);

    @media (max-width: $tablet) {
      margin-top: toRem(32);
    }
  }

  &__bullet {
    position: relative;
    display: inline-block;
    width: toRem(20);
    height: toRem(20);
    cursor: pointer;
    transition: width $transition;

    @media (any-hover: hover) {
      &:hover:not(&-active)::before {
        opacity: 0.8;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: $grey;
      width: 100%;
      height: toRem(6);
      border-radius: toRem(5);
      transition: opacity $transition, width $transition;
    }

    &-active {
      width: toRem(27);

      &::before {
        background-color: $accent;
      }
    }
  }
}
</style>
