import Vue from "vue";
import VueRouter from "vue-router";
import ProductCategories from "@/views/product/product-categories.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/product/category",
        component: ProductCategories,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
