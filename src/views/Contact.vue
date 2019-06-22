<template>
  <div class="wrapper">
    <div id="_form">
      <ContactForm />
    </div>
    <!--------------------------------------        Google Maps API        -------------------------->
    <div id="map">
      <Gmap />
    </div>
  </div>
</template>
<script>
import Gmap from '../components/Gmap'
import ContactForm from '../components/ContactForm'

export default {
  components: { Gmap, ContactForm },
   data () {
     return {

     }
   }
}
</script>
<style scoped>
    /*  -----------------        Mobile Grid Display            -----------------------  */
      .wrapper {
        height: 100vh;
        display: grid;
        padding-top: 50px;
        grid-template-columns: 140px 1fr 1fr 140px;
        grid-template-rows: auto;
        grid-template-areas: ". _form _map ."
                             ". _form _map .";
      }

      /*  -----------------       _form           -----------------------  */

      #_form {
        grid-area: _form;
        padding: 20px;
      }

      /*  -----------------        _map           -----------------------  */

      #map {
        grid-area: _map;
        height: 500px;
      }
      .v-text-field {
        font-weight: 200;
      }
    /*  -----------------        Media           -----------------------  */

    @media only screen and (max-width: 700px){
      
      .wrapper {
        height: auto;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas: "_form"
                             "_map";
      }

      #_form {
        grid-area: _form;
        padding: 10px;
      }
 
      #map {
        grid-area: _map;
        padding: 13px;
        height: 400px;
      }
    }

@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {
      
       .wrapper {
        height: auto;
        display: grid;
        padding-top: 0;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas: "_form"
                             "_map";
      }

}

/*  -----------------        IPHONE X          -----------------------  */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 

      .wrapper {
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: "_form _map";
      }
  }

    /*  -----------------        Ipad Pro Media queries           -----------------------  */

@media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1366px)
  and (-webkit-min-device-pixel-ratio: 2) {

    .wrapper {
        height: auto;
        display: grid;
        padding: 10%;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas: "_form"
                             "_map";
      }
  }
</style>