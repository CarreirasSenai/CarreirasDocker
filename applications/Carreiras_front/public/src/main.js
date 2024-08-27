// // Plugins
// import { registerPlugins } from '@/plugins'

// // Components
// import { createApp } from 'vue'
// import App from './App.vue';
// import router from './router';
// import '@mdi/font/css/materialdesignicons.css'
// import vuetify from './plugins/vuetify'

// // Create Vue application
// const app = createApp(App)

// // Register plugins
// registerPlugins(app)

// // Configure the router and VCalendar
// app.use(router)

// // Mount the app
// app.mount('#app')

// new Vue({
//     vuetify,
//     render: h => h(App)
//   }).$mount('#app')

// LEIA! ******* ACIMA CONFIGS ANTIGAS COMENTADAS, ABAIXO NOVAS CONFIGS QUE RESOLVERAM OS CONSTANTES ERROS OCUPANDO TODO O CONSOLE. AJUSTES FEITOS NOS ARQUIVOS (vuetify.js) e (main.js)

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; // Importa a configuração do Vuetify
import { i18n } from './plugins/i18n'; // Importa a configuração do i18n
import './styles/keyframes.css';

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(i18n);

app.mount('#app');

