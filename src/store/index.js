const store = new Vuex.Store({
  state: {
    routerInfo: {
      title: ''
    }
  },
  mutations: {
    setPageHeader(state,meta) {
      state.count++
    }
  },
  actions:{

  }
})

export default store