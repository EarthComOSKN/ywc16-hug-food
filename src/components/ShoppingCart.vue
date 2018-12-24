<template>
  <div class="shoping-cart" v-if="isCartSidebarOpen">
    <div class="item-list">
      <div class="columns">
        <div class="column">รายการ</div>
        <div class="column is-2">ราคา</div>
        <div class="column is-2">จำนวน</div>
      </div>
      <div class="columns">
        <div class="column is-3">
          <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="column">
          ชื่อรายการ
          <br>
          รายละเอียด
        </div>
        <div class="column is-2">฿128</div>
        <div class="column is-2">1</div>
      </div>
    </div>
    <button class="button is-info checkout">สั่งซื้อ</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'ShoppingCart',
  components: {

  },
  computed: {
    ...mapState([
      'isCartSidebarOpen'
    ])
  }
};
</script>

<style lang="scss" scoped>
  .shoping-cart {
    background-color: #c4c4c4;
    width: 400px;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 50;
    height: 100vh;

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
  }
</style>
