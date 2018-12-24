<template>
  <div class="column">
    <div class="productcard">
        <router-link to="/productmalldetail">
        <img :src="'./picture/'+product.path" class="img-card"  style="width:250px; height:250px;object-fit: cover;">
        </router-link>
        <div class="text top-left">
            <img src="../../public/picture/avatar1.jpg" class="img-avatar">
           <span style="color:#ffb661;">&nbsp โดย &nbsp</span><span>ลุงเสม สุราษฐานี</span>
        </div>
        
    </div>
     <div class="card-content">
        <div class="media">
        <div class="media-content">
            <p class="subtitle is-6 pdname">{{product.name}}</p>
            <p class="title is-4 pdprice">{{product.price}} THB</p>
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
.pdname {

  font-size: 17px  !important;
  color: #291d27  !important;
}
.pdprice {

  font-size: 31px  !important;
  font-weight: bold  !important;

  color: #e38415 !important;
}
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
    width: 50px;
    height: 50px;
    object-fit: cover;
}

</style>
