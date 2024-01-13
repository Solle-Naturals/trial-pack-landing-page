const { defineConfig } = require('@vue/cli-service');

require('dotenv').config({path: './app_env_variables.yaml'})

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'app/i18n/messages',
      enableInSFC: true,
      enableBridge: true,
      includeLocales: false,
    },
  },
});
