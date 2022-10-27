export default {
  namespaced: true,
  state: {
    isCollapse: false
  },
  getters: {
    get_isCollapse(state) {
      return state.isCollapse;
    },
  },
  mutations: {
    SET_ISCOLLAPSE: (state, data) => {
      state.isCollapse = data
    }
  },
  actions: {},
  moudles: {}
}