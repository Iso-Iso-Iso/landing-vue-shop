<script>
import BasketOrder from "@/components/basket/basket-order.vue";
import Thumbnail from "@/assets/basket/thumbnail.png";
export default {
    components: { BasketOrder },
    data() {
        return {
            Thumbnail,
        };
    },
};
</script>
<template lang="pug">
div(class='mb-6')
    h2(class="title mb-[10px]") Ваши заказы
    div(class="flex gap-5 justify-center items-start flex-wrap")
        BasketOrder(:src="Thumbnail" class="flex-auto" quantity="100" weight="5 кг" date="7 Февраля")
            template(#title ) Визитки срочно
            template(v-slot) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, velit. Architecto voluptatem vel quis maiores, veniam nobis! Architecto atque reiciendis iure labore. Itaque saepe necessitatibus natus doloremque in quia quibusdam.
        BasketOrder(:src="Thumbnail" class="flex-auto" quantity="100" weight="5 кг" date="7 Февраля")
            template(#title ) Визитки срочно
            template(v-slot) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, velit. Architecto voluptatem vel quis maiores, veniam nobis! Architecto atque reiciendis iure labore. Itaque saepe necessitatibus natus doloremque in quia quibusdam.
</template>
