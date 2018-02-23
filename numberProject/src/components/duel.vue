<template>
    <div class="duel">
        <header>
            <img id='logo' src="./../assets/logo.svg">
            <img id='menu' src="./../assets/menu.svg">
            <hr>
        </header>
        <article>
            <div class="calcul"></div>
        </article>
        <article>
            <table>
                <tr>
                    <td @click='afficher'>1</td>
                    <td @click='afficher'>2</td>
                    <td @click='afficher'>3</td>
                    <td @click='afficher'>4</td>
                </tr>
                <tr>
                    <td @click='afficher'>5</td>
                    <td @click='afficher'>6</td>
                    <td @click='afficher'>7</td>
                    <td @click='afficher'>8</td>
                </tr>
                <tr>
                    <td @click='afficher'>9</td>
                    <td @click='afficher'>0</td>
                    <td @click='afficher'>-</td>
                    <td @click='afficher'>C</td>
                </tr>
            </table>
        </article>
        <article>
            <div class="resultat" v-text='resultat | afficher'></div>
            <img id='play' src="./../assets/play.svg">
        </article>
    </div>

</template>

<script>
export default {
    name: 'Duel',
    data: {
        resultat: '',
    },
    methods: {
        // afficher: function(e){
        //     this.resultat = 0 ;
        // }
    }
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

table{
    position: absolute;
    top: 280px;
    left: 30px;
}

td{
    border: 3px solid #44A5A5;
    height: 60px;
    width: 60px;
    text-align: center;
    border-radius: 10px;
    color: #E41D1A;
    font-size: 2em;
}

.calcul{
    width: 70vw;
    height: 100px;
    background: black;
    border-radius: 20px;
    position: absolute;
    top: 150px;
    left: 50px;
}

.resultat{
    width: 70vw;
    height: 100px;
    background: lightblue;
    border-radius: 20px;
    position: absolute;
    top: 550px;
    left: 50px;
}
#play{
    width: 80px;
    height: 80px;
    position: absolute;
    top: 560px;
    right: 60px;
}
</style>
