<script>
export default {
    data() {
        return {
            isSpoilerShow: false,
        };
    },
};
</script>
<template lang="pug">
div(class="")
    div(class="flex items-center w-max   rounded-md" @click="isSpoilerShow = !isSpoilerShow")
        p(class="font-semibold mr-1 text-lg")
          slot(name='title' )
        img(src="@/assets/arrow.svg" class="transition-all  w-[12px] h-[12px]" :class="{'transform rotate-180':!isSpoilerShow}")
    
    Transition(name='menu-spoiler' )
        div(v-if="isSpoilerShow" class="transition-all origin-top pl-5 ")
            div(class='pt-4')
                slot 

</template>
<style lang="scss">
.menu-spoiler-enter,
.menu-spoiler-leave-to {
    transform: scaleY(0);
    max-height: 0;
}
.menu-spoiler-enter-to,
.menu-spoiler-leave {
    transform: scaleY(1);
    max-height: auto;
}
</style>
