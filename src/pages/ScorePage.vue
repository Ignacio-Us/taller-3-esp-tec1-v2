<template>

    <Navbar />

    <div class="container text-white text-center mt-5 font-custom fs-3 ">
        <div class="col-10 justify-content-center align-items-center m-auto">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-3 offset-md-3">
                        Nombre

                    </div>
                    <div class="col-md-3">
                        Puntaje
                    </div>
                </div>

                <div v-for="puntaje in puntajes" :key="puntaje.id" class="row mt-3">

                    <div class="col-md-3 offset-md-3 border-custom ">
                        {{ puntaje.nombreUsuario }}
                    </div>

                    <div class="col-md-3 border-custom">
                        {{ puntaje.puntaje }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.border-custom {
    border: 2px solid white;
}
</style>

<script setup>
import Navbar from '../components/Navbar.vue';
import { ref } from 'vue';
import axios from 'axios';

const puntajes = ref([])

try {
    const response = await axios.get(`http://localhost:8081/api/puntajes`);
    puntajes.value = response.data
} catch (error) {
    console.error('Error al obtener los puntajes', error)
}
</script>
