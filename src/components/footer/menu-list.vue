<script>
import SeparateLine from "@/components/footer/separate-line.vue";
export default {
    components: {
        SeparateLine,
    },
};
</script>
<template lang="pug">
div 
    div(class="flex items-center justify-between font-semibold text-2xl leading-9 text-white mb-5")
      img(src="@/assets/phone-icon-white.svg" class='w-[22px] h-[22px]')
      p(class="") +7 (495) 740 00 77

    div(class="flex items-center justify-between font-semibold text-xl mb-7 text-white")
      img(src="@/assets/mail-icon-white.svg" class='w-[22px] h-[22px]')
      p(class="") printing@printing.com
    SeparateLine
    p(class="footer-menu-link mb-5") Как сделать заказ
    p(class="footer-menu-link mb-5") Требования к макетам
    p(class="footer-menu-link mb-5") Оплата
    p(class="footer-menu-link mb-5") Сроки
    SeparateLine
    p(class="footer-menu-link mb-5") Оборудование
    p(class="footer-menu-link mb-5") О проекте
    p(class="footer-menu-link mb-5") Для партнеров
    p(class="footer-menu-link mb-5") Контакты
    SeparateLine
    p(class="footer-menu-link mb-5") Договор-оферта
    p(class="footer-menu-link mb-5") Политика конфиденциальности
    div(class='flex')
      p(class="text-white text-xs mr-2") Оплата ПАО “Сбербанк”:
      img(src="@/assets/payment-method.png" class="w-[155px] h-5")
    p(class="text-white text-xs mr-2") © 2020 ООО “Компания ИРМ-1” 
    p(class="text-white text-xs mr-2")  ИНН: 7721762777 ОГРН: 1127746531450
    p(class="text-white text-xs mr-2")  Адрес: 109456 г. Москва, ул. Михайлова, д.51/1
</template>
