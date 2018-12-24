<template>
  <div class="article">
    <div class="cover">
      <img src="https://via.placeholder.com/1500x500" alt="">
    </div>
    <div class="columns body">
      <div class="column is-2"></div>
      <div class="column">
        <div class="columns">
          <div class="column">
            <h1 class="title">ซัมติงจิงกะเบล</h1>
            เชื่อว่าตอนนี้หลายๆ คนคงกำลังดูแลสุขภาพให้ฟิต เพื่อที่จะพร้อมไป Countdown ฉลองต้อนรับปี 2562 กันอยู่แน่นอน แต่จะให้ทานอะไรซ้ำๆ เดิมๆ ก็คงเบื่อกันและสุดท้ายก็ไม่อยากทานอาหารสุขภาพอีก แต่วันนี้ไม่ต้องกลัวอ้วนอีกต่อไป! เพราะเราจะมาช่วยทุกคนให้ควบคุม อาหารได้ เพื่อที่จะได้มีหุ่นที่ปังและพร้อมที่จะไปเฉลิมฉลองปีใหม่ได้อย่างสบายใจกัน แถมเป็นอาหารที่
          </div>
          <div class="column is-narrow">share</div>
        </div>
      </div>
      <div class="column is-2"></div>
    </div>
    <div class="suggest">
      <h1 class="title is-5">You may also like</h1>
      article list here later
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Article',
  components: {

  },
};
</script>

<style lang="scss" scoped>
  .article {
    text-align: left;

    .body {
      margin: 2rem 0;

      img {
        margin: 1.5rem 0;
      }
    }

    .suggest {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
</style>
