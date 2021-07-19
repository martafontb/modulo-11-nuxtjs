export const state = () => ({
    users:[],
    photos:[],
    input:'',
})

export const getters = {
    users: state => {
        return state.users;
      },
      photos: state => {
        return state.photos;
      },
      usersConsulted(state){
        return state.users.filter(user => user.counter > 0)
      },
      photosConsulted(state){
        return state.photos.filter(photo => photo.counter > 0)
      },
      getUserName(state) {
        return state.users.map( user => user.name)
      },
      // filteredAlbums(state) {
      //   return state.photos((acc,album) => {
      //     return {...acc, [album.albumId]: album }
      //   }, {});
      // }
}


export const actions = {
        async loadUsers({ commit }) {
            const response =  await this.$axios.$get('http://jsonplaceholder.typicode.com/users')
            response.forEach(item=>item.counter = 0);
            commit('SET_Users', response);
        },
        async loadPhotos({ commit }) {
            const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos')
            response.forEach(item=>item.counter = 0)
              commit('SET_Photos', response)
          },
}

export const mutations = {
    SET_Users (state, users) {
        if(state.users.length === 0) {
          state.users = users
          state.users.counter = 0
        }   
      },
      SET_Photos (state, photos) {
        if(state.photos.length === 0) {
          state.photos = photos
          state.photos.counter = 0
        } 
      },
      incrementCounter(state, selection) {
        selection.counter++ 
      }
}

