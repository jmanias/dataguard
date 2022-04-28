<template>
  <div class="marketing">
    <PageTitle title="Marketing"></PageTitle>
    <v-row>
      <v-col cols="12" md="4" v-for="(plugin, index) in plugins" :key="index">
        <v-card
            class="mx-auto pa-3 mb-4"
            outlined
            rounded
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-row>
                <v-col cols="6" class="text-h5 mb-1">
                  {{ plugin.title }}
                </v-col>
                <v-col cols="6" class="d-flex justify-end">
                  <v-switch
                      class="ma-0 pa-0"
                      :value="getIsPluginsDisabled"
                      inset
                      color="green"
                      hide-details
                      @change="toggleIsPluginsDisabled()"
                  ></v-switch>
                  allowed
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8">
                  {{ plugin.description }}
                </v-col>
              </v-row>
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
        { title: 'Marketing', description: 'Aliqua tempor nostrud occaecat enim nulla proident nostrud enim adipisicing pariatur velit.'},
        { title: 'Marketing', description: 'Enim cillum tempor veniam do laboris excepteur laborum fugiat aute magna cillum.'},
        { title: 'Marketing', description: 'Enim cillum tempor veniam do laboris excepteur laborum fugiat aute magna cillum.'},
        { title: 'Marketing', description: 'Enim cillum tempor veniam do laboris excepteur laborum fugiat aute magna cillum.'},
        { title: 'Marketing', description: 'Enim cillum tempor veniam do laboris excepteur laborum fugiat aute magna cillum.'},
        { title: 'Marketing', description: 'Enim cillum tempor veniam do laboris excepteur laborum fugiat aute magna cillum.'}
      ]
    }
  }
}
</script>
