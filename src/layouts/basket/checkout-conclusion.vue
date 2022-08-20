<script>
export default {
    props: ["price", "quantity", "date"],
};
</script>
<template lang="pug">
div(class="mb-4")
    p(class="text-lg text-gray-900 leading-[23px]") Cтоимость: 
        span(class="font-semibold") {{price}} ₽
    p(class="text-lg text-gray-900 leading-[23px]") Позиций в заказе:  
        span(class="font-semibold") {{quantity}}
    p(class="text-lg text-gray-900 leading-[23px]") Дата получения: 
        span(class="font-semibold") {{date}}  


</template>
