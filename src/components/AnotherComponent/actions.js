const anotherStore = {
  namespaced: true,
  state: {
    name: ''
  },
  mutations: {
    changeName (state, payload) {
      state.name = payload;
    },
    clearName (state, payload) {
      state.name = '';
    }
  },
  actions: {
    changeName ({ commit }, payload) {
      commit('changeName', payload);
    },
    clearName ({ commit }, payload) {
      commit('clearName', payload);
    }
  }
}

export default anotherStore;