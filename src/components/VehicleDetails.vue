<template>
  <div>
    <v-alert v-if="id==0" :value="id==0" color="error" icon="error" outline>Mh, something went wrong.</v-alert>
    <v-card v-else class="card--flex-toolbar">
      <v-toolbar card prominent>
        
        <v-toolbar-title v-if="active" class="body-2 grey--text">{{licenseplate}}</v-toolbar-title>
        <v-toolbar-title v-else class="body-2 red--text">{{licenseplate}} (DISABLED)</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-tabs>
        <v-tab>Timeline</v-tab>
        <v-tab-item>
          <v-card-text>
            <!--<v-img :src="src" :aspect-ratio="5.5"></v-img>-->
            <v-timeline align-top dense>
              <v-timeline-item v-for="(event, index) in timeline_upcoming" :key="'_' + index" :color="event.color" :icon="getIcon(event.type)">
                <v-layout pt-3>
                  <v-flex xs4>
                    <strong>{{event.date}}</strong>
                  </v-flex>
                  <v-flex>
                    <strong>{{event.title}}</strong>
                    <div class="caption">{{event.subtext}}</div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
              <v-timeline-item v-for="(event, index) in timeline" :key="index" :color="event.color" :icon="getIcon(event.type)">
                <v-layout pt-3>
                  <v-flex xs4>
                    <strong>{{event.date}}</strong>
                  </v-flex>
                  <v-flex>
                    <strong>{{event.title}}</strong>
                    <div class="caption">{{event.subtext}}</div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-tab-item>

        <v-tab>Settings</v-tab>
        <v-tab-item>
          <v-list subheader three-line>
            <!--<v-subheader>General</v-subheader>-->
            <v-list-tile disabled>
              <v-list-tile-action>
                <v-checkbox v-model="active"></v-checkbox>
              </v-list-tile-action>

              <v-list-tile-content @click.prevent="active = !active">
                <v-list-tile-title>Enable vehicle</v-list-tile-title>
                <v-list-tile-sub-title>Enable this vehicle to be seen by non-admin users in order to register rides,
                  refueling etc.</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-tab-item>
      </v-tabs>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        licenseplate: "GM-EM-8010",
        active: true,
        timeline_upcoming: [
          {date: "05.11.2018", title: "TÜV 2018", subtext: "s",           type: "upcoming_check"},
        ],
        timeline: [
          {date: "05.11.2018", title: "TÜV 2018", subtext: "Bestanden",           type: "check"},
          {date: "03.11.2018", title: "Reparatur", subtext: "Neue Bremsscheiben",  type: "repair"},
          {date: "02.11.2018", title: "TÜV 2018", subtext: "Nicht bestanden",     type: "check"},
          {date: "02.11.2017", title: "TÜV 2017", subtext: "Bestanden",           type: "check"},
        ]
      };
    },
    props: {
      id: {
        type: Number,
        default: 0
      }
    },
    computed: {
      src: function () {
        let licenseplateArgs = this.licenseplate.split("-");
        return (
          "https://www.kennzeichengenerator.com/_plate.engine.php?a=" +
          licenseplateArgs[0] +
          "&b=" +
          licenseplateArgs[1] +
          "&c=" +
          licenseplateArgs[2] +
          "&d=33&e=&f=hu&g=10&h=ge"
        );
      }
    },
    methods:
    {
      alert: function(){
        
      },
      getIcon: function(type){
        switch (type) {
          case 'check':
            return 'fa fa-clipboard-list'
          break;
          case 'upcoming_check':
            return 'alarm'
          break;
          case 'repair':
            return 'far fa-circle';
          break;
        
          default:
            return 'error';
          break;
        }
      }
    },
    created: function () { }
  };
</script>

<style>
</style>