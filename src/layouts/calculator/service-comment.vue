<script>
import CustomTextarea from "@/components/forms/custom-textarea.vue";
export default { components: { CustomTextarea } };
</script>
<template lang="pug">
div(class="bg-white p-3") 
    h2(class="section-title mb-2") Комментарий к услуге 
    CustomTextarea
</template>
