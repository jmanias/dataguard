<template>
  <v-app>
    <Navigation></Navigation>
    <v-main>
      <v-container>
          <router-view />
      </v-container>
    </v-main>
    <v-snackbar v-model="snackbar.active" :timeout="3000" top :color="snackbar.color">
      {{ snackbar.message}}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.active = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";
import {mapActions, mapState} from "vuex";

export default {
  name: 'App',
  components: {
    Navigation
  },
  async mounted() {
    await this.loadPlugins()
  },
  computed: {
    ...mapState(["snackbar"])
  },
  methods: {
    ...mapActions(['loadPlugins'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
