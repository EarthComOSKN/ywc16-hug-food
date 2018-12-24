<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="/picture/hugfood-logo.svg" width="112" height="100%">
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-end">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">หน้าแรก</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/mall">ร้านค้า</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/restaurant">เฟรช</router-link>
          </a>
          <a class="navbar-item">
            <span @click="toggleCartSideBar()">ตะกร้า</span>
          </a>
          <div class="spacer"></div>
          <a class="navbar-item">
            <img class="avatar" src="/picture/jixiao-huang-672681-unsplash.jpg" alt="">
            <strong>สวัสดี</strong>, มนีรัตน์
          </a>
          <a class="navbar-item" @click="toggleCartSideBar()">
            <img class="cart" src="/picture/online-shopping-cart.svg" alt="">
          </a>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
  import {
    mapActions
  } from 'vuex'

  export default {
    name: 'NavBar',
    methods: {
      ...mapActions([
        'toggleCartSideBar'
      ])
    },
  };

</script>

<style lang="scss" scoped>
  .navbar {
    background: none;
    position: absolute;
    top: 0;
    padding: 1rem 2rem;
    width: 100vw;

    a {
      color: white;
      &:hover {
        color: black;
      }
    }

    .spacer {
      width: 20px;
    }

    .avatar {
      border-radius: 50%;
      margin-right: .5rem;
      object-fit: cover;
      width: 28px;
      height: 28px;
    }

    .cart {
      transform: scale(0.8)
    }
  }

</style>
