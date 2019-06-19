<template>
  <v-app class="#FFFFFF">
    <NavBar />
    <v-content class="ma-2 pa-3 #FFFFFF">
      <transition name="page" mode="out-in">
      <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>
<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: { NavBar },
  data () {
    return {

    }
  }
}
</script>

<style>
* {
    font-family: Roboto,sans-serif;
}
/*  -----------------        Main APP backgrounds            -----------------------  */
.v-toolbar__content {
    background: #FFFFFF;
}
.theme--light.v-toolbar {
    background-color: #FFFFFF;
}
.theme--light.v-footer {
    background: #FFFFFF;
}
.theme--light.application {
    background: #FFFFFF;
}
/*  -----------------        router transitions            -----------------------  */
.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translate(-30%);
}
/*  -----------------        Media queries           -----------------------  */

@media only screen and (max-width: 700px){
  .container {
    flex: none;
  }
  .pa-3 {
      padding: 0px!important;
    }
  .ma-2 {
      margin: 0px!important;
    }
  .pa-3 {
      padding: 0px 0px !important;
    }
  .ma-2 {
      margin: 0px 0px !important;
    }
}
</style>