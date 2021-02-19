<template>
  <div class="projects">
    <h1 class="title grey--text">Projects</h1>
    <v-container fluid class="my-5">
      
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i"
          >
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

    </v-container>    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'projects',
  components: {
    
  }
}
</script>
