<template>
  <div class="finance">
    <PageTitle title="Finance"></PageTitle>
    <Plugins tab="tab2"></Plugins>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import Plugins from "@/components/Plugins";

export default {
  name: 'Finance',
  components: {
    PageTitle,
    Plugins
  }
}
</script>
