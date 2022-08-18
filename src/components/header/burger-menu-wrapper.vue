<script>
export default {
    props: ["isBurgerActive"],
};
</script>
<template lang="pug">
div(v-if="isBurgerActive" class="fixed bottom-0 overflow-y-auto left-0 top-0 bg-white z-50 w-full min-h-[100vh]  px-14 py-16 " )
    slot
        
</template>
