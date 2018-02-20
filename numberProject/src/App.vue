<template>
  <div id="app">
    <img src="./assets/menu.svg">
    <hr id="hr">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
img{
    height: 10vh;
    width: 10vw;
    position: absolute;
    right: 10px;
}
#hr{
position: relative;
top: 80px;
height: 5px;
background: #44A5A5;
}
</style>
