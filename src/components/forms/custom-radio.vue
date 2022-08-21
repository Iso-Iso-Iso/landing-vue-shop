<script>
export default {
    props: ["selected", "value"],
    emits: ["change"],
};
</script>
<template lang="pug">
label(class="flex items-center" @click="$emit('change',value)")
    div(class="flex justify-center mr-2 items-center border-primary border-2 rounded-full border-solid p-[6px] h-7 w-7")
        div(:class="{'w-full h-full bg-primary rounded-full':selected}")
    input(type="radio" class="fixed left-[100vw] opacity-0")
    p 
        slot
</template>
