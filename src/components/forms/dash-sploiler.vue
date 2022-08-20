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
div
    div(class="flex  justify-between rounded-sm px-[30px] py-[34px] transition-all text-lg" :class="[isSpoilerShow?'bg-primary text-white':'text-gray-900 bg-white']" @click="isSpoilerShow= !isSpoilerShow")
        slot(name="title")
        img(src="@/assets/arrow.svg" class="transition-all" :class="{'transform rotate-180':!isSpoilerShow}")
    div(class="h-auto max-h-0 transition-all overflow-hidden" :class="{'max-h-[3000px]':isSpoilerShow}")
        p(class="text-gray-900 py-4 ")
            slot
</template>
