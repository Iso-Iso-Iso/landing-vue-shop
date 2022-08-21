<script>
import DashSploiler from "@/components/forms/dash-sploiler.vue";
import CustomRadio from "@/components/forms/custom-radio.vue";
import SecondaryButton from "@/components/forms/secondary-button.vue";
import CustomInput from "@/components/forms/custom-input.vue";
import CustomTextarea from "@/components/forms/custom-textarea.vue";
export default {
    components: {
        DashSploiler,
        CustomRadio,
        SecondaryButton,
        CustomInput,
        CustomTextarea,
    },
};
</script>
<template lang="pug">
div(class="mb-7")
    h2(class="title mb-[10px]") Способ получения
    div(class="")
        DashSploiler(class="mb-2")
            template(#title) Самовывоз
            template(#default) 
                CustomRadio(class="mb-5")
                    p(class="text-lg leading-none  text-gray-900") Арбат
                    p(class="text-sm font-thin text-gray-500") пер. Сивцев Вражек, д. 20
                CustomRadio(:selected="true")
                    p(class="text-lg leading-none  text-gray-900") Люберцы
                    p(class="text-sm font-thin text-gray-500") г. Люберцы, Инициативная ул., д. 38 Б
        DashSploiler(class="mb-2")
            template(#title) Пункты выдачи заказов
            template(#default) 
                p(class="mb-3 text-sm") Любой город России. Стоимость от 130 рублей. Срок доставки и стоимость автоматически рассчитаются после выбора пункта выдачи.
                SecondaryButton(:thin="true" class="mb-6 text-gray-900") Выбрать пункт самовывоза
                p(class="text-sm text-gray-900") 
                    span(class="font-semibold") Точка выдачи: 
                    | Москва, 119071, Москва г, 2-й Донской проезд, д.10, строение 2
                p(class="text-sm text-gray-900") 
                    span(class="font-semibold") Телефон:  
                    | +7(499)391-56-22
                p(class="text-sm text-gray-900") 
                    span(class="font-semibold") Срок доставки:   
                    | 1 день
                p(class="text-sm text-gray-900") 
                    span(class="font-semibold") Режим работы ПВЗ:    
                    | пн-вс 09:00-21:00
                
        DashSploiler
            template(#title) Доставка курьером (до 25 кг)
            template(#default) 
                h4(class="text-gray-900 text-sm font-semibold mb-1") Почтовый индекс
                CustomInput(class="mb-3")
                h4(class="text-gray-900 text-sm font-semibold mb-1") Адрес доставки
                CustomInput(class="mb-3")
                h4(class="text-gray-900 text-sm font-semibold mb-1") Телефон
                CustomInput(class="mb-3")
                h4(class="text-gray-900 text-sm font-semibold mb-1") Дополнительно
                CustomTextarea
</template>
