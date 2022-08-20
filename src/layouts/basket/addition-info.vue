<script>
import CustomTextarea from "@/components/forms/custom-textarea.vue";
export default {
    components: {
        CustomTextarea,
    },
};
</script>
<template lang="pug">
div(class="mb-4")
    h2(class="title mb-[10px]") Примечания к заказу
    div(class="bg-white px-3 py-4")
        CustomTextarea
</template>
