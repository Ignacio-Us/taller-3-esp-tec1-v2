import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

router.beforeEach((to, from, next) => {
    const loggedIn = sessionStorage.getItem('usuarioLogeado'); // Verifica si hay un usuario logeado

    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        // Si la ruta requiere autenticación y el usuario no está logeado, redirige a la página de inicio de sesión
        next('/login');
    } else {
        // De lo contrario, permite el acceso a la ruta
        next();
    }
});
