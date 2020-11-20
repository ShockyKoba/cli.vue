import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const alertNotification = function(){
    console.log('notification');
};


createApp(App).use(store).use(router).mount('#app');


