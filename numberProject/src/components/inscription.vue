<template>
  <div class="inscription">
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

</style>
