<script lang="ts">
import Vue from "vue";
import { MainHeader } from "@/widgets/Header";
import { MainFooter } from "@/widgets/Footer";
import {
  SectionPreview,
  SectionVarietyTrialBox,
  SectionSliders,
  SectionCards,
  SectionVideo,
  SectionComments,
  SectionHelp,
  SectionAmounts,
  SectionSecret,
} from "@/widgets/MainSections";
import { getCurrentLocale } from "./i18n/utils";
import { setLanguage } from "./i18n/hooks";

export default Vue.extend({
  components: {
    MainHeader,
    MainFooter,
    SectionPreview,
    SectionVideo,
    SectionSliders,
    SectionCards,
    SectionVarietyTrialBox,
    SectionComments,
    SectionHelp,
    SectionAmounts,
    SectionSecret,
  },
  mounted() {
    document.title = 'Solle Trial Pack'
    const currentLocale = getCurrentLocale();
    setLanguage(currentLocale);
  },
});
</script>

<template>
  <v-app>
    <MainHeader />
    <v-main>
      <SectionPreview />
      <SectionHelp />
      <div class="app__wrapper">
        <SectionVideo />
        <SectionSliders />
        <SectionCards />
        <SectionVarietyTrialBox />
        <SectionComments />
        <SectionAmounts />
        <SectionSecret />
      </div>
    </v-main>
    <MainFooter />
  </v-app>
</template>

<style lang="scss" scoped>
@import "src/app/assets/styles/variables.scss";
.app {
  &__wrapper {
    position: relative;
    z-index: $zIndex_1;
    background-color: $white;
  }
}
</style>
