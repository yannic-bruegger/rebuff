<template>
    <div>
        <v-list-tile avatar to="vehicle?vehicleId=1">
            <v-list-tile-avatar>
              <v-icon>{{icon}}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{licenseplate}}</v-list-tile-title>
              <v-list-tile-sub-title>{{ vehicletype }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <!--
            <v-list-tile-action>
              <v-btn icon ripple @click="done = !done">
                <v-icon :color="done ? 'green lighten-1' : 'grey lighten-1'">check_circle</v-icon>
              </v-btn>
            </v-list-tile-action>
            -->
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
        vehicletype:
        {
            type: String,
            default: function(){return "ERROR"}
        },
        id:
        {
            type: Number,
            default: function(){return 0}
        },
    },
    data() {
      return {
          done: false
      }
    },
    computed:
    {
        icon: function()
        {
            switch (this.vehicletype) {
                case 'Zugmaschine':
                    return 'domain'
                break;
                case 'PKW':
                    return 'directions_car'
                break;
                case 'LKW':
                    return 'local_shipping'
                break;           
                default:
                    return info;
                    break;
            } 
        },
    },
    created: function()
    {
    }
}
</script>

<style>

</style>
