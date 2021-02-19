<template>
  <div class="team">
    <h1 class="title grey--text">Team</h1>

    <v-container fluid class="my-5">
      <v-row wrap>
          <v-flex xs12 sm6 lg3 v-for="person in team" :key="person.name">
                <v-card
                    class="ma-2"
                    max-width="344"
                    outlined     
                >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">
                        {{person.role}}
                        </div>
                        <v-list-item-title class="headline mb-1">
                        <p class="caption font-weight-bold">{{person.name}}</p>
                        </v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                    ></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                    <v-btn
                        outlined
                        rounded
                        text
                    >
                        Button
                    </v-btn>
                    </v-card-actions>
                </v-card>
          </v-flex>
      </v-row>
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data() {
    return {
      team: [
        { name: 'Gianluca Tiengo', role: 'Web developer' },
        { name: 'Giacomo Rosso', role: 'Graphic designer' },
        { name: 'Marco Di Maio', role: 'Web developer' },
        { name: 'Paolo Properzi', role: 'Social media' },
        { name: 'Alessandro Pozzato', role: 'Sales guru'}
      ]
    }
  }
}
</script>