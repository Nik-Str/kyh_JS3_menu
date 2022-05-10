import { createStore } from 'vuex';
import allMenu from './menu';

export default createStore({
  state() {
    return {
      menu: [],
      isShowing: [],
      cart: [],
      total: 0,
    };
  },
  mutations: {
    setIsShowing(state, payload) {
      const filteredMenu = allMenu.filter((item) => item.category === payload);
      state.menu = filteredMenu;
      state.isShowing = filteredMenu;
    },
    addToCart(state, payload) {
      const { id, title, price } = payload;
      const cart = JSON.parse(JSON.stringify(state.cart));
      if (cart.some((item) => item.id === id)) {
        state.cart = cart.map((item) => {
          if (item.id === id) return { ...item, amount: item.amount + 1, total: item.total + price };
          else return item;
        });
      } else {
        state.cart = [...cart, { id: id, title: title, price: price, amount: 1, total: price }];
      }
    },
    removeFromCart(state, payload) {
      let cart = JSON.parse(JSON.stringify(state.cart));
      const { id } = payload;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
          const amount = cart[i].amount;
          if (amount === 1) {
            cart.splice(i, 1);
          } else {
            cart[i] = { ...cart[i], amount: cart[i].amount - 1, total: cart[i].total - cart[i].total / cart[i].amount };
          }
        }
      }
      state.cart = cart;
    },
    sortByPriceAscending(state) {
      const filtered = state.isShowing.sort((a, b) => a.price - b.price);
      state.isShowing = filtered;
    },
    sortByPriceDescending(state) {
      const filtered = state.isShowing.sort((a, b) => b.price - a.price);
      state.isShowing = filtered;
    },
  },
  getters: {
    getTotalt(state) {
      let total = 0;
      for (let i = 0; i < state.cart.length; i++) {
        total = total + state.cart[i].total;
      }
      return total;
    },
  },
});
