<script>
import MainHeader from "@/layouts/main-header.vue";
import MainFooter from "@/layouts/main-footer.vue";
import ProductCard from "./components/product/product-card.vue";
import ProductPlaceholder from "@/assets/product/product-placeholder2.png";
export default {
    components: {
        MainHeader,
        MainFooter,
        ProductCard,
    },
    data() {
        return {
            ProductPlaceholder,
        };
    },
};
</script>
<template lang="pug">
div(class="flex flex-col justify-stretch items-stretch min-h-full")
  ProductCard(:src='ProductPlaceholder')
    template(#title) title
    template
      p(class="product-list-item") Текст
  MainHeader
  div(class='flex-grow flex-shrink flex-full')
    RouterView(class="px-4 py-3")
  MainFooter
  
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
body,
html {
    height: 100%;
}
</style>
