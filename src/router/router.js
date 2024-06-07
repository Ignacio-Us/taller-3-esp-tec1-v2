import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GamePage from "../pages/GamePage.vue";
import SelectPage from "../pages/SelectPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import ScorePage from "../pages/ScorePage.vue";
import LoginPage2 from "../pages/LoginPage2.vue";


const routes = [
    { path: "/", component: HomePage},
    { path: "/game", component: GamePage, meta: { requiresAuth:true}},
    { path: "/selection", component: SelectPage,  meta: { requiresAuth:true} },
    { path: "/login", component: LoginPage},
    {path: "/score", component: ScorePage},
    {path: "/login2", component: LoginPage2}
];


export const router = createRouter({
    history: createWebHistory(),
    routes,
});

