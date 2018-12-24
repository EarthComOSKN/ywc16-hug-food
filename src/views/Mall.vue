<template>
  <div class="home">
    <div style="position: relative; margin-bottom: 2rem">
      <img src="../../public/picture/h2.jpg">
      <div style="position: absolute; left: 3rem; top: 50%; text-align: left;">
        <div class="title is-1 head-title" style="color: white">ร้านค้า</div>
        <div class="subtitle is-3 head-title" style="color: white">เลือกซื้ออาหารแปรรูปจากคนท้องถิ่น</div>
      </div>
    </div>
    <div class="container">
        <div class="columns" >
          <div v-for="item in listOfArticle" :key="item.id">
        <article-card :path="item" />      
      </div>
        </div>
      <div class="container">
        <div class="head-title" style="text-align: left;">
          ได้รับความนิยม
        </div>
        <div class="columns">
          <carousel :perPage="5">
            <slide v-for="item in listOfScale" :key="item.id">
              <product-card :product="item"/>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {
    Carousel,
    Slide
  } from 'vue-carousel';
  import ArticleCard from '@/components/ArticleCard.vue';
  import PictureCard from '@/components/PictureCard.vue';
  import ProductCard from '@/components/ProductCard.vue';


export default {
  name: 'Mall',
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
  .buttom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }

</style>
