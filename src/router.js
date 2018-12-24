import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mall from './views/Mall.vue';
import Restaurant from './views/Restaurants.vue';
import ProductMallDetail from './views/MallDetail.vue';
import ProductRestaurantDetail from './views/RestaurantDetail.vue';
import Payment from './views/Payment.vue';
import ShoppingCart from './views/ShoppingCart.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/mall',
      name: 'mall',
      component: Mall,
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: Restaurant,
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: ShoppingCart,
    },
    {
      path: '/productmalldetail',
      name: 'ProductMallDetail',
      component: ProductMallDetail,
    },
    {
      path: '/productrestaurantdetail',
      name: 'ProductRestaurantDetail',
      component: ProductRestaurantDetail,
    },
    {
      path: '/payment',
      name: Payment,
      component: Payment,
    },
  ],
});
