<template>
  <div class="home">
    <div style="position: relative; margin-bottom: 2rem">
      <img src="../../public/picture/h3.jpg">
      <div style="position: absolute; left: 3rem; top: 50%; text-align: left;">
        <div class="title is-1 head-title" style="color: white">Hugfood เฟรช</div>
        <div class="subtitle is-3 head-title" style="color: white">เลือกซื้ออาหารแปรรูปจากคนท้องถิ่น</div>
      </div>
    </div>
    <div class="container">
      <div class="container">
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
        <article-card :product="item" />      
      </div>
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
  name: 'Restaurant',
  data() {
    return(
      {
        listOfScale : [{ path:"1.jpg",name: "น้ำพริกปลาทู",price: 40},{ path:"2.jpg",name: "กล้วยฉาบ",price: 25},{ path:"3.jpg",name: "กล้วยตาก",price: 25},{ path:"4.jpg",name: "ข้าวต้มมัด",price: 25},{ path:"5.jpg",name: "น้ำพริกปลาแห้ง",price: 25},{ path:"6.png",name: "น้ำพริกอ่อง",price: 25},{ path:"7.jpg",name: "น้ำพริกหนุ่ม",price: 25},{ path:"8.jpg",name: "ขนมจาก",price: 25},{ path:"9.jpg",name: "กาละแม โบราณ",price: 25},{ path:"10.jpg",name: "ปลาร้าบอง",price: 25}],
        listOfArticle: [{ path:"a1.png",name:"5 อาหารอีสาน รสชาติแบบต้นตำรับ",title:"อาหาร"},{ path:"a2.png",name:"เพราะอาหารทำให้ฉันได้เปิดโลก",title:"สุขภาพ"},{ path:"a3.png",name:"ใครว่าคุณตาทำอาหารไม่เป็น",title:"สร้างแรงบันดาลใจ"}],
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
