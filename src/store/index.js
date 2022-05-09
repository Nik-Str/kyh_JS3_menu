import { createStore } from 'vuex';
import allMenu from './menu';

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
      const filteredMenu = allMenu.filter((item) => item.category === payload);
      state.isShowing = filteredMenu;
    },
  },
  getters: {
    sortByPriceAscending() {
      const filered = isShowing.sort((a, b) => a.price - b.price);
      return filered;
    },
  },
});
