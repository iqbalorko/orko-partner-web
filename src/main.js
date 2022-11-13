import { createApp } from 'vue';
import ElementPlus from 'element-plus';
const axios = require('axios');
import App from './App.vue';
import router from './router';
import store from './store';
import './axiosinstance';
import './assets/style.css';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// axios.defaults.withCredentials = true;



const app = createApp(App);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store).use(router).mount('#app');
