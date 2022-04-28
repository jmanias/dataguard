<template>
  <v-row class="py-4">
    <v-col cols="12">
      <h3 class="font-weight-medium text--black">{{ title }} Plugins</h3>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
