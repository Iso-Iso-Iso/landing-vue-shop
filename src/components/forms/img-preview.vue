<script>
import SecondaryButton from "./secondary-button.vue";
export default {
    props: ["src", "name"],
    emits: ["delete"],
    components: { SecondaryButton },
};
</script>
<template lang="pug">
div(class="flex items-center")
    img(:src="src" class="rounded-sm object-cover h-9 w-9 mr-2")
    p(class="flex-auto mr-2 text-gray-600 text-base") {{name}}
    SecondaryButton(:danger="true" :thin="true" class="rounded-md cursor-pointer py-[8px] px-[11px]" @click.native="$emit('delete')")
        img(src="@/assets/calculator/rubish-bin.svg")
</template>
