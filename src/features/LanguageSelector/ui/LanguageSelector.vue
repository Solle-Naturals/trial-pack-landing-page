<script lang="ts">
import Vue from 'vue';
import { BaseDropdown, LangIcon, CloseIcon } from '@/shared/ui';
import {
  ICountrySelectorOption,
  ILanguageSelectorItem,
  ILanguageSelectorOption,
} from '../types';
import { EnumLanguages } from '@/app/i18n';
import { setLanguage, useTranslation } from '@/app/i18n/hooks';

export default Vue.extend({
  name: 'LanguageSelector',
  components: {
    BaseDropdown,
    LangIcon,
    CloseIcon,
  },
  data() {
    return {
      isOpen: false,
      parentRef: undefined as HTMLElement | undefined,
      countryID: parseInt(
        new URLSearchParams(window.location.search).get('country_id') || '185'
      ),
      languageOptions: {
        label: 'language',
        items: [
          {
            text: 'English  (EN)',
            value: EnumLanguages.en,
          },
          {
            text: 'Español  (ES)',
            value: EnumLanguages.es,
          },
        ],
      } as ILanguageSelectorOption,
      countryOptions: {
        label: 'country',
        items: [
          {
            text: 'United States',
            value: 185,
          },
          {
            text: 'Canada',
            value: 32,
          },
        ],
      } as ICountrySelectorOption,
    };
  },
  methods: {
    openDropdown() {
      this.isOpen = true;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    selectLanguage(item: ILanguageSelectorItem) {
      setLanguage(item.value);
    },
    selectCountry(countryID: number) {
      // Get the current URL
      const url = new URL(window.location.toString());

      // Create a URLSearchParams object from the current query string
      const params = new URLSearchParams(url.search);

      // Set the 'lang' parameter to 'es'
      params.set('country_id', '' + countryID);

      // Update the URL's search part with the modified query parameters
      url.search = params.toString();

      // Replace the current URL without reloading the page
      window.history.replaceState({}, '', url);

      this.countryID = countryID;
    },
  },
  computed: {
    t() {
      return useTranslation('Header');
    },
  },
  mounted() {
    if (![185, 32].includes(this.countryID)) {
      this.selectCountry(185);
    }
  },
});
</script>

<template>
  <div
    ref="parentRef"
    class="language"
    :class="{ isOpen: isOpen }"
    @mouseover="openDropdown"
    @mouseleave="closeDropdown"
  >
    <button class="language__toggler" type="button">
      <LangIcon />
    </button>
    <BaseDropdown
      :parentRef="parentRef"
      :isOpen="isOpen"
      position="right"
      ref="dropdownRef"
    >
      <div class="language__dropdown">
        <button class="language__close" @click="closeDropdown" type="button">
          <CloseIcon />
        </button>

        <!-- Language -->
        <div class="language__options">
          <div class="language__option">
            <p class="language__label">{{ t(languageOptions.label) }}</p>
            <v-list class="language__items">
              <v-list-item
                v-for="(item, itemIndex) in languageOptions.items"
                :key="itemIndex"
                class="language__item"
              >
                <button
                  :class="{ isActive: $i18n.locale === item.value }"
                  @click="selectLanguage(item)"
                  type="button"
                  class="language__button"
                >
                  {{ item.text }}
                </button>
              </v-list-item>
            </v-list>
          </div>
        </div>

        <!-- Country -->
        <div class="language__options">
          <div class="language__option">
            <p class="language__label">{{ t(countryOptions.label) }}</p>
            <v-list class="language__items">
              <v-list-item
                v-for="(item, itemIndex) in countryOptions.items"
                :key="itemIndex"
                class="language__item"
              >
                <button
                  :class="{ isActive: item.value === countryID }"
                  @click="selectCountry(item.value)"
                  type="button"
                  class="language__button"
                >
                  {{ item.text }}
                </button>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </div>
    </BaseDropdown>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.language {
  position: relative;

  &__toggler {
    @include flexColumn(center, center);
    transition: background-color $transition;

    @media (any-hover: hover) {
      &:hover {
        background-color: $grey_light;
      }
    }

    .isOpen & {
      background-color: $grey_light;
    }

    & svg {
      width: toRem(30);
      height: toRem(30);

      @media (max-width: $mobile) {
        width: toRem(20);
        height: toRem(20);
      }
    }
  }

  &__dropdown {
    position: relative;
    padding: toRem(50) toRem(20) toRem(50) toRem(40);

    @media (max-width: $mobile) {
      padding: toRem(12) toRem(16);
    }
  }

  &__close {
    position: absolute;
    right: 0;
    top: 0;
    margin: toRem(16);
    @include flexRow(center, center);
    width: toRem(36);
    height: toRem(36);
    border-radius: 50%;
    transition: background-color $transition;

    @media (any-hover: hover) {
      &:hover {
        background-color: $grey_light;
      }
    }

    @media (max-width: $mobile) {
      margin: toRem(8);
      width: toRem(22);
      height: toRem(22);
    }
  }

  &__options {
    @include flexColumn();
    row-gap: toRem(36);

    @media (max-width: $mobile) {
      row-gap: toRem(24);
    }
  }

  &__label {
    font-weight: 300;

    @media (max-width: $mobile) {
      font-size: toRem(12);
    }
  }

  &__items {
    @include flexColumn();
    row-gap: toRem(12);
    margin-top: toRem(12);
    padding: 0;
  }

  &__item {
    min-height: auto;
    padding: 0;
  }

  &__button {
    display: inline-block;
    padding: toRem(4) toRem(12);
    line-height: 175%;
    border-radius: toRem(30);
    font-weight: 200;
    color: #908b84;
    transition: color $transition, background-color $transition;

    @media (any-hover: hover) {
      &:hover {
        color: $mainColor;
      }
    }

    @media (max-width: $mobileSmall) {
      font-size: toRem(12);
    }

    &.isActive {
      background-color: #eceade;
    }
  }
}
</style>
