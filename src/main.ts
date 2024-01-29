import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createPrismic } from '@prismicio/vue';

const prismic = createPrismic({
  endpoint: 'https://luceria.cdn.prismic.io/api/v2',
});

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).use(prismic).mount('#app');
