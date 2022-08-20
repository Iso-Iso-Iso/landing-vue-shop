<script>
import PrimaryButton from "@/components/forms/primary-button.vue";
import UserOrders from "@/layouts/basket/user-orders.vue";
import ReceiveType from "@/layouts/basket/receive-type.vue";
import CheckoutMethod from "@/layouts/basket/checkout-method.vue";
import AdditionInfo from "@/layouts/basket/addition-info.vue";
import CheckoutConclusion from "@/layouts/basket/checkout-conclusion.vue";
export default {
    components: {
        PrimaryButton,
        UserOrders,
        ReceiveType,
        CheckoutMethod,
        AdditionInfo,
        CheckoutConclusion,
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
    PrimaryButton(:success='true')
</template>
