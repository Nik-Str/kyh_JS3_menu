import { createStore } from 'vuex';

export default createStore({
  state: {
    state() {
      return {
        menu: [],
        isShowing: [],
      };
    },
  },
  mutations: {
    setIsShowing(state, payload) {
      const filteredMenu = menu.fiter((item) => item.category === payload);
      state.isShowing = filteredMenu[0];
    },
  },
  actions: {},
  getters: {},
});
