<script>
export default {
    props: ["rounded", "thin", "danger"],
};
</script>
<template lang="pug">
button(class="px-[32px] py-2 font-semibold text-primary border-solid border-[1px] border-primary flex justify-center items-center" :class="{'rounded':rounded,'px-[6px] py-[9px] text-sm font-normal':thin,'border-red-600':danger}")
    slot Отправить  
    
</template>
