<script>
import DashSploiler from "@/components/forms/dash-sploiler.vue";
export default {
    components: {
        DashSploiler,
    },
};
</script>
<template lang="pug">
div(class="mb-7")
    h2(class="title mb-[10px]") Способ получения
    div(class="flex flex-wrap gap-2")
        DashSploiler
            template(#title) Самовывоз
            template(#default) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis laborum tempora laudantium illum molestias similique adipisci ipsa eaque mollitia voluptas omnis aperiam, eos qui veritatis, harum repellat doloremque nisi vero.
        DashSploiler
            template(#title) Пункты выдачи заказов
            template(#default) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis laborum tempora laudantium illum molestias similique adipisci ipsa eaque mollitia voluptas omnis aperiam, eos qui veritatis, harum repellat doloremque nisi vero.
        DashSploiler
            template(#title) Доставка курьером (до 25 кг)
            template(#default) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis laborum tempora laudantium illum molestias similique adipisci ipsa eaque mollitia voluptas omnis aperiam, eos qui veritatis, harum repellat doloremque nisi vero.
</template>
