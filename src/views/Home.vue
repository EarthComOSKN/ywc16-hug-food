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
    <div class="left head-title">
      เมนูตาามฤดูกาล
    </div>
    <div class="columns">
      <carousel :perPage="5">
        <slide v-for="item in listOfScale" :key="item.id">
          <product-card :path="item"/>
        </slide>
      </carousel>
    </div>
    <div class="left head-title">
    บทความและโปรโมชั่น

    </div>
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
  <div class="content has-text-centered head-title">
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
  data() {
    return(
      {
        listOfScale : ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.png","7.jpg","8.jpg","9.jpg","10.jpg"]
      }
    );
  },
  components: {
    Carousel,
    Slide,
    ArticleCard,
    PictureCard,
    ProductCard,
  },
};
</script>

<style>
footer {
  background-color: #ffeeda;
}
</style>

