<template>
  <div class="home">
    
  <img src="https://via.placeholder.com/2000x600">
  <div class="container">
    <div class="columns" style="margin-top: -100px;">
      <article-card/>
      <article-card/>
      <article-card/>
    </div>
    <div class="columns">
      <picture-card/>
    </div>
    <div class="left">
      เมนูตาามฤดูกาล
    </div>
    <div class="columns">
      <carousel :perPage="5">
        <slide class="column">
            <product-card/>
        </slide>
        <slide class="column">
            <product-card/>
        </slide>
        <slide  class="column">
            <product-card/>
        </slide>
        <slide  class="column">
            <product-card/>
        </slide>
        <slide  class="column">
            <product-card/>
        </slide>
      </carousel>
    </div>
    บทความและโปรโมชั่น
    <div class="columns">
      <picture-card/>
    </div>
    <div class="columns">
      <article-card/>
      <article-card/>
      <article-card/>
    </div>
  </div>
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      เปลี่ยนรอยยิ้มเป็นความสุข
    </p>
  </div>
</footer>


  </div>
</template>
<script type="text/javascript" src="/node_modules/bulma-extensions/bulma-carousel/dist/bulma-carousel.min.js"></script>
<script>
// @ is an alias to /src
import { Carousel, Slide } from 'vue-carousel';
import ArticleCard from '@/components/ArticleCard.vue';
import PictureCard from '@/components/PictureCard.vue';
import ProductCard from '@/components/ProductCard.vue';
export default {
  name: 'home',
  components: {
    Carousel,
    Slide,
    ArticleCard,
    PictureCard,
    ProductCard,
  },
};
</script>
