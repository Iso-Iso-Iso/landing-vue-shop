<script>
import CustomInput from "@/components/forms/custom-input.vue";
export default { components: { CustomInput } };
</script>
<template lang="pug">
div(class="bg-white p-3") 
    h2(class="section-title mb-2") Загрузите ваши файлы
    //- Загрузка файла
    p(class="text-xs mb-1") Или введите ссылку на ваш файл в облаке
    CustomInput(placeholder="Ваша ссылка")
</template>
