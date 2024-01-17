<script lang="ts">
import { isTablet } from '@/shared/lib';
import { BaseContainer, BaseButton, BaseAnimation } from '@/shared/ui';
import { useTranslation } from '@/app/i18n/hooks';
import VarietyBox from '../images/variety-box.png';
import { LINK_TO_BOX } from '@/shared/lib';

export default {
  components: {
    BaseContainer,
    BaseButton,
    BaseAnimation,
  },
  data() {
    return {
      VarietyBox,
      price: '34.95',
      LINK_TO_BOX,
    };
  },
  setup() {
    return {
      isTablet,
    };
  },
  computed: {
    t() {
      return useTranslation('HomePage.VarietyTrialBox');
    },
  },
};
</script>

<template>
  <section class="trial">
    <BaseContainer>
      <div class="trial__wrapper">
        <BaseAnimation :delay="300" variant="opacity" v-if="!isTablet">
          <div class="trial__image">
            <img :src="VarietyBox" alt="trial" />
          </div>
        </BaseAnimation>
        <v-row class="trial__block" no-gutters>
          <v-col :cols="12">
            <BaseAnimation :delay="300">
              <h2>{{ t('title') }}</h2>
            </BaseAnimation>
          </v-col>
          <v-col v-if="isTablet" :cols="12">
            <BaseAnimation :delay="400">
              <div class="trial__image">
                <img :src="VarietyBox" alt="trial" />
              </div>
            </BaseAnimation>
          </v-col>
          <v-col :cols="12">
            <BaseAnimation :delay="500">
              <p class="main-subtitle">{{ t('subtitle') }}</p>
            </BaseAnimation>
            <BaseAnimation :delay="600">
              <p class="main-subtitle" v-html="t('second_subtitle')"></p>
            </BaseAnimation>
          </v-col>
          <v-col :cols="12">
            <BaseAnimation :delay="700">
              <div class="trial__info">
                <div v-if="!isTablet" class="trial__info_pc">
                  <BaseButton as="a" :href="LINK_TO_BOX">{{
                    t('buy')
                  }}</BaseButton>
                  <span class="trial__price">$ {{ price }}</span>
                </div>
                <div v-if="isTablet">
                  <BaseButton as="a" :href="LINK_TO_BOX" class="trial__button">
                    {{ t('buy') }} $ {{ price }}
                  </BaseButton>
                </div>
              </div>
            </BaseAnimation>
          </v-col>
        </v-row>
      </div>
    </BaseContainer>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.trial {
  padding-top: toRem(92);
  @media (max-width: $mobile) {
    padding-top: toRem(36);
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 1.52fr minmax(toRem(424), 1fr);
    align-items: center;
    justify-content: space-between;
    column-gap: toRem(24);

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }

  &__info {
    margin-top: toRem(48);

    @media (max-width: $mobile) {
      margin-top: toRem(24);
    }

    &_pc {
      @include flexRow(center);
      column-gap: toRem(38);
    }
  }

  &__block {
    @media (max-width: $tablet) {
      text-align: center;
    }
  }

  &__price {
    font-size: toRem(22);
  }

  &__image {
    text-align: center;

    @media (max-width: $tablet) {
      margin-top: toRem(24);
    }

    & img {
      max-width: toRem(806);
      width: 100%;
      height: auto;
      aspect-ratio: 806 / 527;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
