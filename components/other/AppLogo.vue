<template>
    <nuxt-link to="/" class="logo">
        <span class="logo__text">Oorlyberg.</span>
    </nuxt-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .logo {
        display: block;
        color: #000;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 1px;
        &_white {
            color: #fff;
        }
    }
</style>
