import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/home-page.vue";
import ProductLoop from "@/views/product/product-loop.vue";
import UserBasket from "@/views/product/user-basket.vue";
import Calculator from "@/views/product/product-calculator.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/product",
        component: ProductLoop,
    },
    {
        path: "/basket",
        component: UserBasket,
    },
    {
        path: "/calc",
        component: Calculator,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
