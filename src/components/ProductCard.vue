<template>
  <div class="column">
    <div class="productcard">
        <router-link to="/productmalldetail">
        <img :src="'./picture/'+product.path" class="img-card"  style="width:250px; height:250px;">
        </router-link>
        <div class="text top-left">
            <img src="https://via.placeholder.com/50x50" class="img-avatar">
           <span style="color:#ffb661;">&nbsp โดย &nbsp</span><span>ลุงเสม สุราษฐานี</span>
        </div>
        
    </div>
     <div class="card-content">
        <div class="media">
        <div class="media-content">
            <p class="subtitle is-6">{{product.name}}</p>
            <p class="title is-4">{{product.price}}</p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

.top-left {
  position: absolute;
  top: 8px;
  left: 0px;
}
.productcard {
      position: relative;
  text-align: center;
  color: white;
}
.img-avatar {
    border-radius: 50%;
}

</style>
