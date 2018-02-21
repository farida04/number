<template>
     <div id="index">
         <header>
             <img id='logo' src="./../assets/logo.svg">
             <img id='menu' src="./../assets/menu.svg">
             <hr>
         </header>
         <article >
             <router-link to='/duel'>
                 <button class='type2' type="button">Nouvelle Partie</button>
             </router-link>
             <router-link to=''>
                 <button type="button">Mes Stats</button>
             </router-link>
             <router-link to=''>
                 <button class='type2' type="button">Utilisateurs Connectés</button>
             </router-link>
             <router-link to=''>
                 <button type="button">Tchat</button>
             </router-link>
         </article>
     </div>
</template>

<script>
export default{
    name: 'Menu',
}
</script>

<style scoped>
#menu{
    position: absolute;
    width: 60px;
    height: 60px;
    right: 20px;
    top: 22px;
}
#logo{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
}

hr{
    height: 10px;
    background: #44A5A5;
    color: #44A5A5;
    position: relative;
    top: 80px;
}
button{
    display: block;
    background: #44A5A5;
    margin: 20px;
    font-size: 2em;
    width: 80vw;
    height: 80px;
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
}

.type2{
    background: #E41D1A;
}

article{
    position: absolute;
    top: 150px;
}
</style>
