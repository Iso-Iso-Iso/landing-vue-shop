<script>
export default {
    props: ["isBurgerActive"],
};
</script>
<template lang="pug">
div(class="absolute -left-full top-0 bg-white z-50 w-[100vw] min-h-[100vh] px-14 py-16" :class="{'-left-0':isBurgerActive}")
    slot
        
</template>
