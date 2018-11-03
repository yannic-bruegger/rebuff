<template>
    <v-slide-y-transition>
      <v-container>
        <vehicles-list filter="UPCOMING" search/>
      </v-container>
    </v-slide-y-transition>   
</template>

<script>
  import VehiclesList from '../components/VehiclesList'

  export default {
    components: {
      VehiclesList,
    },
    data()
    {
        return{

        }
    },
    created: function()
    {
    }
  }
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css";

</style>
