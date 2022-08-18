<script>
import BasketItem from "@/components/basket/basket-item.vue";
import BasketIcon from "@/assets/basket/thumbnail.png";
import DashSploiler from "@/components/forms/dash-sploiler.vue";
import PrimaryButton from "@/components/forms/primary-button.vue";
export default {
    components: { BasketItem, DashSploiler, PrimaryButton },
    data() {
        return {
            BasketIcon,
        };
    },
};
</script>
<template lang="pug">
div
    h2(class="title") Заголовок
    BasketItem(:src="BasketIcon" weight="1.2" date="1 февраль" quantity="4" ) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quod, suscipit ducimus eius ea debitis amet inventore aliquid blanditiis consectetur culpa, molestias nihil temporibus a reprehenderit corporis repellat expedita? Praesentium!
    DashSploiler Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a possimus officiis, facere impedit perspiciatis, maiores ab obcaecati officia, fugiat ullam nesciunt hic eveniet consequuntur molestiae animi error doloremque asperiores.
        template(#title) title
    PrimaryButton(:success='true')
</template>
