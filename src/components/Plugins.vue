<template>
    <v-row align="stretch" class="ma-2">
      <v-col cols="12" md="4" v-for="(plugin, index) in plugins" :key="index" class="d-flex">
        <v-card outlined rounded width="100%" class="pa-2" :disabled="!getIsPluginsEnabled || isPluginDisabled(plugin)">
          <v-card-title class="py-0">
            {{ getPluginInfos(plugin).title }}
            <v-spacer />
            <v-switch
                inset
                v-model="getTabByName(tab).active"
                @change="togglePluginStatus(plugin)"
                :value="plugin"
                color="green"
                :hint="getTabByName(tab).active.includes(plugin) ? 'Allowed' : 'Blocked'"
                persistent-hint
            >
              <template v-slot:message="{ message }">
                <span :class="[!getTabByName(tab).active.includes(plugin) ? 'red--text' : 'green--text', 'font-weight-bold']"  v-html="message"></span>
              </template>
            </v-switch>
          </v-card-title>
          <v-card-text class="pt-4 pb-2 pr-16">{{ getPluginInfos(plugin).description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Plugins',
  components: {},
  props: {
    tab: {
      type: String,
      required: true
    }
  },
  async mounted () {
    await this.loadPlugins()
    await this.sortPlugins()
    this.getPluginInfos()
    this.active = this.getTabByName(this.tab).active
  },
  updated() {
    this.setTabData()
  },
  computed: {
    ...mapGetters(['getPlugins', 'getIsPluginsEnabled', 'getTabByName'])
  },
  methods: {
    ...mapActions(['loadPlugins', 'setTabData', 'toggleTabPluginStatusByName']),

    sortPlugins () {
      const tab = this.getTabByName(this.tab)
      this.plugins = tab.active.concat(tab.disabled,tab.inactive);

      const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true })
      this.plugins = this.plugins.sort(sortAlphaNum)
    },

    getPluginInfos (name) {
      return this.getPlugins[name]
    },

    isPluginDisabled (name) {
      return this.getTabByName(this.tab).disabled.includes(name);
    },

    isSwitchEnabled (name) {
      if (this.getTabByName(this.tab).active.includes(name)) {
        return true
      } else {
        return false
      }
    },

    togglePluginStatus (name) {
      const payload = {name: name, tab: this.tab}
      this.toggleTabPluginStatusByName(payload)
    }
  },
  data () {
    return {
      plugins: {},
      active: []
    }
    }
}
</script>
