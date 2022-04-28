<template>
  <div class="marketing">
    <PageTitle title="Marketing"></PageTitle>
    <v-row>
      <v-col cols="12" xs="6" sm="4" v-for="(plugin, index) in plugins" :key="index">
        <v-card
            class="mx-auto"
            max-width="344"
            outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ plugin.title }}
                <v-spacer></v-spacer>
                <span>dasda</span>
              </v-list-item-title>
              <v-list-item-subtitle class="pt-8">Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";

export default {
  name: 'Home',
  components: {
    PageTitle
  },
  data () {
    return {
      plugins: [
        { title: 'Marketing', description: 'Enim cillum tempor veniam do laboris excepteur laborum fugiat aute magna cillum.'},
        { title: 'Marketing', description: 'Enim cillum tempor veniam do laboris excepteur laborum fugiat aute magna cillum.'},
        { title: 'Marketing', description: 'Enim cillum tempor veniam do laboris excepteur laborum fugiat aute magna cillum.'}
      ]
    }
  }
}
</script>
