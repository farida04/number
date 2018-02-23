<template>
  <div class="inscription">
      <img id="logo" src="./../assets/logo.svg" alt="logo number">
      <h1>Créer un compte</h1>

      <form>
          <input class='connect' type="text" name="pseudo" placeholder="pseudo" required>
          <input class='connect' type="text" name="pseudo" placeholder="adresse mail" required>
          <input class='connect' type="password" name="password" placeholder="mot de passe" required>
          <input class='connect' type="password" name="password" placeholder="confirmer mot de passe" required>
          <router-link to='/menu'>
              <input id='btn' type="submit" name="inscription" placeholder="inscription">
         </router-link>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Inscription',
}
</script>


<style scoped>

.inscription {
    margin: 0;
    padding: 0;
    text-align: center;
}

#logo{
    width: 300px;
    height: 300px;
    position: absolute;
    top: 30px;
    left: 80px;
}

form{
    position: absolute;
    top:300px;
    left: 40px;
}

.connect{
     display: block;
     border: none;
     margin: 30px auto;
     width: 70vw;
     border-bottom: 3px solid #44A5A5;
     text-align: center;
     font-size: 1.8em;
 }

 #btn{
     border: none;
     background: none;
     border: 3px solid #E41D1A;
     width: 300px;
     height: 80px;
     background: #44A5A5;
     color: #fff;
     margin: 20px 40px;
     font-size: 1.8em;
     border-radius: 20px;
 }
 #new{
     position: absolute;
     top: 580px;
     left: 110px;
     font-size: 1.8em;
     color: dimGray;
     text-decoration: underline;
 }
</style>
