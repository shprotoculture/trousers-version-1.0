<template>
    <transition name="mobile-menu">
        <div class="mobile-menu" v-show="menuIsActive">
            <div class="mobile-menu__content">
                <ul class="mobile-menu__list">
                    <li class="mobile-menu__list-item">
                        <nuxt-link to="/" class="mobile-menu__list-item-link">Home</nuxt-link>
                    </li>
                    <li class="mobile-menu__list-item">
                        <nuxt-link to="/trousers" class="mobile-menu__list-item-link">Trousers</nuxt-link>
                    </li>
                    <li class="mobile-menu__list-item">
                        <nuxt-link to="/about" class="mobile-menu__list-item-link">About</nuxt-link>
                    </li>
                    <li class="mobile-menu__list-item">
                        <nuxt-link to="/contact-us" class="mobile-menu__list-item-link">Contact Us</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        menuIsActive () {
            return this.$store.state.header.menuIsActive;
        }
    }
}
</script>

<style lang="scss">
    .mobile-menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: -100px;
        background: #fff;
        z-index: 20;
        transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
        &__content {
            position: absolute;
            top: 79px;
            left: 0;
            right: 0;
            bottom: 100px;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
        &__list {
            position: absolute;
            width: 90%;
            top: 0;
            left: 5%;
            right: 5%;
            bottom: 0;
            padding: 30px 15px;
            &-item {
                text-align: center;
                &-link {
                    display: inline-block;
                    font-size: 24px;
                    font-weight: 300;
                    padding-bottom: 1px;
                    margin-bottom: 15px;
                    position: relative;
                    &:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 1px;
                        background: #000;
                        transform-origin: center;
                        transform: scaleX(0);
                        transition: .15s ease;
                    }
                    &:hover {
                        &:after {
                            transform: scaleX(1);
                        }
                    }
                }
            }
        }
        &-enter {
            transform: translate3d(-100%, 0, 0);
        }
        &-leave-to {
            transform: translate3d(100%, 0, 0);
        }
    }
</style>
