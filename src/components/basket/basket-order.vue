<script>
import SecondaryButton from "@/components/forms/secondary-button.vue";
export default {
    props: ["date", "quantity", "weight", "src"],
    emits: ["onEdit", "onCalculating", "onDelete"],
    components: { SecondaryButton },
    data() {
        return {
            isShowAdditionInformation: false,
        };
    },
};
</script>
<template lang="pug">
div(class="py-[15px] px-[10px] bg-white w-full max-w-[345px] h-max")
    div(class="flex mb-5")
        img(:src="src" class="w-[50px] h-[50px] mr-2")
        div(class="mr-auto") 
            h3(class="text-gray-900 font-bold text-lg") 
                slot(name="title") Продукт
            p(class="text-gray-600") {{quantity}} шт., {{weight}}, {{date}}
        img(src="@/assets/arrow.svg" class="transition-all" :class="{'transform rotate-180':!isShowAdditionInformation}" @click="isShowAdditionInformation = !isShowAdditionInformation")
    div(class="h-auto max-h-0 overflow-hidden transition-all" :class="{'max-h-[999px]':isShowAdditionInformation}")
        p(class="mb-5")
          slot
    div(class="flex justify-between")
        SecondaryButton(:rounded='true' :thin='true' @click="$emit('onEdit')")
            img(src="@/assets/basket/edit.svg")
            | Редактировать
        SecondaryButton(:rounded='true' :thin='true' @click="$emit('onCalculating')") 
            img(src="@/assets/basket/calc.svg")
            | Пересчитать
        SecondaryButton(:rounded='true' :thin='true' :danger="true" @click="$emit('onDelete')")
            img(src="@/assets/basket/rubish-bin.svg")
</template>
