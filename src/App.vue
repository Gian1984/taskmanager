<template>
  <v-app>
    <Navbar/>
    <v-content>
      <router-view class="mx-5 mb-5 my-3"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
