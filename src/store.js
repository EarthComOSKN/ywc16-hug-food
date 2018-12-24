import Vue from 'vue';
import Vuex from 'vuex';

import articles from './assets/data/articles.json';
import restaurantProducts from './assets/data/restaurantProducts.json';
import mallProducts from './assets/data/mallProducts.json';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: '',
    cart: [],
    data: {
      articles,
      restaurantProducts,
      mallProducts,
    },
  },
  getters: {
    isLoggedIn: state => state.userId !== '',
  },
  mutations: {
    updateUserId: (state, userId) => { state.userId = userId; },
    pushItemToCart: (state, item) => state.cart.push(item),
    spliceItemfromCart: (state, itemIndex) => state.cart.splice(itemIndex, 1),
  },
  actions: {
    login(ctx, userId) {
      ctx.commit('updateUserId', userId);
    },
    logout(ctx) {
      ctx.commit('updateUserId', '');
    },
    addItemToCart(ctx, item) {
      ctx.commit('pushItemToCart', item);
    },
    removeItemFromCart(ctx, itemIndex) {
      ctx.commit('spliceItemfromCart', itemIndex);
    },
  },
});
