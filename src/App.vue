<template>
  <div id="app">
    <nav-bar />
    <ShoppingCart />  
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
  components: {
    NavBar,
    ShoppingCart
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: 'THSarabunNew';
    src: url('../public/font/thsarabunnew-webfont.eot');
    src: url('../public/font/thsarabunnew-webfont.eot?#iefix') format('embedded-opentype'),
         url('../public/font/thsarabunnew-webfont.woff') format('woff'),
         url('../public/font/thsarabunnew-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'THSarabunNew';
    src: url('../public/font/thsarabunnew_bolditalic-webfont.eot');
    src: url('../public/font/thsarabunnew_bolditalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('../public/font/thsarabunnew_bolditalic-webfont.woff') format('woff'),
         url('../public/font/thsarabunnew_bolditalic-webfont.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;

}

@font-face {
    font-family: 'THSarabunNew';
    src: url('../public/font/thsarabunnew_italic-webfont.eot');
    src: url('../public/font/thsarabunnew_italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('../public/font/thsarabunnew_italic-webfont.woff') format('woff'),
         url('../public/font/thsarabunnew_italic-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;

}

@font-face {
    font-family: 'THSarabunNew';
    src: url('../public/font/thsarabunnew_bold-webfont.eot');
    src: url('../public/font/thsarabunnew_bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('../public/font/thsarabunnew_bold-webfont.woff') format('woff'),
         url('../public/font/thsarabunnew_bold-webfont.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;

}


#app {
  font-family: 'THSarabunNew', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
