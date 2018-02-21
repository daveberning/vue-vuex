const dashboardStore = {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    decrease (state) {
      state.count--;
    },
    resetCount (state) {
      state.count = 0;
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment');
    },
    decrease ({ commit }) {
      commit('decrease');
    },
    resetCount ({ commit }) {
      commit('resetCount');
    }
  }
}

export default dashboardStore;