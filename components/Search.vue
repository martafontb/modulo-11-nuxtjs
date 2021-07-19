<template>
<div>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="getUserName"
      :search-input.sync="searchInput"
      cache-items
      class="mx-2"
      flat
      hide-no-data
      hide-details
      label="Usuaris"
      solo-inverted
    ></v-autocomplete>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'Search',
    computed: {
        ...mapGetters(['getUserName', 'users'])
    },
    data () {
      return {
        counter: 0,
        loading: false,
        search: null,
        select: null,
        searchInput: ""
      }
    },
    watch: {
      searchInput (val) {
        val && val !== this.select && this.querySelections(val)
        if (val) {
            let user = this.users.filter(user => user.name == (val))
            this.$router.push({ name: 'Users-name', params:{ name: `${val}`, user: user[0] }})
        }
        if(val !== this.select ){
          this.$router.push({ name: 'NotFound'})
        }
        
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        setTimeout(() => {
          this.items = this.getUserName.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      }
  }
  
  }
</script>


