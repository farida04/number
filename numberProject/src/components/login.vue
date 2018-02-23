<template>
  <div class="login">
      <img id='logo' src="./../assets/numbers.svg" alt="">
      <form>
          <input class='connect' type="text" name="pseudo" placeholder="pseudo" required>
          <input class='connect' type="password" name="password" placeholder="mot de passe" required>
          <router-link to='/menu'>
              <input id='btn' type="submit" name="connexion" placeholder="connexion">
         </router-link>
      </form>
      <p id="new">Nouvel Utilisateur</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>


<style scoped>

#logo{
    width: 280px;
    height: 280px;
    position: absolute;
    top: 10px;
    left: 30px;
}

form{
    position: absolute;
    top:280px;
}

.connect{
     display: block;
     border: none;
     margin: 30px ;
     width: 70vw;
     border-bottom: 3px solid #44A5A5;
     text-align: center;
     font-size: 2em;
 }

 #btn{
     border: none;
     background: none;
     border: 3px solid #E41D1A;
     width: 300px;
     height: 80px;
     background: #44A5A5;
     color: #fff;
     margin: 20px 15px;
     font-size: 2em;
     border-radius: 20px;
 }
 #new{
     position: absolute;
     top: 580px;
     left: 70px;
     font-size: 1.8em;
     color: dimGray;
     text-decoration: underline;
 }
</style>
