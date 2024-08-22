// /**
//  * plugins/vuetify.js
//  *
//  * Framework documentation: https://vuetifyjs.com`
//  */

// // Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'

// // Composables
// import { createVuetify } from 'vuetify'
// import { VCalendar } from 'vuetify/labs/VCalendar'
// import { pt } from 'vuetify/locale'

// // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// export default createVuetify({
//   theme: {
//     defaultTheme: 'light',
//   },
//   components: {
//     VCalendar,
//   },
//   locale: {
//     locale: 'pt-BR',
//     messages: { pt },
//   },
// })

// LEIA! ******* ACIMA CONFIGS ANTIGAS COMENTADAS, ABAIXO NOVAS CONFIGS QUE RESOLVERAM OS CONSTANTES ERROS OCUPANDO TODO O CONSOLE. AJUSTES FEITOS NOS ARQUIVOS (vuetify.js) e (main.js)

import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importe o estilo do Vuetify
import {pt} from 'vuetify/locale'; // Importe o idioma pt do Vuetify

export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  locale: {
    locales: { pt },
    current: 'pt',
    fallback: 'en',
    messages: { pt },
  },
});
