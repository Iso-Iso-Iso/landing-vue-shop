<script>
import PrimaryButton from "@/components/forms/primary-button.vue";
import MainHeader from "@/layouts/main-header.vue";
import MainFooter from "@/layouts/main-footer.vue";
export default {
    components: {
        PrimaryButton,
        MainHeader,
        MainFooter,
    },
};
</script>
<template lang="pug">
div(class="flex flex-col justify-stretch items-stretch min-h-full")
  MainHeader
  div(class='flex-grow flex-shrink flex-full')
  MainFooter
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
body,
html {
    height: 100%;
}
</style>
