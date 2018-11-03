<template>
    <v-slide-y-transition>
      <v-container :v-show="show">
        <transition name="slide"><upcoming-inspections/></transition>
        <transition name="slide"><done-inspections/></transition>
        <transition name="slide"><inspections filter="UPCOMING"/></transition>
      </v-container>
    </v-slide-y-transition>   
</template>

<script>
  import UpcomingInspections from '../components/InspectionsListUpcoming'
  import DoneInspections from '../components/InspectionsListDone'
  import Inspections from '../components/InspectionsList'

  export default {
    components: {
      UpcomingInspections,
      DoneInspections,
      Inspections,
    },
    data(){
      return{
        show: false
      }
    },
    created: function()
    {
      this.show = true;
    }
  }
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css";

</style>
