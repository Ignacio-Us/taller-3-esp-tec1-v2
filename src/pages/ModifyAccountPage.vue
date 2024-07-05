<template>
    <div class="home">
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <h2 class="title">Editar Usuario</h2>
          </div>
          <form v-on:submit.prevent="updateUser">
            <input type="text" id="editUser" class="fadeIn second" name="editUser" placeholder="Nombre" v-model="nombre">
            <input type="email" id="editEmail" class="fadeIn third" name="editEmail" placeholder="Email" v-model="email">
            <input type="password" id="editPassword" class="fadeIn third" name="editPassword" placeholder="Password" v-model="password">
            <input type="submit" class="fadeIn fourth" value="Actualizar">
          </form>
  
          <div class="alert alert-danger" role="alert" v-if="error">
            {{ error_mensaje }}
          </div>
          <div class="alert alert-success" role="alert" v-if="success">
            {{ success_mensaje }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'EditUserPage',
    data() {
      return {
        nombre: "",
        email: "",
        password: "",
        error: false,
        error_mensaje: "",
        success: false,
        success_mensaje: "",
      }
    },
    methods: {
      async updateUser() {
        if (!this.nombre || !this.password || !this.email) {
          this.error = true;
          this.error_mensaje = 'Por favor, completa todos los campos.';
          return;
        }
  
        try {
          let updatedUser = {
            nombre: this.nombre,
            email: this.email,
            contrasena: parseInt(this.password, 10)
          };
  
          await axios.put(`http://localhost:8081/api/usuarios/${this.email}`, updatedUser);
          this.success = true;
          this.success_mensaje = 'Usuario actualizado con éxito.';
          this.error = false;
        } catch (error) {
          console.error(error);
          this.error = true;
          this.error_mensaje = 'Ocurrió un error durante la actualización. Por favor, intenta nuevamente.';
        }
      }
    },
    async created() {
      try {
        let response = await axios.get(`http://localhost:8081/api/usuarios/${this.$route.params.email}`);
        let usuario = response.data;
        this.nombre = usuario.nombre;
        this.email = usuario.email;
        this.password = usuario.contrasena;
      } catch (error) {
        console.error(error);
        this.error = true;
        this.error_mensaje = 'Ocurrió un error al cargar los datos del usuario.';
      }
    }
  }

  
</script>
<style scoped>

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
  margin: 0;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  border-radius: 10px;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  background: #f3f3f300;
}

.title {
  margin: 20px 0;
  color: #cccccc;
  font-size: 24px;
  font-weight: 600;
}

input[type=submit] {
  background-color: #005521;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  border-radius: 5px;
  margin: 20px 0;
  transition: all 0.3s ease-in-out;
}

input[type=submit]:hover {
  background-color: #003503;
}

input[type=submit]:active {
  transform: scale(0.95);
}

input[type=text], input[type=password], input[type=email] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 5px 0;
  width: 85%;
  border: 2px solid #f6f6f6;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}

input[type=text]:focus, input[type=password]:focus, input[type=email]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

.alert {
  color: #d9534f;
  margin-top: 20px;
}

.alert-success {
  color: #5cb85c;
}

.fadeIn {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeIn.first {
  animation-delay: 0.4s;
}

.fadeIn.second {
  animation-delay: 0.6s;
}

.fadeIn.third {
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  animation-delay: 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>