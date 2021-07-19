<template>
  <v-container>
      <v-row>
        <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
            <GoBack />
          <h2>Albums</h2>
        </v-col>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-row         
        align="center"
        justify="center">
          <v-col
          sm="4"
          lg="6"
          class="post" 
          v-for="photo in filteredAlbums" 
          :key="photo.id">
            <v-card outlined>
              <v-card-subtitle>{{ photo.title }} - album:{{ photo.albumId }}</v-card-subtitle>
              <v-card-actions>
               <NuxtLink :to="{
                  name: 'Pictures-id', 
                  params:{ id:photo.id, album:photo.albumId, photo: photo }}">
                  <v-btn color="success" outlined>
                    See album 
                  </v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import GoBack from "@/components/GoBack";

export default {
    name: 'Pictures',
    props: ['id'],
    components: {
      GoBack
    },
    mounted(){
      this.$store.dispatch('loadPhotos')
    },  
computed: {
   ...mapState(['photos']),
    filteredAlbums() {
      let albums = this.photos
      albums = albums.reduce((acc,album) => {
        return {...acc, [album.albumId]: album }
      }, {});
      return albums;
      }
    }
}

</script>

<style>
a {
  text-decoration: none;
}
</style>