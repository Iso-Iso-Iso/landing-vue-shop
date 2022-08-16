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
    p(class="footer-menu-link mb-5") Ссылка
    p(class="footer-menu-link mb-5") Ссылка
    p(class="footer-menu-link mb-5") Ссылка
</template>
