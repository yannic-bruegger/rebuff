<template>
  <v-app>
    <v-toolbar app clipped-left flat dark color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{title}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="font-weight-light">{{version}}</span>
    </v-toolbar>

    <v-navigation-drawer fixed v-model="drawer" app clipped>
      <v-img :aspect-ratio="16/8" :src="navigationimage">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-avatar color="white" class="mb-3 ml-3" size="64">
            <span class="blue--text headline">{{initials}}</span>
          </v-avatar>
          <v-flex shrink>
            <div class="subheading">{{user.firstname}} {{user.name}} <v-icon small color="yellow">fas fa-star</v-icon></div>
            <div class="body-1">{{user.email}}</div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-divider></v-divider>

      <v-list class="pt-0">
        <v-list-tile v-for="item in navigation" :key="item.title" :to="item.location" :disabled="item.disabled">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        user: {
          name: "Brügger",
          firstname: "Yannic",
          email: "yannic.bruegger@gmail.com",
          initials: function(){
            return this.firstname.substring(0,1) + "" +  this.name.substring(0,1);
          } 
        },
        title: "Rebuff",
        version: "BETA 3.1",
        drawer: false,
        navigationimage: require('./assets/banner.jpg'),
        navigation: [
          { title: "Dashboard",       icon: "dashboard",        location: "/" },
          { title: "Vehicles",        icon: "drive_eta",        location: "vehicles" },
          { title: "Time recording",  icon: "access_time",      location: "", disabled: true },
          { title: "Employees",       icon: "people",           location: "", disabled: true },
          { title: "About",           icon: "question_answer",  location: "about" },
          { title: "Auth",            icon: "lock",             location: "login" },
        ]
      };
    },
    computed:{
      initials: function(){
        return (this.user.firstname.substring(0,1) + this.user.name.substring(0,1)).toUpperCase();
      } 
    }
  };
</script>

<style>
</style>
