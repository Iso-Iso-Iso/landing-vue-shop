<script>
import ProductSettings from "@/layouts/calculator/product-settings.vue";
import FileUpload from "@/layouts/calculator/file-upload.vue";
import ServiceComment from "@/layouts/calculator/service-comment.vue";
import PrimaryButton from "@/components/forms/primary-button.vue";
export default {
    components: {
        ProductSettings,
        FileUpload,
        ServiceComment,
        PrimaryButton,
    },
    data() {
        return {
            w: "wda",
            a: true,
        };
    },
};
</script>
<template lang="pug">
div(class="bg-gray-200")
    h2(class="title") Листовки срочно
    ProductSettings(class="mb-7")
    FileUpload(class="mb-7")
    ServiceComment(class="mb-4")
    p(class="mb-5 text-sm text-gray-900") Ориентировочная дата изготовления тиража при заказе до 15:00 - 
        span(class="font-bold") 6 февраля.
        |  Срок доставки будет рассчитан при оформлении заказа.
    p(class="mb-4 text-2xl text-gray-900 font-bold") Итого: 9 666₽
    PrimaryButton(:success='true') Добавить в корзину
</template>
