import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faGooglePlusSquare, faFreeCodeCamp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faGithub, faLinkedin, faEnvelope, faGooglePlusSquare, faFreeCodeCamp, faLink)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
