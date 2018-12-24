<template>
  <!-- <div class="card">
      <img src="https://via.placeholder.com/400x219">
      <p class="subtitle left">With even more content</p>
      <p class="title left">Tall tile</p>
  </div> -->
  <div class="column">
    <div class="">
        <router-link to="/article">
        <img :src="'./picture/'+product.path" class="img-card" style="object-fit: cover;">
        </router-link>
    </div>
    <div class="card-content">
        <div class="media">
        <div class="media-content">
            <p class="subtitle is-6 atitle">{{product.title}}</p>
            <p class="title is-4 aname">{{product.name}}</p>
        </div>
        </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: ['product'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.small {
    width: 300px;
    height: 200px;
}
.atitle {
  font-size: 17px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #7f7f7f;
}
.aname {
  font-size: 27px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #212121;
}
</style>
