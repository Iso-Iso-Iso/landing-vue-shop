<script>
export default {
    emits: ["fileUpload"],
    data() {
        return {
            isDragOver: false,
        };
    },
    methods: {
        onDragOver(event) {
            event.preventDefault();
            this.isDragOver = true;
        },
        onDragLeave() {
            this.isDragOver = false;
        },
        onFileUpload(event) {
            this.$emit("fileUpload", event.target.files);
        },
        onDrop(event) {
            event.preventDefault();
            this.isDragOver = false;

            this.$emit("fileUpload", event.dataTransfer.files);
        },
    },
};
</script>
<template lang="pug">
label(class="border-dashed   h-[125px] w-full  flex justify-center items-center flex-col bg-gray-100" :class="[isDragOver?'border-primary border-2':'border-gray-300  border-[1px]']" @dragover="onDragOver($event)" @dragleave="onDragLeave()" @drop="onDrop($event)" )
    input(type="file" multiple  class="fixed opacity-0 left-[100vw]" @change="onFileUpload($event)")
    img(src="@/assets/file-upload.svg" class="mb-1 pointer-events-none")
    p(class="text-xs text-gray-500 pointer-events-none") Нажмите для загрузки файлов
</template>
