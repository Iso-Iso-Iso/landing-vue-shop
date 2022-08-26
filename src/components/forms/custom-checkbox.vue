<script>
export default {
    props: ["value"],
    emits: ["input"],
};
</script>
<template lang="pug">
label(class="flex items-center cursor-pointer")
    div(class="w-[25px] h-[25px] flex-shrink-0 border-solid border-primary border-[1px] rounded-md mr-2" :class="{'bg-primary':value==true}")
        img(src="@/assets/check.svg" class="w-full h-full" v-show="value==true")
    slot
    input(class="opacity-0 fixed left-[100vw]" type="checkbox" :checked="value" @change="$emit('input',$event.target.checked)")
</template>
