<template>
  <div class="home">
    <div style="position: relative; margin-bottom: 2rem">
      <img src="https://via.placeholder.com/2000x600">
      <div style="position: absolute; left: 3rem; top: 50%; text-align: left;">
        <div class="title is-1 head-title" style="color: white">ร้านค้า</div>
        <div class="subtitle is-3 head-title" style="color: white">เลือกซื้ออาหารแปรรูปจากคนท้องถิ่น</div>
      </div>
    </div>
    <div class="container">
      <div class="head-title" style="text-align: left;">
        ได้รับความนิยม
      </div>
      <div class="columns">
        <carousel :perPage="5">
          <slide v-for="item in listOfScale" :key="item.id">
            <product-card :path="item" />
          </slide>
        </carousel>
      </div>
      <div class="columns">
        <article-card />
        <article-card />
        <article-card />
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
      return ({
        listOfScale: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.png", "7.jpg", "8.jpg",
          "9.jpg", "10.jpg"
        ]
      });
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
