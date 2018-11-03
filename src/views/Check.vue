<template>
    <v-slide-y-transition>
      <v-container>
        <check-details :id="checkId"/>
      </v-container>
    </v-slide-y-transition>   
</template>

<script>
  import CheckDetails from '../components/CheckDetails'

  export default {
    components: {
      CheckDetails,
    },
    data()
    {
        return{
            
        }
    },
    computed:
    {
        checkId: function()
        {
            if( this.$route.query.checkId !== undefined )
            {
                return parseInt(this.$route.query.checkId);
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
