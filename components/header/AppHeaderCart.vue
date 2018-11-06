<template>
    <nuxt-link to="/cart" class="cart-link">
        <span class="cart-link__text">Cart </span>
        <i class="cart-link__icon fal fa-shopping-bag"></i>
    </nuxt-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .cart-link {
        &__text {
            font-size: 13px;
            font-weight: 400;
        }
        &__icon {
            font-size: 15px;
            font-weight: 300;
            display: inline-block;
            position: relative;
        }
    }
</style>
