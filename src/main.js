import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import App from './App.vue'
import './index.css'


library.add(fas);

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app');
