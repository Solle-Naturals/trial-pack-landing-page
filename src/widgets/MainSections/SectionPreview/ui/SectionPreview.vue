<script lang="ts">
import { defineComponent } from "vue";
import { useTranslation } from "@/app/i18n/hooks";
import { BaseContainer, BaseAnimation, BaseButton } from "@/shared/ui";
import { isMobile, LINK_TO_BOX } from "@/shared/lib";
import DesktopVideo from "./DesktopVideo.vue";
import MobileVideo from "./MobileVideo.vue";

export default defineComponent({
  components: {
    BaseContainer,
    BaseAnimation,
    BaseButton,
    DesktopVideo,
    MobileVideo,
  },
  data() {
    return {
      LINK_TO_BOX,
      isMobile,
      t: useTranslation("HomePage.Preview"),
    };
  },
});
</script>

<template>
  <section class="preview">
    <BaseContainer>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12">
          <div class="preview__content">
            <BaseAnimation :delay="300">
              <h1 class="preview__title">{{ t("title") }}</h1>
            </BaseAnimation>
            <BaseAnimation :delay="600">
              <BaseButton
                class="preview__button"
                as="a"
                variant="second"
                :href="LINK_TO_BOX"
              >
                {{ t("get_box") }}
              </BaseButton>
            </BaseAnimation>
          </div>
        </v-col>
      </v-row>
    </BaseContainer>
    <div class="preview__video">
      <DesktopVideo v-if="!isMobile" />
      <MobileVideo v-if="isMobile" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "src/app/assets/styles/variables.scss";

.preview {
  position: relative;
  @include flexColumn(center, center);
  height: min(100vh, toRem(1080));
  padding-top: 0;

  &__content {
    position: relative;
    @include flexColumn(center, center);
    row-gap: toRem(38);
    text-align: center;
    max-width: toRem(814);
    margin: 0 auto $header_height;
    z-index: $zIndex_1;

    @media (max-width: $mobile) {
      row-gap: toRem(28);
    }
  }

  &__title {
    color: $white;
  }

  &__button {
    font-size: toRem(24);

    @media (max-width: $mobile) {
      font-size: toRem(12);
    }
  }

  &__video {
    position: fixed;
    left: 0;
    top: $header_height;
    width: 100%;
    height: min(100vh, toRem(1080));

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #2e29304d;
    }

    & video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
