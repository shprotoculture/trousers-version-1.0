<template>
    <div class="nav-wrap">
        <app-header-sale-alert></app-header-sale-alert>
        <header class="header">
            <div class="header__content">
                <app-header-burger></app-header-burger>
                <app-header-navigation></app-header-navigation>
                <app-logo class="header__logo"></app-logo>
                <app-header-cart></app-header-cart>
            </div>
        </header>
        <app-header-mobile-menu></app-header-mobile-menu>
    </div>
</template>

<script>
import AppHeaderSaleAlert from '~/components/header/AppHeaderSaleAlert';
import AppHeaderNavigation from '~/components/header/AppHeaderNavigation';
import AppLogo from '~/components/other/AppLogo';
import AppHeaderCart from '~/components/header/AppHeaderCart';
import AppHeaderBurger from '~/components/header/AppHeaderBurger';
import AppHeaderMobileMenu from '~/components/header/AppHeaderMobileMenu';
export default {
    components: {
        AppHeaderSaleAlert,
        AppHeaderNavigation,
        AppLogo,
        AppHeaderCart,
        AppHeaderBurger,
        AppHeaderMobileMenu
    }
}
</script>

<style lang="scss">
    .nav-wrap {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
    }
    .header {
        background: #fff;
        border-bottom: 1px solid #f2f2f2;
        position: relative;
        z-index: 40;
        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;
            height: 48px;
            margin: 0 auto;
            padding: 0 15px;
            position: relative;
        }
        &__logo {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        @media screen and (max-width: 575px) {
            &__content {
                width: 100%;
            }
        }
    }
</style>
