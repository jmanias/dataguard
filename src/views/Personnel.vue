<template>
  <div class="personnel">
    <PageTitle title="Personnel"></PageTitle>
    <Plugins tab="tab3"></Plugins>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import Plugins from "@/components/Plugins";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Personnel',
  components: {
    PageTitle,
    Plugins
  },
  computed: {
    ...mapGetters(['getTab3'])
  },
  methods: {
    ...mapActions(['loadPlugins']),
    sortPlugins () {
      const tab = this.getTab3
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
