<template>
  <v-container mb-16>
      <v-row>
        <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
          <GoBack />
          <h2>Picture</h2>
        </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row         
        align="center"
        justify="center">
          <v-col 
          sm="6" 
          lg="6" 
          class="picture"
          v-for="photo in album"
          :key="photo.id"
          >
            <v-card outlined elevation="2" text-center>
              <v-img 
              height="250"
              :src="photo.thumbnailUrl"></v-img>
              <v-card-text>Title: {{ photo.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import GoBack from "@/components/GoBack";

export default {
  name: 'Picture',
  components: {
      GoBack
    },
  computed: {
   ...mapState(['photos']),
   album() {
     let album = this.photos
     album = album.filter(photo => photo.albumId == this.$route.params.photo.albumId )
      return album;
   }
  },
  created(){
    this.$store.commit('incrementCounter', this.$route.params.photo)
  },
}
</script>