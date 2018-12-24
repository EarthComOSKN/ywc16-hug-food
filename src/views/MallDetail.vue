<template>
  <div class="mall-detail">
    <div class="navbar-bg"></div>
      <div class="columns">
        <div class="column" style="background-color : rgba(100,100,100,0.1); height :calc(100vh - 4rem - 28px); padding:70px 50px 0px 50px;">
          <carousel class="is-hidden-touch" :perPage="1" :navigationEnabled="true">
            <slide>
            <img src="https://via.placeholder.com/800x800">
            </slide>
            <slide>
              <img src="https://via.placeholder.com/800x800">
            </slide>
            <slide>
              <img src="https://via.placeholder.com/800x800">
            </slide>
          </carousel>
        </div>
        <div class="column">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notifications" style="height:90vh; padding-top:20vh;">
                <div class="content left">
                  <p class="title">Tall tile</p>
                  <p class="subtitle">With even more content</p>
                  <div class="columns" style="margin: 1rem 0;">
                    <div class="column is-narrow">
                      <img src="../../public/picture/avatar1.jpg" class="img-avatar">
                    </div>
                    <div class="column">
                      <p style="margin-top: 1rem;">ยายแป๋มตอแหล</p>
                    </div>
                  </div>
                  <div class="is-divider" data-content=""></div>
                  <div class="content">
                    <div class="level">
                      <div class="level-left">
                        <h1 class="title" style="color: #e38415">25 THB</h1>
                      </div>
                      <div class="level-right">
                        <button class="button is-primary" @click="addToCart()" style="background-color: #e38415">+ เพิ่มในตะกร้า</button>
                      </div>
                    </div>
                    <div>
                      กล้วยฉาบทอดสูตรโบราณ By คุณยายแย้ม วัตถุดิบพื้นบ้านแต่รสชาติไม่บ้าน
                      <br></br>
                       เมนูกล้วยฉาบทอดสูตรโบราณของคุณยายแย้ม ได้คัดสรรวัตถุดิบพื้นบ้านมาประกอบอาหารให้มีรสชาติที่อร่อยและไม่ธรรมดา “กล้วย” ต้องเป็นกล้วยหอมเพราะเมื่อกล้วยโดนความร้อนจะทำให้ยิ่งหอมหวานและเพิ่มอรรถรสในการรับประทานมากขึ้น

                    </div>
                    <!-- Content -->
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel, Slide } from 'vue-carousel';


export default {
  name: 'ProductMallDetail',
  components: {
    Carousel,
    Slide
  },
  methods: {
    addToCart() {
      this.$toast.open({
        message: 'เพิ่มลงตะกล้า',
        type: 'is-success'
      })
    }
  }
};
</script>

<style>
.left {
  text-align: left;
}
</style>
