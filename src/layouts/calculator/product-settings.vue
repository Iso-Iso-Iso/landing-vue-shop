<script>
import ThinSelectWrapper from "@/components/calculator/thin-select-wrapper.vue";
import ThinSelectOption from "@/components/forms/thin-select-option.vue";
import CustomSelcet from "@/components/forms/custom-selcet.vue";
import CustomInput from "@/components/forms/custom-input.vue";
import CustomCheckbox from "@/components/forms/custom-checkbox.vue";
export default {
    components: {
        ThinSelectWrapper,
        ThinSelectOption,
        CustomSelcet,
        CustomInput,
        CustomCheckbox,
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
        ThinSelectOption(:selected="true") 420х297мм (А3)
        ThinSelectOption() 420х297мм (А3)
        ThinSelectOption() 297х210мм (А4)
        ThinSelectOption() 297х210мм (А4)
        ThinSelectOption() 210х148мм (А4)
        ThinSelectOption() 210х148мм (А4)
        ThinSelectOption(class="w-[100%]") Другой формат
    h3(class="section-title mb-2") Стороны печати
    ThinSelectWrapper(class="mb-5")
       ThinSelectOption(:selected="true") Одна
       ThinSelectOption() Две
    h3(class="section-title mb-2") Количество видов
    CustomInput(class="mb-7")
    CustomCheckbox(class="mb-6" v-model="a") Ламинация +1 361₽  
    CustomCheckbox(class="mb-6" ) Сверление +428₽ 
    CustomCheckbox(class="mb-6" ) Скругление углов +61₽  
    CustomCheckbox(class="mb-6" ) Перфорация +604₽
    CustomCheckbox(class="mb-6" ) Нумерация +1 500₽  
    CustomCheckbox(class="mb-6" ) Биговка +505₽  
    CustomCheckbox() Фальцовка  +320₽  

</template>
