<template>
    <div>
        <v-alert v-if="id==0" :value="id==0" color="error" icon="error" outline>Mh, something went wrong.</v-alert>
        <v-card v-else class="card--flex-toolbar">
            <v-toolbar card prominent>
                <v-toolbar-title class="body-2 grey--text">{{check.title}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-side-icon>
                    <v-icon>build</v-icon>
                </v-toolbar-side-icon>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text>
                <v-list three-line>
                    <v-list-tile v-for="(comment, i) in check.comments" :key="i" ripple avatar @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>{{comment.author.name}}</v-list-tile-title>
                            <v-list-tile-sub-title class="text--primary">{{comment.author.name}}</v-list-tile-sub-title>
                            <v-list-tile-sub-title>{{ comment.text }}</v-list-tile-sub-title>
                            <v-spacer></v-spacer>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-list-tile-action-text>{{ comment.datetime }}</v-list-tile-action-text>
                            <v-spacer></v-spacer>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
                <v-textarea auto-grow rows="1" label="Write new comment" hint="Press enter to post comment" counter="50" append-outer-icon="send"></v-textarea>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                check: {
                    vehicle: {
                        id: 1,
                        licenseplate: "GM-EM-8010"
                    },
                    checkId: 1,
                    title: "TÜV 2018",
                    date: "22.10.2018",
                    comments: [
                        {
                            author: {
                                id: 1,
                                name: "Yannic Brügger"
                            },
                            datetime: "02.11.2018 23:53",
                            text: "Bremsschläuche sind leicht abgenutzt. Sollten aber bis nächstes Jahr reichen."
                        },
                        {
                            author: {
                                id: 2,
                                name: "Frank Brügger"
                            },
                            datetime: "02.11.2018 23:53",
                            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                        }
                    ],
                    items: [
                        {
                            action: '15 min',
                            headline: 'Brunch this weekend?',
                            title: 'Ali Connors',
                            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                        },
                    ]
                }
            };
        },
        props: {
            id: {
                type: Number,
                default: 0
            }
        },
        computed: {
        },
        methods:
        {
        },
        created: function () {

        }
    };
</script>

<style>
</style>