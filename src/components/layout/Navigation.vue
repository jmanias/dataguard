<template>
  <div class="navigation">
    <v-app-bar
        app
        clipped-left
        flat
        v-if="$vuetify.breakpoint.xsOnly">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title center>
        <Logo :topBar="true"></Logo>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
        color="#f1f1f1"
        class="br-0"
        :permanent="!$vuetify.breakpoint.xsOnly"
        app
        clipped
        v-model="drawer"
        width="250"
    >
      <Logo class="pl-8 py-5" :sidebar="true"></Logo>
      <v-list>
        <v-list-item-group
            active-class="activeTab"
        >
          <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="{name: item.link}"
          >
            <v-list-item-icon class="mr-2">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2 d-flex">
          <v-card-text class="pt-5"> All plugins enabled</v-card-text>
          <v-switch
              inset
              flat
              color="green"
          ></v-switch>
        </div>
        <div class="pluginStatus pa-4"></div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from "@/components/layout/Logo";

export default {
  name: 'TopBar',
  components: {
    Logo
  },
  data () {
    return {
      drawer: false,
      switch: false,
      items: [
        { title: 'Marketing', icon: 'mdi-view-dashboard', link: 'Marketing' },
        { title: 'Finance', icon: 'mdi-finance', link: 'Finance' },
        { title: 'Personnel', icon: 'mdi-clipboard-check-outline', link: 'Personnel' },
      ]
    }
  }
}
</script>

<style lang="scss">
.v-navigation-drawer__border {
  display: none;
}

.activeTab {
  border-left: 6px solid red;
  background-color: white !important;
}

.pluginStatus {
  background: rgb(93,200,141);
  background: linear-gradient(0deg, rgba(93,200,141,1) 0%, rgba(241,241,241,0) 100%);
}
</style>
