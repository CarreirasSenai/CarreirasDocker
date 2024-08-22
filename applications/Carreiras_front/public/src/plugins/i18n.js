import { createI18n } from 'vue-i18n';
import { pt } from 'vuetify/locale'; // Importe o idioma pt do Vuetify para incluir nas mensagens

export const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt: {
      $vuetify: {
        ...pt,
      },
    },
  },
});
