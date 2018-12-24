<template>
  <div class="home" >
    <div  style="position: relative;">
      <img src="https://via.placeholder.com/2000x600">
      <div class="bottom-left title head-title" style="font-size:59px">
        Hugfood เฟรช
      </div>

    </div>
      <div class="subtitle  bottom-left head-title" style="font-size:29px">
        เลือกซื้ออาหารแปรรูปจากคนท้องถิ่น
      </div>
        <div class="columns" >
          <article-card/>
          <article-card/>
          <article-card/>
        </div>
      <div class="container">
        <div class="head-title">
          ได้รับความนิยม
        </div>
        <div class="columns">
          <carousel :perPage="5">
            <slide v-for="item in listOfScale" :key="item.id">
              <product-card :path="item"/>
            </slide>
          </carousel>
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
  name: 'Mall',
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
.buttom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}
</style>
