<template>
  <div class="home">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
        </div>
        <!-- Login Form:    prevent: previene que no se carga la pagina pero igual se obtienen los datos-->
        <form v-on:submit.prevent="login">
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario" v-model="usuario">
          <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password" v-model="password">
          <input type="submit" class="fadeIn fourth" value="Login">
        </form>


        <div class="alert alert-danger" role="alert" v-if="error">
          {{ error_mensaje }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      usuario: "",
      password: "",
      error: false,
      error_mensaje: "",
    }
  },
  methods: {
    async login() {
      if (!this.usuario || !this.password) {
        this.error = true;
        this.error_mensaje = 'Por favor, completa todos los campos.';
        return;
      }

      try {
        // Cargar el archivo JSON
        let response = await axios.get(`http://localhost:3000/Usuarios`);
        let usuarios = response.data;

        // Verificar las credenciales
        let usuario = usuarios.find(user => user.email === this.usuario && user.password.toString() === this.password);

        if (usuario) {
          sessionStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
          this.$router.push('/');
        } else {
          this.error = true;
          this.error_mensaje = 'Correo electrónico o contraseña incorrectos.';
        }
      } catch (error) {
        console.error(error);
        this.error = true;
        this.error_mensaje = 'Ocurrió un error durante el inicio de sesión. Por favor, intenta nuevamente.';
      }
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

input[type=text] {
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

input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

.alert {
  color: #d9534f;
  margin-top: 20px;
}
</style>