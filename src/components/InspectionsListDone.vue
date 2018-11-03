<template>
    <div>
        <v-card class="mb-3">
            <v-system-bar window>
                Abgeschlossene Prüfungen
                <v-spacer></v-spacer>
            </v-system-bar>
            <v-list two-line>
                <InspectionListItem v-for="(item, i) in items" :key="i" avatar :licenseplate="item.licenseplate" :title="item.title" :date="item.date"></InspectionListItem>
                <v-container v-if="items.length == 0">
                    <v-alert :value="true" color="info" icon="info" outline>Keine abgeschlossenen Prüfungen gefunden.</v-alert>
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
        
    },
    computed:
    {
    }
}
</script>

<style scoped>
</style>
