<script>
export default {
    props: ["value"],
    emits: ["input"],
};
</script>
<template lang="pug">
textarea(class="block w-full h-20 bg-gray-100 border-solid border-[1px] border-gray-300 cursor-pointer" :value="value" @input="$emit('input',$event.target.value)")
</template>
