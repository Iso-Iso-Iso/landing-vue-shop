<script>
import DashSelect from "@/components/forms/dash-select.vue";
export default {
    components: {
        DashSelect,
    },
};
</script>
<template lang="pug">
div(class="mb-7")
    h2(class="title mb-5") Способ оплаты
    DashSelect(class="mb-2" :selected="true")
        p(class="text-lg leading-none ") Банковской картой
        p(class="text-sm font-thin") Для физических лиц
    DashSelect
        p(class="text-lg leading-none ") Безналичный расчет
        p(class="text-sm font-thin") Для юридических лиц
</template>
