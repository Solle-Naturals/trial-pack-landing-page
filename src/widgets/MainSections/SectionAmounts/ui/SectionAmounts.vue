<script lang="ts">
import { useTranslation } from "@/app/i18n/hooks";
import { BaseContainer, BaseAnimation } from "@/shared/ui";

import TraceMinerals from "../images/trace-minerals.png";
import Antioxidants from "../images/antioxidants.png";
import Adaptogens from "../images/adaptogens.png";
import HealthyFats from "../images/healthy-fats.png";

export default {
  components: {
    BaseContainer,
    BaseAnimation,
  },
  data() {
    return {
      t: useTranslation("HomePage.Amounts"),
      cards: [
        { img: TraceMinerals, title: "trace.title", text: "trace.text" },
        {
          img: Antioxidants,
          title: "antioxidants.title",
          text: "antioxidants.text",
        },
        { img: Adaptogens, title: "adaptogens.title", text: "adaptogens.text" },
        {
          img: HealthyFats,
          title: "healthy_fats.title",
          text: "healthy_fats.text",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="amounts">
    <BaseContainer>
      <div class="amounts__header">
        <h3>{{ t("title") }}</h3>
      </div>
      <v-list class="amounts__list">
        <v-list-item class="item" v-for="(card, index) in cards" :key="index">
          <div class="item__content">
            <div class="item__box">
              <BaseAnimation :delay="index * 200">
                <span class="item__title">{{ t(card.title) }}</span>
                <p class="item__text">{{ t(card.text) }}</p>
              </BaseAnimation>
            </div>
            <div class="item__img">
              <img :src="card.img" :alt="card.title" />
            </div>
          </div>
        </v-list-item>
      </v-list>
    </BaseContainer>
  </section>
</template>

<style lang="scss" scoped>
@import "src/app/assets/styles/variables.scss";
.amounts {
  &__header {
    text-align: center;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: toRem(36);
    row-gap: toRem(36);
    margin: toRem(80) auto 0;
    padding: 0;
    max-width: toRem(1222);

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
    }

    @media (max-width: $mobile) {
      gap: toRem(22);
      margin-top: toRem(30);
    }
  }

  .item {
    display: block;
    padding: 0;
    padding-right: toRem(73.6);
    min-height: auto;

    @media (max-width: $mobile) {
      padding-right: toRem(14);
    }

    &__content {
      position: relative;
      text-align: left;
      padding: toRem(48) toRem(138) toRem(48) toRem(42);
      background-color: #f6f5ef;
      box-shadow: 0px 4px 4px 0px #00000040;
      border-radius: toRem(20);
      margin: 0;
      height: 100%;

      @media (max-width: $mobile) {
        padding: toRem(14) toRem(102) toRem(14) toRem(22);
      }
    }

    &__box {
      overflow: hidden;
    }

    &__title {
      font-size: toRem(24);
      font-weight: 600;

      @media (max-width: $mobile) {
        font-size: toRem(14);
      }
    }

    &__text {
      margin-top: toRem(16);

      @media (max-width: $mobile) {
        font-size: toRem(10);
        margin-top: toRem(4);
        line-height: 150%; /* 15/10 */
      }
    }

    &__img {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) translateX(40%);
      border-radius: 50%;

      @media (max-width: $mobile) {
        transform: translateY(-50%) translateX(10%);
      }

      & img {
        width: toRem(184);
        height: toRem(184);

        @media (max-width: $mobile) {
          width: toRem(103);
          height: toRem(103);
        }
      }
    }
  }
}
</style>
