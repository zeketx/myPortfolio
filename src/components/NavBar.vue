<template>
  <v-container>
    <!-- Hamburger menu -->
    <v-navigation-drawer
      app
      temporary
      enable-resize-watcher
      fixed
      width="500"
      v-cloak
      v-model="sideNav"
      class="#FFFFFF"
    >
        <v-list-tile>
            <v-list-tile-action v-cloak>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link 
                to="/" tag="span" 
                style="cursor: pointer"
                class="_title_"
                >
                {{ appTitle }}
                </router-link>
            </v-list-tile-content>
        </v-list-tile>
        <v-list v-cloak id="app__btn">
          <v-divider></v-divider>
          <v-list-tile
            v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.route"
            >
            <v-list-tile-action v-cloak>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content v-cloak>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
      </v-list>
      <div id="_social_icons">
        <ul class="icons">
            <li>
               <a href="https://github.com/zeketx" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="icon alt"/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/ezekiel-mauricio-655b70127/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" class="icon alt"/></a>
            </li>
            <li>
                <a href="mailto:ezekielmauricio86@gmail.com" target="_blank"><font-awesome-icon :icon="['fa', 'envelope']" class="icon alt"/></a>
            </li>
           <li>
                <a href="https://plus.google.com/115603273133751670681" target="_blank"><font-awesome-icon :icon="['fab', 'free-code-camp']" class="icon alt"/></a>
            </li>
        </ul>
    </div>
     <v-divider></v-divider>
    </v-navigation-drawer>
    <!-- Toolbar -->
    <v-toolbar app flat dense scroll-off-screen class="toolbar #FFFFFF
">
        <v-toolbar-side-icon
          v-on:click.stop="sideNav = !sideNav;"
          class="hidden-sm-and-up"
        >
        </v-toolbar-side-icon>
        <v-toolbar-title v-cloak>
          <router-link id="_title" to="/" tag="span" style="cursor: pointer">{{
            appTitle
          }}</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only" v-cloak>
          <v-btn
            flat
            v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.route"
          >
            <v-icon left>{{ item.icon }}</v-icon
            >{{ item.title }}
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <!-- Footer-->
    <v-footer app fixed dense v-cloak class="#FFFFFF"> <span>&copy; 2019</span> </v-footer>
  </v-container>
</template>
<script>
// imports go here

export default {
  data() {
    return {
      sideNav: false,
      appTitle: "EZEKIEL MAURICIO",
      menuItems: [
        { icon: "", title: "ABOUT", route: "/" },
        { icon: "", title: "PORTFOLIO", route: "/projects" },
        { icon: "", title: "CONTACT", route: "/contact" }
      ]
    };
  },
  components: {}
};
</script>

<style>
/*  -- Navigation Drawer  --  */
.v-navigation-drawer {
    padding: 20px;
    opacity: 0.9;
    letter-spacing: 1px;
  }
  .v-list__tile__title {
    text-align: center !important;
  }
  .v-list__tile__action, .v-list__tile__content {
    font-size: 16px;
  }
  .v-navigation-drawer > .v-list .v-list__tile {
    border: 2px solid rgb(125, 125, 125);
    border-radius: 5px;
    padding-left: 14%;
    background: #FFFFFF;
    color: grey;
  }
  .v-list__tile {
    margin: 20px !important;
  }
  ._title_ {
    padding-top: 0%;
    display: none;
  }
  #_social_icons li{
    display: inline;
    padding: 20px;
    font-size: 30px;
  }
  #_social_icons a {
    color: grey;
  }
/*  -- Navigation Drawer END --  */
#_title {
  font-weight:200;
  font-size: 15px;
}
.toolbar {
  padding-bottom: 2px;
}
[v-cloak] {
  display: none;
}
.v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
    background-color: #FFFFFF;
}
.v-btn {
    font-size: 15px;
    font-weight: 200;
}
@media only screen and (max-width: 700px){
  #_title {
    display: none; 
  }
}
</style>
