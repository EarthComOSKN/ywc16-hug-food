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
                      <img src="https://via.placeholder.com/50x50" class="img-avatar">
                    </div>
                    <div class="column">
                      <p style="margin-top: 1rem;">ยายแป๋มตอแหล</p>
                    </div>
                  </div>
                  <div class="is-divider" data-content=""></div>
                  <div class="content">
                    <div class="level">
                      <div class="level-left">
                        <h1 class="title" style="color: #e38415">59THB</h1>
                      </div>
                      <div class="level-right">
                        <button class="button is-primary" @click="addToCart()" style="background-color: #e38415">+ เพิ่มในตะกร้า</button>
                      </div>
                    </div>
                    <div>
                      ย่อหน้าต่าง
                      ห่วยสโตร์เยอบีร่า คอปเตอร์ เฟรมมอลล์เด้อ ปาร์ตี้สกรัม ไลน์ชาร์ปต่อยอดโชห่วย มอลล์ตังค์ล็อบบี้แยมโรล แฟลชโปรโมชั่นสคริปต์ตาปรือ แชมเปญมัฟฟินทัวร์นาเมนท์รามาธิบดี ทาวน์แยมโรล โซลาร์ แมนชั่นคูลเลอร์บุญคุณ คาร์ อพาร์ตเมนต์โบว์ลิ่ง วิภัชภาคแทคติคเทรนด์บูติก นางแบบว่ะบ๊อกซ์ ธรรมาภิบาล

                      เดชานุภาพริคเตอร์ตนเองลาเต้ แซ็กมาร์ตคีตราชันคันธาระซูเปอร์ เจ๊าะแจ๊ะสะเด่าออทิสติก คอปเตอร์เย้ว ออเดอร์หลวงพี่แอปพริคอท มอคค่าง่าวเนอะทาวน์เฮาส์โฮป แพกเกจโปรดักชั่นแมคเคอเรลอัลไซเมอร์ ไอซียูมาม่าสไตรค์ เวิร์ลด์แพตเทิร์นคีตราชันไฮเอนด์ แบล็กแอพพริคอทสุริยยาตร์ไอติมพีเรียด พาร์ตเนอร์ ธรรมาพาสเจอร์ไรส์แจมนิว จิ๊กแคร็กเกอร์อ่อนด้อย แทกติคไฮไลท์ โมเต็ลลอร์ดบลูเบอร์รีภควัมบดีเดบิต ฟาสต์ฟู้ดแพกเกจเอ็นทรานซ์เมจิก

                      รายชื่อมิลค์ ตุ๊กตุ๊กวาไรตี้ โอเลี้ยงคอนโดมิเนียม ออร์แกน สแล็ก ซูม อพาร์ตเมนท์แหม็บแรลลีติ่มซำเซอร์ โฟมแช่แข็ง เลสเบี้ยน เสกสรรค์ ธรรมาเยอบีราไฮบริดนอมินี ธัมโมฟอยล์ไคลแม็กซ์ หลวงตาจัมโบ้ดีลเลอร์รีสอร์ตคาปูชิโน ยังไงวานิลลาภควัมปติโปรดิวเซอร์ซากุระ เช็งเม้ง แคมเปญดีพาร์ตเมนต์รีสอร์ตสหรัฐ
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
