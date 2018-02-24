<template>
  <div class="container">
      <img id="logo" src="./../assets/logo.svg" alt="logo number">
      <div class="infos">
          <h1>Stats</h1>
          <h2 class="pseudo">username</h2>
          <div id="wins"><p>V</p></div>
          <div id="losses"><p>D</p></div>
          <div id="score"><p>Score PTS</p></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Infos',
}
</script>


<style scoped>

    .container {
        margin: 0;
        padding: 0;
        height: 100vh;
        text-align: center;
        border: 1px solid;
    }

    .pseudo {
        margin-bottom: 5vh;
    }

    #logo {
        margin-left: 8vw;
    }

    #wins, #losses {
        width: 46.9vw;
        height: 20vh;
        border: 1px solid tomato;
        float: left;
    }

    #score {
        width: 95vw;
        height: 20vh;
        border: 1px solid;
        float: left;
    }

    p {
        font-size: 2em;
    }


</style>
