import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faGooglePlusSquare, faFreeCodeCamp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

library.add( faGithub, faLinkedin, faEnvelope, faGooglePlusSquare, faFreeCodeCamp, faLink)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC8F0-N4ToR1YZlxOIgw4wvwVzsXuCkxFg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
