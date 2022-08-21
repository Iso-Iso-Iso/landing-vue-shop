<script>
import ThinSelectWrapper from "@/components/calculator/thin-select-wrapper.vue";
import ThinSelectOption from "@/components/forms/thin-select-option.vue";
import CustomSelcet from "@/components/forms/custom-selcet.vue";
import CustomInput from "@/components/forms/custom-input.vue";
import CustomCheckbox from "@/components/forms/custom-checkbox.vue";
import QuestionIcon from "@/components/calculator/question-icon.vue";
export default {
    components: {
        ThinSelectWrapper,
        ThinSelectOption,
        CustomSelcet,
        CustomInput,
        CustomCheckbox,
        QuestionIcon,
    },
    data() {
        return {
            a: true,
        };
    },
};
</script>
<template lang="pug">
div(class="bg-white p-3")
    div(class="w-1/2 mb-3")
        h3(class="section-title mb-2") Тираж
        CustomSelcet
    div(class="mb-3")
        h3(class="section-title mb-2") Бумага
        CustomSelcet
    h3(class="section-title mb-2") Формат
    ThinSelectWrapper(class="mb-5")
        ThinSelectOption(:selected="true" class="flex-grow") 420х297мм (А3)
        ThinSelectOption(class="flex-grow") 420х297мм (А3)
        ThinSelectOption(class="flex-grow") 297х210мм (А4)
        ThinSelectOption(class="flex-grow") 297х210мм (А4)
        ThinSelectOption(class="flex-grow") 210х148мм (А4)
        ThinSelectOption(class="flex-grow") 210х148мм (А4)
        ThinSelectOption(class="flex-grow") Другой формат
    h3(class="section-title mb-2") Стороны печати
    ThinSelectWrapper(class="mb-5")
       ThinSelectOption(:selected="true" class="flex-grow") Одна
       ThinSelectOption(class="flex-grow") Две
    h3(class="section-title mb-2") Количество видов
    CustomInput(class="mb-7")
    CustomCheckbox(class="mb-6" v-model="a")
        p(class="flex items-center") Ламинация +1  361₽  
            QuestionIcon(class="ml-2")
    CustomCheckbox(class="mb-6" )
        p(class="flex items-center") Сверление +428₽  
            QuestionIcon(class="ml-2")
    CustomCheckbox(class="mb-6" )
        p(class="flex items-center") Скругление углов  +61₽  
            QuestionIcon(class="ml-2")
    CustomCheckbox(class="mb-6" )
        p(class="flex items-center") Перфорация +604₽ 
            QuestionIcon(class="ml-2")
    CustomCheckbox(class="mb-6" )
        p(class="flex items-center") Нумерация +1  500₽  
            QuestionIcon(class="ml-2")
    CustomCheckbox(class="mb-6" )
        p(class="flex items-center") Биговка +505₽   
            QuestionIcon(class="ml-2")
    CustomCheckbox()
        p(class="flex items-center") Фальцовка  +320₽   
            QuestionIcon(class="ml-2")

</template>
