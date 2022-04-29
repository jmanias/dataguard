<template>
  <div class="marketing">
    <PageTitle title="Marketing"></PageTitle>
    <Plugins tab="tab1"></Plugins>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import Plugins from "@/components/Plugins";

export default {
  name: 'Marketing',
  components: {
    PageTitle,
    Plugins
  }
}
</script>
