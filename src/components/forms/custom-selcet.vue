<script>
export default {
    props: ["value"],
    emits: ["input"],
    data() {
        return {
            isSelectOpen: false,
        };
    },
    methods: {
        rotateArrowToClose(e) {
            const selectParent = e.target.closest("select");
            if (selectParent) return;
            this.isSelectOpen = false;
        },
    },
    mounted() {
        document.addEventListener("click", this.rotateArrowToClose);
    },
    unmounted() {
        document.removeEventListener(
            "click",
            this.rotateArrowToClose
        );
    },
};
</script>
<template lang="pug">
div( class="block relative ")
    select( class="select block w-full p-1 text-base bg-gray-100 border-solid border-[1px] border-gray-300 pr-[30px] cursor-pointer" :value="value" @click="isSelectOpen = !isSelectOpen" @select="$emit('input',$event.target.value)")
        slot 
    img(src="@/assets/arrow.svg" class="transition-all absolute top-1/2 right-[15px] transform -translate-y-1/2 translate-x-1/2 pointer-events-none" :class="{'rotate-180':!isSelectOpen}" )
</template>
<style scoped>
.select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
}
</style>
