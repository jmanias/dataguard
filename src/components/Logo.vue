<template>
  <div>
    <div v-if="sidebar" class="d-flex"><h1 class="font-weight-medium">Data</h1><h1>Guard</h1></div>
    <div v-if="topBar" class="d-flex"><h3 class="font-weight-medium">Data</h3><h3>Guard</h3></div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    topBar: {
      type: Boolean
    },
    sidebar: {
      type: Boolean
    }
  }
}
</script>
