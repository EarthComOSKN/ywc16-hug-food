<template>
  <div class="home" >
    <div  style="position: relative;">
      <img src="../../public/picture/h3.jpg">
      <div class="bottom-left title head-title" style="font-size:59px">
        ร้านค้า
      </div>

    </div>
      <div class="subtitle  bottom-left head-title" style="font-size:29px">
        เลือกซื้ออาหารแปรรูปจากคนท้องถิ่น
      </div>
      <div class="container">
        <div class="head-title">
          ได้รับความนิยม
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
        <div class="columns" >
          <div v-for="item in listOfArticle" :key="item.id">
        <article-card :path="item" />      
      </div>
        </div>

      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel, Slide } from 'vue-carousel';
import ArticleCard from '@/components/ArticleCard.vue';
import PictureCard from '@/components/PictureCard.vue';
import ProductCard from '@/components/ProductCard.vue';


export default {
  name: 'Restaurant',
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
