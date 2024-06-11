import { defineNuxtPlugin } from "#app";
import { createPinia } from "pinia";
import { useProductStore } from "../store/productStore";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.useProductStore = useProductStore;
  nuxtApp.vueApp.use(pinia);

  return {
    provide: {
      pinia,
      useProductStore,
    },
  };
});
