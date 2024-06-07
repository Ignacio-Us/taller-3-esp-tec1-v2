import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

router.beforeEach((to, from, next) => {
    const loggedIn1 = sessionStorage.getItem('usuarioLogeado'); // Verifica si hay un usuario logeado
    const loggedIn2 = sessionStorage.getItem('usuario2Logeado');

   // Verificar si la ruta requiere autenticación y que ambos usuarios estén logeados
   if (to.matched.some(record => record.meta.requiresAuth) && (!loggedIn1 || !loggedIn2)) {
    next('/'); // Redirigir a la página de inicio de sesión si uno o ambos usuarios no están logeados
} else {
    next(); // Permitir el acceso a la ruta si ambos usuarios están logeados
}
});

