<script>
export default {
    props: ["success"],
};
</script>
<template lang="pug">
button(class=" text-white py-[8px] px-6 w-max rounded-sm  outline-none border-none " :class="[success?'bg-success hover:bg-success-dark':'bg-primary hover:bg-primary-dark']")
    slot Отправить
</template>
