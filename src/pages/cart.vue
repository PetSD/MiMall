<template>
    <div>
        
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader.vue'
import NavFooter from './../components/NavFooter.vue'

export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'cart',
    components:{
        OrderHeader,
        NavFooter
    }

}
</script>
