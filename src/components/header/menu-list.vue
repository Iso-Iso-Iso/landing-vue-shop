<script>
import MenuSpoiler from "@/components/menu/menu-spoiler.vue";
import SecondaryButton from "@/components/forms/secondary-button.vue";
export default {
    components: { MenuSpoiler, SecondaryButton },
};
</script>
<template lang="pug">
div
    div(class="flex items-center justify-between font-semibold text-2xl leading-9 text-primary mb-5")
      img(src="@/assets/phone-icon.svg" class='w-[22px] h-[22px]')
      p(class="") +7 (495) 740 00 77

    div(class="flex items-center justify-between font-semibold text-xl mb-7 text-primary")
      img(src="@/assets/mail-icon.svg" class='w-[22px] h-[22px]')
      p(class="") printing@printing.com

    SecondaryButton(class="w-full mb-8 flex justify-center items-center")
     img(src="@/assets/personal-area-icon.svg" class="mr-[10px]")
     | Личный кабинет
    MenuSpoiler(class="mb-[30px]") 
        template(#title) Заголовок
        template(#default) 
            p(class='header-menu-link-thin mb-6') some text
            p(class='header-menu-link-thin mb-6 ') some text
            p(class='header-menu-link-thin mb-6') some text
            p(class='header-menu-link-thin mb-6') some text
    p(class="header-menu-link mb-[30px]") Some text
    p(class="header-menu-link mb-[30px]") Some text
 
</template>
