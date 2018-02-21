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
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>0</td>
                    <td>-</td>
                    <td>C</td>
                </tr>
            </table>
        </article>
        <article>
            <div class="resultat"></div>
        </article>
    </div>

</template>

<script>
export default {
    name: 'Duel',
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
    left: 90px;
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
</style>
