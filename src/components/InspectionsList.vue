<template>
    <div>
        <v-card class="mb-3" :to="test">
            <v-system-bar window>
                {{title}}
                <v-spacer></v-spacer>
            </v-system-bar>
            <v-list two-line>
                <InspectionListItem v-for="(item, i) in items" :key="i" avatar :licenseplate="item.licenseplate" :title="item.title" :date="item.date"></InspectionListItem>
                <v-container v-if="items.length == 0">
                    <v-alert :value="true" color="info" icon="info" outline>Mh, nothing here.</v-alert>
                </v-container>
            </v-list>
        </v-card>
    </div>
</template>

<script>
import InspectionListItem from '../components/InspectionListItem'

export default {
    data() {
      return {
        items:
        [
            { title: 'TÜV 2018', licenseplate: 'GM-ZX-8015', date: '21.10.2018' }
        ]
      };
    },
    components: {
      InspectionListItem
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
        }
    },
    computed:
    {
        title: function(){
            switch (this.filter) {
                case 'COMPLETED':
                    return 'Abgeschlossene Prüfungen'
                case 'UPCOMING':
                    return 'Anstehende Prüfungen'
                case 'NO_FILTER':
                    return 'Prüfungen'
                default:
                break;
            }
        }
    }
}
</script>

<style scoped>
</style>
