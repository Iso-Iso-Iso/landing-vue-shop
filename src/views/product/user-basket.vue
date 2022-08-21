<script>
import PrimaryButton from "@/components/forms/primary-button.vue";
import UserOrders from "@/layouts/basket/user-orders.vue";
import ReceiveType from "@/layouts/basket/receive-type.vue";
import CheckoutMethod from "@/layouts/basket/checkout-method.vue";
import AdditionInfo from "@/layouts/basket/addition-info.vue";
import CheckoutConclusion from "@/layouts/basket/checkout-conclusion.vue";
import CustomCheckbox from "@/components/forms/custom-checkbox.vue";
export default {
    components: {
        PrimaryButton,
        UserOrders,
        ReceiveType,
        CheckoutMethod,
        AdditionInfo,
        CheckoutConclusion,
        CustomCheckbox,
    },
};
</script>
<template lang="pug">
div(class="bg-gray-200")
    UserOrders
    ReceiveType
    CheckoutMethod
    AdditionInfo
    CheckoutConclusion(date='7 февраля' price='300' quantity="3 ")
    CustomCheckbox(class="items-start mb-7 text-sm leading-none") 
        span(class="text-gray-500 leading-[120%]" ) Я подтверждаю соответствие макетов 
            span(class="text-primary") Требованиям к макетам.
            |  Параметры заказа указаны верно. С 
            span(class="text-primary") политикой конфиденциальности 
            | и 
            span(class="text-primary") Договором-офертой 
            | согласен.
    PrimaryButton(:success='true')
</template>
