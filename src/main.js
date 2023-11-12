
import './style.css'
import App from './App.vue'
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/lara-light-teal/theme.css'
import ToastService from 'primevue/toastservice';
const app = createApp(App);
app.use(ToastService);

app.mount('#app')
app.use(PrimeVue);

// const app = createApp(App);
// app.use(PrimeVue);

