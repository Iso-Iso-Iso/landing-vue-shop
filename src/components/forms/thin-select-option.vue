<script>
export default {
    props: ["selected"],
};
</script>
<template lang="pug">
div(class="text-lg flex justify-center items-center w-[155px] h-[45px]  p-[10px] cursor-pointer border-[1px] border-solid" :class="[selected?' bg-primary border-primary text-white': ' border-gray-200 text-gray-900']")
    slot
</template>
