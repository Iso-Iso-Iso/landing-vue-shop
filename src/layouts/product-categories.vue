<script>
import CategoryGridWrapper from "@/components/category/category-grid-wrapper.vue";
import CategoryItem from "@/components/category/category-item.vue";
import ScrollIcon from "@/assets/product-category/scroll.svg";
import BuisnesCardIcon from "@/assets/product-category/buisnes-card.svg";
import SertificateIcon from "@/assets/product-category/certificate.svg";
import BookletIcon from "@/assets/product-category/booklet.svg";
import PocketCalendarIcon from "@/assets/product-category/pocket-calendar.svg";
import TableCalendarIcon from "@/assets/product-category/table-calendar.svg";
import CubeCalendarIcon from "@/assets/product-category/cube-calendar.svg";
import FileIcon from "@/assets/product-category/file.svg";
import BookIcon from "@/assets/product-category/book.svg";
import FolderIcon from "@/assets/product-category/folder.svg";
import DiscountIcon from "@/assets/product-category/discount.svg";
import PostcardIcon from "@/assets/product-category/postcard.svg";
import StickersIcon from "@/assets/product-category/stickers.svg";
import ReadyStickersIcon from "@/assets/product-category/ready-stickers.svg";
import LetterIcon from "@/assets/product-category/letter.svg";
import TagsIcon from "@/assets/product-category/tags.svg";
import PresentationIcon from "@/assets/product-category/presentation.svg";
import NotebookIcon from "@/assets/product-category/notebook.svg";
import TablesIcon from "@/assets/product-category/tables.svg";
import PrinterIcon from "@/assets/product-category/printer.svg";

export default {
    components: {
        CategoryGridWrapper,
        CategoryItem,
    },
    data() {
        return {
            ScrollIcon,
            BuisnesCardIcon,
            BookletIcon,
            SertificateIcon,
            TableCalendarIcon,
            PocketCalendarIcon,
            CubeCalendarIcon,
            FileIcon,
            BookIcon,
            FolderIcon,
            DiscountIcon,
            PostcardIcon,
            StickersIcon,
            ReadyStickersIcon,
            LetterIcon,
            PresentationIcon,
            TagsIcon,
            NotebookIcon,
            TablesIcon,
            PrinterIcon,
        };
    },
};
</script>
<template lang="pug">
CategoryGridWrapper
    CategoryItem(:src="ScrollIcon") Листовки
    CategoryItem(:src="BuisnesCardIcon") Визитки
    CategoryItem(:src="BookletIcon") Буклеты
    CategoryItem(:src="SertificateIcon" class=" leading-none") Грамоты и 
        span(class="text-base font-semibold") сертификаты
    CategoryItem(:src="PocketCalendarIcon" class=" leading-none") Грамоты и 
        span(class="text-base font-semibold") сертификаты
    CategoryItem(:src="TableCalendarIcon" class=" leading-none") Грамоты и 
        span(class="text-base font-semibold") сертификаты
    CategoryItem(:src="CubeCalendarIcon" class=" leading-none") Квартальные 
        span(class="text-base font-semibold") календари
    CategoryItem(:src="FileIcon") Бланки
    CategoryItem(:src="BookIcon") Брошюры
    CategoryItem(:src="FolderIcon") Папки
    CategoryItem(:src="DiscountIcon" class=" leading-none") Дисконтные 
        span(class="text-base font-semibold") карты
    CategoryItem(:src="PostcardIcon") Открытки
    CategoryItem(:src="StickersIcon") Наклейки
    CategoryItem(:src="ReadyStickersIcon") Готовые 
        span(class="text-base font-semibold") наклейки
    CategoryItem(:src="LetterIcon") Конверты
    CategoryItem(:src="TagsIcon") Бирки
    CategoryItem(:src="PresentationIcon") Презентации
    CategoryItem(:src="NotebookIcon") Блокноты
    CategoryItem(:src="TablesIcon") Таблички
    CategoryItem(:src="PrinterIcon" class="leading-none") Широко-
       span(class="text-sm font-semibold tracking-tight") форматная печать
</template>
