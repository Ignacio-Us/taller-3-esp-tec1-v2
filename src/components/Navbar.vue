<template>
    <nav class="navbar navbar-expand-lg shadow-lg bg-custom">
        <div class="col-md-3 p-2 ml-1">
            <RouterLink to="/login" v-if="!showPlayerOne" class="btn btn-light fs-5 font-custom">Iniciar Player 1</RouterLink>

            
            <!--Player 1-->
            <h5 v-if="showPlayerOne" class="text-white">Jugador 1</h5>
        </div>

        <!--Paginas-->
        <div class="col-md-6 text-center">
            <RouterLink to="/" class="btn fs-4 text-white font-custom">Home</RouterLink>
            <RouterLink to="/selection" class="btn fs-4 text-white font-custom">Game</RouterLink>
            <RouterLink to="/score" class="btn fs-4 text-white  font-custom">Scores</RouterLink>
        </div>
        <div class="col-md-2 p-2 ml-2">
            <RouterLink  to= "/login2" v-if="!showPlayerTwo" class="btn btn-light fs-5 font-custom">Iniciar Player 2</RouterLink>
            
            <!--Player 2-->
            <h5 v-if="showPlayerTwo" class="text-white">Jugador 2</h5>
        </div>
    </nav>
</template>

<style scoped>
.bg-custom {
    background-color: #1E5128;
}

.ml-1 {
    margin-left: 12px;
}

.ml-2{
    margin-left: 5%;
}

.popover {
    position: absolute;
    border: 2px solid white;
    margin: 15px 25px;
    z-index: 999;
    border-radius: 10px;
}

</style>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showPlayerOne = ref(false);
const showPlayerTwo = ref(false);
</script>