<template>
    <nav class="navbar navbar-expand-lg shadow-lg bg-custom">
        <div class="col-md-3 p-2 ml-1">
            <RouterLink to="/login" v-if="!showPlayerOne" class="btn btn-light fs-5 font-custom">Iniciar Player 1
            </RouterLink>

            <!--Player 1-->
            <button @click="showPopover = !showPopover" class="bg-custom user">
                <h5 v-if="showPlayerOne" class="text-white font-custom fs-3">{{ showPlayerOne.nombre }}</h5>
            </button>

            <div v-if="showPopover" class="shadow-lg popover">
                <div class="text-white p-4 bg-custom rounded-3">
                    <p class="text-center">
                        <RouterLink to="/modify-account" @click="saveId(showPlayerOne.id)" class="btn fw-bold rounded-5"
                            id="btn-option">Modificar
                            perfil</RouterLink>
                    </p>
                    <p class="text-center">
                        <button @click="closeSession('usuarioLogeado')" class="btn fw-bold rounded-5"
                            id="btn-option">Cerrar Sesión</button>
                    </p>
                </div>
            </div>
        </div>

        <!--Paginas-->
        <div class="col-md-6 text-center">
            <RouterLink to="/" class="btn fs-4 text-white font-custom">Home</RouterLink>
            <RouterLink to="/selection" class="btn fs-4 text-white font-custom">Game</RouterLink>
            <RouterLink to="/score" class="btn fs-4 text-white  font-custom">Scores</RouterLink>
        </div>
        <div class="col-md-2 p-2 ml-2">
            <RouterLink to="/login2" v-if="!showPlayerTwo" class="btn btn-light fs-5 font-custom">Iniciar Player 2
            </RouterLink>

            <!--Player 2-->
            <button @click="showPopover2 = !showPopover2" class="bg-custom user">
                <h5 v-if="showPlayerTwo" class="text-white font-custom fs-3">{{ showPlayerTwo.nombre }}</h5>
            </button>

            <div v-if="showPopover2" class="shadow-lg popover">
                <div class="text-white p-4 bg-custom rounded-3">
                    <p class="text-center">
                        <RouterLink to="/modify-account" @click="saveId(showPlayerTwo.id)" class="btn fw-bold rounded-5"
                            id="btn-option">Modificar
                            perfil</RouterLink>
                    </p>
                    <p class="text-center">
                        <button @click="closeSession('usuario2Logeado')" class="btn fw-bold rounded-5"
                            id="btn-option">Cerrar Sesión</button>
                    </p>
                </div>
            </div>
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

.ml-2 {
    margin-left: 5%;
}

.popover {
    position: absolute;
    border: 2px solid white;
    margin: 15px 25px;
    z-index: 999;
    border-radius: 10px;
}

.user {
    border: none
}

#btn-option {
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
}

#btn-option:hover {
    color: black;
    width: 100%;
    height: 100%;
}
</style>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showPlayerOne = JSON.parse(sessionStorage.getItem('usuarioLogeado'));
const showPlayerTwo = JSON.parse(sessionStorage.getItem('usuario2Logeado'));

const showPopover = ref(false);
const showPopover2 = ref(false);

const closeSession = (key) => {
    sessionStorage.removeItem(key);
    window.location.reload();
}

const saveId = (id) => {
    sessionStorage.setItem("idUserToModify", id);
}


if (showPlayerOne) {
    try {
        const response1 = await axios.get(`http://localhost:8081/api/usuarios/${showPlayerOne.id}`);
        showPlayerOne.nombre = response1.data.nombre;
    } catch (error) {
        console.error('Error al actualizar los datos del jugador 1', error);
    }
}

if (showPlayerTwo) {
    try {
        const response2 = await axios.get(`http://localhost:8081/api/usuarios/${showPlayerTwo.id}`);
        showPlayerTwo.nombre = response2.data.nombre;
    } catch (error) {
        console.error('Error al actualizar los datos del jugador 2', error);
    }
}
</script>