<script>
import PrimaryButton from "@/components/forms/primary-button.vue";
export default {
    props: ["src"],
    emits: ["onCalculate"],
    components: { PrimaryButton },
};
</script>
<template lang="pug">
div(class="bg-primary-light flex") 
    div(class="reletive w-[150px] h-[160px] mr-5") 
        img(:src="src" class="abolute top-0 left-0 object-contain h-full w-full")
    div(class="flex flex-col justify-start items-stretch py-2 pr-2")
        h2(class="text-gray-900 font-bold")
            slot(name="title")
        div(class="flex-full mb-2")
            slot
        PrimaryButton(@click="$emit('onCalculate')") Рассчитать
        
</template>
