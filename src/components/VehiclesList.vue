<template>
    <div>
        <v-text-field v-if="search" v-model="searchAddition" label="Search" solo error-messages=""></v-text-field>

        <v-btn-toggle
      v-model="searchAddition"
      class="transparent"
      multiple
    >
      <v-btn value="Zugmaschine" flat>
        <v-icon>domain</v-icon>
      </v-btn>

      <v-btn value="PKW" flat>
        <v-icon>directions_car</v-icon>
      </v-btn>

      <v-btn value="LKW" flat>
        <v-icon>local_shipping</v-icon>
      </v-btn>

      <v-btn value="UNDEFINED" flat>
        <v-icon>info</v-icon>
      </v-btn>
    </v-btn-toggle>
        <v-card class="mb-3">
            <v-system-bar v-if="titlebar" window>
                {{title}}
                <v-spacer></v-spacer>
            </v-system-bar>
            <v-progress-linear v-if="loading" :indeterminate="true" class="ma-0"></v-progress-linear>
            <v-list two-line class="pa-0">
                <VehicleListItem v-for="(item, i) in items" :key="i" avatar :licenseplate="item.licenseplate" :vehicletype="item.vehicletype" :id="item.vehicleId"></VehicleListItem>
                <v-container v-if="items.length == 0">
                    <v-alert :value="true" color="info" icon="info" outline>Mh, nothing here.</v-alert>
                </v-container>
            </v-list>
        </v-card>
    </div>
</template>

<script>
import VehicleListItem from '../components/VehicleListItem'

export default {
    data() {
      return {
        searchTerm: '',
        searchAddition: [],
        loading: false,
        items:
        [
            { vehicleId: 0, licenseplate: 'GM-ZX-8015', vehicletype: 'PKW' },
            { vehicleId: 0, licenseplate: 'GM-ZX-8015', vehicletype: 'LKW' },
            { vehicleId: 0, licenseplate: 'GM-ZX-8015', vehicletype: 'Zugmaschine' }
        ]
      };
    },
    components: {
      VehicleListItem
    },
    props:
    {
        filter:
        {
            type: String,
            default: 'NO_FILTER'
        },
        vehicle:
        {
            type: Number,
            default: 0
        },
        search:
        {
            type: Boolean,
            default: true
        },
        titlebar:
        {
            type: Boolean,
            default: true
        }
    },
    computed:
    {
        title: function(){
            switch (this.filter) {
                case 'PKW':
                    return 'PKW'
                case 'LKW':
                    return 'LKW'
                default:
                case 'NO_FILTER':
                    return 'Vehicles'
                break;
            }
        }
    }
}
</script>

<style scoped>
.v-text-field__details
{
    min-height: 0;
    display: none;
}
</style>
