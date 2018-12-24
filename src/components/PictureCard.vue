<template>
  <div class="column">
    <div class="container">
        <img src="https://via.placeholder.com/2000x410" class="img-card">
        <div class="text centered head-title">
           <p>ยายแป๋มตอแหล</p> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureCard'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.small {
    width: 300px;
    height: 200px;
}
.centered {
    position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
}
.img-card {

  border-radius: 10px;
  box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.11);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
</style>
