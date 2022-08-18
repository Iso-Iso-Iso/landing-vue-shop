<script>
import MenuSpoiler from "@/components/menu/menu-spoiler.vue";
import SecondaryButton from "@/components/forms/secondary-button.vue";
export default {
    components: { MenuSpoiler, SecondaryButton },
};
</script>
<template lang="pug">
div(class="")
    div(class="flex items-center justify-between font-semibold text-2xl leading-9 text-primary mb-5")
      img(src="@/assets/phone-icon.svg" class='w-[22px] h-[22px]')
      p(class="") +7 (495) 740 00 77

    div(class="flex items-center justify-between font-semibold text-xl mb-7 text-primary")
      img(src="@/assets/mail-icon.svg" class='w-[22px] h-[22px]')
      p(class="") printing@printing.com

    SecondaryButton(class="w-full mb-8 ")
     img(src="@/assets/personal-area-icon.svg" class="mr-[10px]")
     | Личный кабинет
    MenuSpoiler(class="mb-[30px]") 
        template(#title) Наша продукция
        template(#default) 
            p(class='header-menu-link-thin mb-6') Грамоты
            p(class='header-menu-link-thin mb-6 ') Бирки
            p(class='header-menu-link-thin mb-6') Дисконтные карты
            p(class='header-menu-link-thin mb-6') Открытки
            p(class='header-menu-link-thin mb-6') Наклейки
            p(class='header-menu-link-thin mb-6') Готовые наклейки
            p(class='header-menu-link-thin mb-6') Папки
            p(class='header-menu-link-thin mb-6') Конверты
            p(class='header-menu-link-thin mb-6') Брошюры
            p(class='header-menu-link-thin mb-6') Презентации
            p(class='header-menu-link-thin mb-6') Блокноты
            p(class='header-menu-link-thin mb-6') Календари
            p(class='header-menu-link-thin mb-6') Широкоформатная печать
            p(class='header-menu-link-thin mb-6') Таблички
    p(class="header-menu-link mb-[30px]") Как сделать заказ
    p(class="header-menu-link mb-[30px]") Требования к макетам
    p(class="header-menu-link mb-[30px]") Доставка
    p(class="header-menu-link mb-[30px]") Оплата
    p(class="header-menu-link mb-[30px]") Сроки
    p(class="header-menu-link mb-[30px]") Оборудование
    p(class="header-menu-link mb-[30px]") О проекте
    SecondaryButton(class="mb-6 w-full") Стать партнером
    p(class="header-menu-link mb-[30px]") Контакты

 
</template>
