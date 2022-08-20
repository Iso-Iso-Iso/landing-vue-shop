<script>
import ProductCard from "@/components/product/product-card.vue";
import ProductLoopWrapper from "@/components/product/product-loop-wrapper.vue";
import ProductPlaceholder from "@/assets/product/product-placeholder2.png";
export default {
    components: {
        ProductCard,
        ProductLoopWrapper,
    },
    data() {
        return {
            ProductPlaceholder,
        };
    },
};
</script>
<template lang="pug">
ProductLoopWrapper
    ProductCard(v-for="index of 4" :src="ProductPlaceholder")
        template(#title) Title 
        template
            p(class="product-list-item") Цифровая печать
            p(class="product-list-item") 40 видов бумаги
            p(class="product-list-item") Готовы за 1 день
</template>
