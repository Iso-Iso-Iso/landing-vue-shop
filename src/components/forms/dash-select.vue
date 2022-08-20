<script>
export default {
    props: ["selected"],
};
</script>
<template lang="pug">
div(class="rounded-sm  px-[30px] py-[34px] transition-all text-lg" :class="[selected?'bg-primary text-white':'text-gray-900 bg-white']")
    slot 
</template>
