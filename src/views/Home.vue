<template>
  <div class="home">
    
  <img src="../../public/picture/h1.jpg">
  <div class="container">
    <div class="columns" style="margin-top: -100px;">
      <div v-for="item in listOfArticle" :key="item.id">
        <article-card :path="item" />      
      </div>

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
          <product-card :product="item"/>
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
      <div v-for="item in listOfArticle" :key="item.id">
        <article-card :path="item" />      
      </div>
    </div>
  </div>



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
        listOfScale : [{ path:"1.jpg",name: "test",price: 25},{ path:"2.jpg",name: "test",price: 25},{ path:"3.jpg",name: "test",price: 25},{ path:"4.jpg",name: "test",price: 25},{ path:"5.jpg",name: "test",price: 25},{ path:"6.png",name: "test",price: 25},{ path:"7.jpg",name: "test",price: 25},{ path:"8.jpg",name: "test",price: 25},{ path:"9.jpg",name: "test",price: 25},{ path:"10.jpg",name: "test",price: 25}],
        listOfArticle: ["a1.png","a2.png","a3.png"],
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

