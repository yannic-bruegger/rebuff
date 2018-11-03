<template>
    <div>
        <v-list-tile avatar to="check?checkId=1">
            <v-list-tile-avatar>
              <v-icon>alarm</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{licenseplate}} : {{ title }}</v-list-tile-title>
              <v-list-tile-sub-title>Fällig am {{ date }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple @click="done = !done">
                <v-icon :color="done ? 'green lighten-1' : 'grey lighten-1'">check_circle</v-icon>
              </v-btn>
            </v-list-tile-action>
    </v-list-tile>
    </div>
</template>

<script>
export default {
    props:
    {
        licenseplate:
        {
            type: String,
            default: function(){return "ERROR"}
        },
        title:
        {
            type: String,
            default: function(){return "ERROR"}
        },
        date:
        {
            type: String,
            default: function(){return "ERROR"}
        },
    },
    data() {
      return {
          done: false
      }
    },
    computed:
    {
        src: function()
        {
            let licenseplateArgs = this.licenseplate.split('-')
            return 'https://www.kennzeichengenerator.com/_plate.engine.php?a=' + licenseplateArgs[0] + '&b=' + licenseplateArgs[1] + '&c=' + licenseplateArgs[2] + '&d=33&e=&f=hu&g=10&h=ge'
        }
    },
    created: function()
    {
    }
}
</script>

<style>

</style>
