<script lang="ts">
import { defineComponent } from 'vue';
import { BaseContainer } from '@/shared/ui';
import Wave from '../images/wave.png';
import { useTranslation } from '@/app/i18n/hooks';
import { isMobile } from '@/shared/lib';

export default defineComponent({
  components: {
    BaseContainer,
  },
  setup() {
    const t = useTranslation('HomePage.Video');
    return {
      t,
      Wave,
      isMobile,
    };
  },
});
</script>

<template>
  <section class="preview">
    <div class="preview__image">
      <img :src="Wave" alt="wave" />
    </div>
    <div class="preview__wrapper">
      <BaseContainer>
        <div class="preview__content">
          <v-row class="preview__header" no-gutters>
            <v-col>
              <h2>{{ t('title') }}</h2>
            </v-col>
          </v-row>
          <div v-if="$i18n.locale === 'es' && isMobile" class="player" style="border-width: 0">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/907648044?h=4169dd2f57"
              allowfullscreen
            ></iframe>
          </div>
          <div v-else-if="$i18n.locale === 'es'" class="player" style="border-width: 0">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/904256493?h=4169dd2f57"
              allowfullscreen
            ></iframe>
          </div>
          <div v-else-if="isMobile" class="player" style="border-width: 0; aspect-ratio: 9 / 16;">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/888841058?h=48174557c5"
              allowfullscreen
            ></iframe>
          </div>
          <div v-else class="player" style="border-width: 0">
          <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/888841607?h=181b6a9d10"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </BaseContainer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.preview {
  position: relative;
  overflow: hidden;
  &__image {
    & img {
      width: 100%;
      aspect-ratio: 1604 /137;
    }
  }

  &__wrapper {
    background-color: $parchment_cream;
    position: relative;
    padding-bottom: 1em;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 80%;
      z-index: $zIndex_1;

      @media (max-width: $mobile) {
        height: 90%;
      }
    }
  }

  &__content {
    position: relative;
    z-index: $zIndex_1;
  }

  &__header {
    position: relative;
    text-align: center;
    justify-content: center;
    z-index: $zIndex_1;
    padding-top: toRem(48);

    @media (max-width: $mobile) {
      padding-top: toRem(16);
    }
  }
}

.player {
  max-width: toRem(1165);
  margin: 0 auto;
  border-radius: toRem(8);
  overflow: hidden;
  aspect-ratio: 16 / 9;

  @media (max-width: $mobile) {
  }

  --plyr-color-main: #c0d701;
}
</style>

<style lang="scss">
// .plyr__video-embed,
// .plyr__video-wrapper--fixed-ratio {
//   height: 100% !important;
//   padding-bottom: 0 !important;
// }

// .plyr__poster {
//   background-size: cover !important;
// }
</style>
