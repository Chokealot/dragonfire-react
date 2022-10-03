import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'
import Dialog from 'primevue/dialog';

import './assets/main.css'

const app = createApp(App)

app.component('Dialog', Dialog);

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
