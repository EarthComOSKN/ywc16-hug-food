<template>
  <div class="checkout">
    <div class="navbar-bg"></div>
    
    <section class="stepbar">
      <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">1) รายการ</a></li>
          <li :class="{ 'is-active': step < 2}"><a href="#">2) การชำระเงิน</a></li>
          <li :class="{ 'is-active': step < 3}"><a href="#">3) ยืนยัน</a></li>
        </ul>
      </nav>
    </section>
    
    <!-- step 1 -->
    <div v-if="step === 1">
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-content">
            <div class="columns">
              <div class="column">รายการ</div>
              <div class="column is-2">ราคา</div>
              <div class="column is-2">จำนวน</div>
            </div>
            </div>
          </div>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">อาหารสด</p>
            </header>
            <div class="card-content">
              <div class="columns">
                <div class="column is-3">
                  <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div class="column">
                  <strong>ชื่อรายการ</strong>
                  <br>
                  รายละเอียด
                </div>
                <div class="column is-2">฿128</div>
                <div class="column is-2">1</div>
              </div>
            </div>
          </div>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">อาหารแห้ง</p>
            </header>
            <div class="card-content">
              <div class="columns">
                <div class="column is-3">
                  <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div class="column">
                  <strong>ชื่อรายการ</strong>
                  <br>
                  รายละเอียด
                </div>
                <div class="column is-2">฿128</div>
                <div class="column is-2">1</div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-5">
          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column">ราคา</div>
                <div class="column is-3">฿ 888</div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field>
                    <b-input type="text" placeholder="โค้ดส่วนลด"></b-input>
                  </b-field>
                </div>
                <div class="column is-narrow">
                  <button class="button is-info">ตกลง</button>
                </div>
              </div>
              <div class="columns">
                <div class="column">ส่วนลด</div>
                <div class="column is-3">฿ 0</div>
              </div>
              <div class="divider"></div>
              <div class="columns">
                <div class="column"><strong>รวมทั้งหมด</strong></div>
                <div class="column is-3"><strong>฿ 888</strong></div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column">
                  <b-field label="ชื่อ">
                    <b-input type="text" placeholder=""></b-input>
                  </b-field>
                </div>
                <div class="column is-narrow">
                  <b-field label="หมายเลขโทรศัพท์">
                    <b-input type="text" placeholder=""></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="ที่อยู่">
                    <b-input type="text" placeholder=""></b-input>
                  </b-field>
                </div>
                <div class="column is-narrow">
                  <b-field label="อำเภอ">
                    <b-input type="text" placeholder=""></b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="จังหวัด">
                    <b-input type="text" placeholder=""></b-input>
                  </b-field>
                </div>
                <div class="column is-narrow">
                  <b-field label="รหัสไปรษณีย์">
                    <b-input type="text" placeholder=""></b-input>
                  </b-field>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="stepbtn">
        <button class="button">กลับ</button>
        <button class="button is-info" @click="step += 1">สั่งซื้อ</button>
      </div>
    </div><!-- end of step 1 -->

    <!-- step 2 -->
    <div v-if="step === 2">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-5">
          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column">ราคา</div>
                <div class="column is-3">฿ 888</div>
              </div>
              <div class="columns">
                <div class="column">ค่าจัดส่ง</div>
                <div class="column is-3">฿ 888</div>
              </div>
              <div class="columns">
                <div class="column">ค่าบริการ</div>
                <div class="column is-3">฿ 888</div>
              </div>
              <div class="divider"></div>
              <div class="columns">
                <div class="column"><strong>ยอดรวม</strong></div>
                <div class="column is-3"><strong>฿ 888</strong></div>
              </div>
            </div>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                การชำระเงิน
              </p>
              <a href="#" class="card-header-icon">
                เลือกการชำระเงิน
              </a>
            </header>
          </div>
        </div>
        <div class="column"></div>
      </div>

      <div class="stepbtn">
        <button class="button" @click="step -= 1">กลับ</button>
        <button class="button is-info" @click="step += 1">ยืนยันการสั่งซื้อ</button>
      </div>
    </div><!-- end of step 2 -->

    <!-- step 3 -->
    <div v-if="step === 3">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-5">
          <b-notification type="is-success" style="margin: 2rem;">
            ออเดอร์ของท่านเข้าสู่ระบบเรียบร้อยแล้ว !
          </b-notification>

          <div class="card">
            <div class="card-content">
              <h1 class="title is-5">ใบเสร็จชำระเงิน</h1>
              <div class="columns">
                <div class="column">ราคา</div>
                <div class="column is-3">฿ 888</div>
              </div>
              <div class="columns">
                <div class="column">ค่าส่ง</div>
                <div class="column is-3">฿ 888</div>
              </div>
              <div class="columns">
                <div class="column">ค่าบริการ</div>
                <div class="column is-3">฿ 888</div>
              </div>
              <div class="divider"></div>
              <div class="columns">
                <div class="column"><strong>ค่าบริการ</strong></div>
                <div class="column is-3"><strong>฿ 888</strong></div>
              </div>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>

      <div class="stepbtn">
        <button class="button" @click="step -= 1">กลับ</button>
        <button class="button is-info" @click="step += 1">ยืนยันการสั่งซื้อ</button>
      </div>
    </div><!-- end of step 3 -->

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Checkout',
  data() {
    return {
      step: 1
    }
  },
};
</script>

<style lang="scss" scoped>
  .checkout {
    .stepbar {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }

    .card {
      margin: 2rem;
      text-align: left;
    }

    .stepbtn {
      button {
        margin: 0 0.5rem;
      }
    }
  }

  .divider {
    width: 100%;
    background-color: lightgray;
    height: 1px;
    margin-bottom: 1rem;
  }
</style>
