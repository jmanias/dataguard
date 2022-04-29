<template>
  <div class="finance">
    <PageTitle title="Finance"></PageTitle>
    <Plugins tab="tab2"></Plugins>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import Plugins from "@/components/Plugins";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Finance',
  components: {
    PageTitle,
    Plugins
  },
  computed: {
    ...mapGetters(['getTab2'])
  },
  methods: {
    ...mapActions(['loadPlugins']),

    sortPlugins () {
      const tab = this.getTab2
      this.sortedPlugins = tab.active.concat(tab.disabled,tab.inactive);
      this.sortedPlugins.sort(function(a, b) {
        return a - b;
      });
    }
  },
  async mounted() {
    await this.loadPlugins()
    this.sortPlugins()
  },
  data () {
    return {
      sortedPlugins: []
    }
  }
}
</script>
