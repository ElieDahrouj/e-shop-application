import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faNewspaper, faStoreAlt, faShoePrints, faFileContract, faSearch, faStream, faAngleDoubleRight,faAngleDoubleLeft, faChevronLeft,faChevronRight,faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHome, faNewspaper , faStoreAlt, faShoePrints, faFileContract, faSearch, faStream, faAngleDoubleRight, faAngleDoubleLeft,faChevronLeft,faChevronRight, faArrowUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Ionic)
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
