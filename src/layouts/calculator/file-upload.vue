<script>
import img from "@/assets/basket/thumbnail.png";
import CustomInput from "@/components/forms/custom-input.vue";
import FileDropArea from "@/components/forms/file-drop-area.vue";
import ImgPreview from "../../components/forms/img-preview.vue";
export default {
    components: { CustomInput, FileDropArea, ImgPreview },
    data() {
        return {
            img,
            files: [],
        };
    },
    methods: {
        appendFile(files) {
            const fileArrLength = this.files.length;
            this.files.splice(fileArrLength, 0, ...files);
        },
        deleteFile(fileIndex) {
            this.files.splice(fileIndex, 1);
        },
    },
    computed: {
        imageThumbnails() {
            return this.files.reduce((arr, i) => {
                const src = URL.createObjectURL(i);
                const name = i.name;
                arr.push({ src, name });
                return arr;
            }, []);
        },
    },
};
</script>
<template lang="pug">
div(class="bg-white p-3") 
    h2(class="section-title mb-2") Загрузите ваши файлы
    FileDropArea(class="mb-4" @fileUpload='appendFile')
    div(v-if="files.length && imageThumbnails.length")
        ImgPreview(v-for="(item,index) of imageThumbnails" :key="index" :src="item.src" :name="item.name" class="mb-2" @delete="deleteFile(index)")
    p(class="text-xs mb-1") Или введите ссылку на ваш файл в облаке
    CustomInput(placeholder="Ваша ссылка")
</template>
