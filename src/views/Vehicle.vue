<template>
    <v-slide-y-transition>
      <v-container>
        <vehicle-details :id="vehicleId"/>
      </v-container>
    </v-slide-y-transition>   
</template>

<script>
  import VehicleDetails from '../components/VehicleDetails'

  export default {
    components: {
      VehicleDetails,
    },
    data()
    {
        return{
            
        }
    },
    computed:
    {
        vehicleId: function()
        {
            if( this.$route.query.vehicleId !== undefined )
            {
                return parseInt(this.$route.query.vehicleId);
            };
        }
    },
    created: function()
    {
        
    }
  }
</script>
<style>
</style>
