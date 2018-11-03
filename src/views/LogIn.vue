<template>
  <v-layout row justify-center class="page">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-card-text class="content">
                <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-img :aspect-ratio="16/8" :src="navigationimage">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          
          <v-progress-circular class="mb-3 ml-3" :value="authenticated?360:0" :rotate="360" :size="70" :width="5" :indeterminate="!authenticated" :color="color">
            <v-avatar icon color="tranparent" class="lockicon" size="60">
              <span class="blue--text headline"><v-icon transition="fade-transition" large :color="color">{{authenticated?'lock_open':'lock'}}</v-icon></span>
            </v-avatar>
          </v-progress-circular>
          <v-flex shrink>
            <div class="subheading">Authentification required</div>
          </v-flex>
        </v-layout>
      </v-img>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="authenticated=!authenticated">Login<v-icon>forward</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
        </v-card-text>
        
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        authenticated: false,
        navigationimage: require('../assets/banner.jpg'),
      }
    },
    computed:
    {
      color: function()
      {
        return this.authenticated ? 'success':'info';
      }
    },
    watch: {
      authenticated: function (val) {
        var context = this;

        if( val )
        {
          setTimeout(function(){ context.dialog = false;  }, 1000);
          setTimeout(function(){ context.$router.push('/')  }, 1200);
        }
        else
        {
          setTimeout(function(){ context.dialog = true;  }, 1000);
        }
      }
    },
    created: function(){
        var context = this;
        setTimeout(function(){ context.dialog = true;  }, 200);
    }
  }
</script>

<style>
    .lockicon
    {
       margin: 0;
    }
</style>
