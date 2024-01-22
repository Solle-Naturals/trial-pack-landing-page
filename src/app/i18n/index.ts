import Vue from 'vue';
import VueI18n from 'vue-i18n';

import { getCurrentLocale } from './utils';

export enum EnumLanguages {
  en = 'en',
  es = 'es',
}

export const defaultLocale: EnumLanguages = EnumLanguages.en;

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    './messages',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: any = {};

  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  return messages;
}

export default new VueI18n({
  locale: getCurrentLocale(),
  fallbackLocale: getCurrentLocale(),
  messages: loadLocaleMessages(),
});
