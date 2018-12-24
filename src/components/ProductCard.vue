<template>
  <div class="column">
    <div class="productcard">
        <router-link to="/productmalldetail">
        <img src="https://via.placeholder.com/250x250" class="img-card" >
        </router-link>
        <div class="text top-left">
            <img src="https://via.placeholder.com/50x50" class="img-avatar">
           ยายแป๋มตอแหล
        </div>
        
    </div>
     <div class="card-content">
        <div class="media">
        <div class="media-content">
            <p class="subtitle is-6">125 ml</p>
            <p class="title is-4">5 บาท</p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
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
