<script>
export default {
    props: ["src"],
};
</script>
<template lang="pug">
div(class="flex flex-col items-center justify-center shadow-lg rounded-lg  px-[20px] py-5 hover:bg-gray-100 cursor-pointer w-[160px] h-[120px]")
    img(:src="src" class="mb-1")
    p(class="font-bold text-[17px] text-center")
        slot
</template>
