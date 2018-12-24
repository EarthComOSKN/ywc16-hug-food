<template>
  <div class="home">
    
  <img src="../../public/picture/h1.jpg">
  <div class="container">
    <div class="columns" style="margin-top: -80px; display:flex; justify-content: center;">
      <div v-for="item in listOfArticle" :key="item.id">
        <article-card :product="item" />      
      </div>
    </div>
    <div class="columns" style="display:flex; justify-content: center;">
      <picture-card name="bb.jpg"/>
    </div>
    <div class="left head-title is-hidden-touch">
      เมนูตามฤดูกาล
    </div>
    <div class="columns">
      <carousel class="is-hidden-touch" :perPage="5" :navigationEnabled="true">
        <slide v-for="item in listOfScale" :key="item.id">
          <product-card :product="item"/>
        </slide>
      </carousel>
    </div>
    <div class="left head-title">
    บทความและโปรโมชั่น

    </div>
    <div class="columns">
      <picture-card name="bb2.jpg"/>
    </div>
    <div class="columns"  style="display:flex; justify-content: center;">
      <div v-for="item in listOfArticle" :key="item.id">
        <article-card :product="item" />      
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
        listOfScale : [{ path:"1.jpg",name: "น้ำพริกปลาทู",price: 40},{ path:"2.jpg",name: "กล้วยฉาบ",price: 25},{ path:"3.jpg",name: "กล้วยตาก",price: 25},{ path:"4.jpg",name: "ข้าวต้มมัด",price: 25},{ path:"5.jpg",name: "น้ำพริกปลาแห้ง",price: 25},{ path:"6.png",name: "น้ำพริกอ่อง",price: 25},{ path:"7.jpg",name: "น้ำพริกหนุ่ม",price: 25},{ path:"8.jpg",name: "ขนมจาก",price: 25},{ path:"9.jpg",name: "กาละแม โบราณ",price: 25},{ path:"10.jpg",name: "ปลาร้าบอง",price: 25}],
        listOfArticle: [{ path:"a1.png",name:"5 อาหารอีสาน รสชาติแบบต้นตำรับ",title:"อาหาร"},{ path:"kapi.jpg",name:"เพราะอาหารทำให้ฉันได้เปิดโลก",title:"สุขภาพ"},{ path:"a3.png",name:"ใครว่าคุณตาทำอาหารไม่เป็น",title:"สร้างแรงบันดาลใจ"}],
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
  background-color: rgba(200,200,200,0.3);
}
</style>

