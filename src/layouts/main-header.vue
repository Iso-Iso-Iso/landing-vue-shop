<script>
import BurgerButton from "@/components/header/burger-button.vue";
import CompanyLogo from "@/components/header/company-logo.vue";
import ShopBasket from "@/components/header/shop-basket.vue";
import BurgerMenuWrapper from "@/components/header/burger-menu-wrapper.vue";
import MenuList from "@/components/header/menu-list.vue";
export default {
    components: {
        BurgerButton,
        CompanyLogo,
        ShopBasket,
        MenuList,
        BurgerMenuWrapper,
    },
    data() {
        return {
            isBurgerActive: false,
        };
    },
    methods: {
        toggleBurger() {
            this.isBurgerActive = !this.isBurgerActive;
            document.body.classList.toggle("overflow-hidden");
        },
    },
};
</script>

<template lang="pug">
header(class=" ")
  div(class="h-20  shadow-under ")
    div(class='w-full h-2 bg-primary mb-1')
    div(class='px-4 flex justify-between items-center')
      BurgerButton(class="z-[51]" :isBurgerActive='isBurgerActive' @toggleBurger='toggleBurger()')
      CompanyLogo
      ShopBasket
  BurgerMenuWrapper(:isBurgerActive='isBurgerActive')
    MenuList

</template>
