import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './index.css'

// global styles
// import './assets/main.css'


//import store
import store from './store/index'

createApp(App).use(store).use(router).mount('#app')
