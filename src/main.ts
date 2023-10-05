import { createApp } from 'vue';
import { createPinia } from 'pinia';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
