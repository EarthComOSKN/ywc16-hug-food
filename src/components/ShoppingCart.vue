<template>
  <div class="shoping-cart" v-if="isCartSidebarOpen">
    <div class="item-list">
      <a href="#" @click="toggleCartSideBar()"><strong>X</strong></a>
      <br><br>
      <div class="columns is-mobile boldcol">
        <div class="column">รายการ</div>
        <div class="column is-2">ราคา</div>
        <div class="column is-3">จำนวน</div>
      </div>
      <div class="columns">
        <div class="column is-3">
          <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="column">
          <strong>ชื่อรายการ</strong>
          <br>
          รายละเอียด
        </div>
        <div class="column is-2">฿128</div>
        <div class="column is-3">- 1 +</div>
      </div>
    </div>
    <router-link to="/checkout">
      <button class="button is-info checkout" @click="toggleCartSideBar()">สั่งซื้อ</button>
    </router-link>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShoppingCart',
  components: {

  },
  computed: {
    ...mapState([
      'isCartSidebarOpen'
    ])
  },
  methods: {
    ...mapActions([
      'toggleCartSideBar'
    ])
  },
};
</script>

<style lang="scss" scoped>
  .shoping-cart {
    background-color: #fff;
    box-shadow: rgba(0,0,0,0.8) 2px 2px 20px 3px;
    width: 400px;
    max-width: 85vw;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 50;
    max-height: 100vh;

    .item-list {
      text-align: left;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .checkout {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    .boldcol {
      font-weight: bold;
    }
  }
</style>
