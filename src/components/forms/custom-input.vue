<script>
export default {
    props: ["value"],
    emits: ["input"],
};
</script>
<template lang="pug">
input(class="block w-full p-1 text-base bg-gray-100 border-solid border-[1px] border-gray-300 "  :value="value" @input="$emit('input',$event.target.value)")
</template>
