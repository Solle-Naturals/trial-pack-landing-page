<script lang="ts">
import { BaseContainer, BaseLogo } from '@/shared/ui';
import { LanguageSelector } from '@/features/LanguageSelector';
import { LINK_TO_BOX } from '@/shared/lib';
import { useTranslation } from '@/app/i18n/hooks';

export default {
  name: 'MainHeader',
  components: {
    BaseContainer,
    BaseLogo,
    LanguageSelector,
  },
  data() {
    return {
      LINK_TO_BOX,
      t: useTranslation('Header'),
    };
  },
};
</script>

<template>
  <header class="header">
    <BaseContainer>
      <v-row justify="space-between" align="center" no-gutters>
        <div class="d-flex">
          <BaseLogo />
        </div>
        <div class="d-flex justify-end">
          <div class="header__box">
            <a class="header__link" :href="LINK_TO_BOX"> {{ t('get_box') }} </a>
            <LanguageSelector />
          </div>
        </div>
      </v-row>
    </BaseContainer>
  </header>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: $white;
  padding: toRem(14) 0;
  box-shadow: $box_shadow;
  z-index: $zIndex_50;

  @media (max-width: $mobile) {
    padding: toRem(4) 0;
  }

  &__box {
    @include flexRow(center);
    column-gap: toRem(16);

    @media (max-width: $mobile) {
      column-gap: toRem(8);
    }
  }

  &__link {
    @media (any-hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: $mobile) {
      font-size: toRem(10);
    }
  }
}
</style>
