declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module 'vue-plyr';
declare module '*.png';
declare module '*.jpg';

declare namespace NodeJS {
  interface ProcessEnv {
    VUE_APP_CHECKOUT_URL: string;
  }
}