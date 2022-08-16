<script>
export default {
    props: ["isBurgerActive"],
    emits: ["toggleBurger"],
};
</script>
<template lang="pug">
div(class="w-5 h-4 flex items-center justify-between relative flex-col" @click="$emit('toggleBurger')")
    div(class="w-full h-[2px] bg-gray-900 absolute top-0 left-0 transform transition-all rounded-full" :class="{'rotate-45 top-1/2 -translate-y-1/2':isBurgerActive}")
    div(class="w-full h-[2px] bg-gray-900 absolute top-1/2 left-0 transform -translate-y-1/2 transition-all rounded-full" :class="{'opacity-0':isBurgerActive}")
    div(class="w-full h-[2px] bg-gray-900 absolute bottom-0 left-0 transform transition-all rounded-full " :class="{'-rotate-45 bottom-1/2 translate-y-1/2':isBurgerActive}")

</template>
