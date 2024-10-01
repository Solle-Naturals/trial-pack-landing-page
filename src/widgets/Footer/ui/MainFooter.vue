<script lang="ts">
import {
  BaseContainer,
  BaseLogo,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from '@/shared/ui';
import { isTablet } from '@/shared/lib';
import { useTranslation } from '@/app/i18n/hooks';

export default {
  name: 'MainFooter',
  components: {
    BaseContainer,
    BaseLogo,
  },
  data() {
    return {
      isTablet,
      t: useTranslation('Footer'),
      socials: [
        { icon: FacebookIcon, href: '#' },
        { icon: InstagramIcon, href: '#' },
        { icon: YoutubeIcon, href: '#' },
      ],
    };
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <BaseContainer>
        <div class="footer__content">
          <div class="footer__main">
            <BaseLogo class="footer__logo" variant="white" />
            <p v-if="!isTablet" class="footer__copy">{{ t('copyright') }}</p>
          </div>
          <div class="footer__box">
            <v-list class="footer__socials">
              <v-list-item
                class="social"
                v-for="(social, index) in socials"
                :key="index"
              >
                <a class="social__link" :href="social.href">
                  <component :is="social.icon" />
                </a>
              </v-list-item>
            </v-list>
            <div>
              <a href="tel:8018230430">(801) 823-0430</a>
              <a href="mailto:customersupport@sollenaturals.com">
                customersupport@sollenaturals.com
              </a>
            </div>
          </div>
          <v-col class="statements white--text text-caption" cols="12">
            <div class="mb-2 footer-items-column">
              <a
                class="white--text text-caption"
                href="https://www.sollenaturals.com/terms"
              >
                {{ $t('termsAndConditions') }} |
              </a>
              <a
                class="white--text text-caption"
                href="https://www.sollenaturals.com/privacy"
              >
                {{ $t('privacyAndSecurity') }}
              </a>
            </div>

            <p class="text-section white--text text-caption mb-2">
              {{ $t('textSection') }}
            </p>
          </v-col>
        </div>
        <p v-if="isTablet" class="footer__copy">{{ t('copyright') }}</p>
      </BaseContainer>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import 'src/app/assets/styles/variables.scss';

.footer {
  position: relative;
  background-color: $white;
  z-index: $zIndex_1;
  color: $white;
  padding: toRem(150) toRem(18) toRem(18);
  font-size: toRem(14);
  line-height: 171.428571%; /* 24/14 */

  @media (max-width: $mobile) {
    padding: toRem(76) toRem(8) toRem(8);
  }

  &__wrapper {
    background-color: $mainColor;
    padding: toRem(42) 0;
    border-radius: toRem(20);

    @media (max-width: $tablet) {
      padding: toRem(16) 0;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: toRem(24);
    justify-items: center;
    align-items: center;

    @media (max-width: $tablet) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: toRem(18);

    @media (max-width: $tablet) {
      gap: toRem(4);
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: toRem(18);

    @media (max-width: $tablet) {
      flex-direction: column-reverse;
      gap: toRem(4);
    }

    & a {
      display: block;
      width: fit-content;
      color: $white;
      transition: opacity $transition;

      @media (any-hover: hover) {
        &:hover {
          opacity: 0.8;
        }
      }

      @media (max-width: $mobile) {
        font-size: toRem(8);
        line-height: 150%; /* 12/8 */
      }
    }
  }

  &__logo {
    width: toRem(221);
    height: toRem(77);

    @media (max-width: $mobile) {
      width: toRem(126);
      height: toRem(41);
    }
  }

  &__copy {
    font-size: toRem(12);

    @media (max-width: $tablet) {
      text-align: center;
      margin-top: toRem(12);
    }

    @media (max-width: $mobile) {
      font-size: toRem(8);
      line-height: 150%; /* 12/8 */
    }
  }

  &__socials {
    @include flexRow(center);
    column-gap: toRem(20);
    margin: 0;
    padding: 0;
    background-color: transparent;

    @media (max-width: $mobile) {
      column-gap: toRem(12);
    }
  }

  &__info {
    border: toRem(1) solid $white;
    border-radius: toRem(12);
    padding: toRem(26) toRem(20);

    @media (max-width: $tablet) {
      grid-column: span 2;
    }

    @media (max-width: $mobile) {
      font-size: toRem(8);
      line-height: 150%; /* 12/8 */
      padding: toRem(12) toRem(20);
    }
  }
}

.social {
  padding: 0;
  margin: 0;
  flex: 0;
  min-height: auto;

  &__link {
    color: $white;
    @include flexColumn(center, center);
    & svg {
      width: toRem(36);
      height: toRem(36);

      @media (max-width: $mobile) {
        width: toRem(22);
        height: toRem(22);
      }
    }
  }
}
.text-section {
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 8px;
  font-size: 9px;
  line-height: 17px;
  padding: 10px 18px;
  width: 300px;
}
.statements {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 992px) {
    grid-column: span 3;
  }
  @media (max-width: $mobile) {
    font-size: toRem(8);
    line-height: 150%; /* 12/8 */
  }
}
</style>

<i18n> 
  {
    "en": {
      "return": "Returns/Refunds",
      "review": "Reviews",
      "faq": "FAQs",
      "testing": "Testing/Quality",
      "giveGet": "Give $10, Get $10",
      "contactUs": "Contact Us",
      "becomeBrandSpecialist": "Become a Brand Specialist",
      "termsAndConditions": "Terms & Conditions",
      "privacyAndSecurity":"Privacy & Security",
      "textSection": "* These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.",
      "rights": "©2024 Solle Naturals. All Rights Reserved."
    },
    "es":{
      "return": "Reembolsos/Devoluciones",
      "review": "Reseñas",
      "faq": "Preguntas Frecuentes",
      "testing": "Pruebas/Calidad",
      "giveGet": "Da $10, Recibe $10",
      "contactUs": "Contacta a Solle",
      "becomeBrandSpecialist": "Conviértete en Especialista de Marca",
      "termsAndConditions": "Términos & Condiciones",
      "privacyAndSecurity":"Privacidad & Seguridad",
      "textSection": "* Estas declaraciones no han sido evaluadas por la Administración de Alimentos y Medicamentos. Estos productos no intentan diagnosticar, tratar, curar o prevenir ninguna enfermedad.",
      "rights": "©2024 Solle Naturals. Derechos Reservados."
    }
  }
  </i18n>
