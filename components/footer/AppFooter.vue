<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col_padding-around">
                    <app-logo class="logo_white footer__logo"></app-logo>
                    <ul class="footer__social-list">
                        <li class="footer__social-list-item">
                            <a href="#" class="footer__social-list-item-link"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="footer__social-list-item">
                            <a href="#" class="footer__social-list-item-link"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li class="footer__social-list-item">
                            <a href="#" class="footer__social-list-item-link"><i class="fab fa-pinterest-p"></i></a>
                        </li>
                        <li class="footer__social-list-item">
                            <a href="#" class="footer__social-list-item-link"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 col_padding-around">
                    <div class="footer-nav">
                        <ul class="footer-nav__list">
                            <li class="footer-nav__list-item">
                                <nuxt-link class="footer-nav__list-item-link" to="#">Our Product</nuxt-link>
                            </li>
                            <li class="footer-nav__list-item">
                                <nuxt-link class="footer-nav__list-item-link" to="#">Delivery</nuxt-link>
                            </li>
                            <li class="footer-nav__list-item">
                                <nuxt-link class="footer-nav__list-item-link" to="#">FAQ</nuxt-link>
                            </li>
                            <li class="footer-nav__list-item">
                                <nuxt-link class="footer-nav__list-item-link" to="#">Alterations</nuxt-link>
                            </li>
                            <li class="footer-nav__list-item">
                                <nuxt-link class="footer-nav__list-item-link" to="#">Returns</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col_padding-around">
                    <div class="footer-nav">
                        <ul class="footer-nav__list">
                            <li class="footer-nav__list-item">
                                <nuxt-link class="footer-nav__list-item-link" to="#">Home</nuxt-link>
                            </li>
                            <li class="footer-nav__list-item">
                                <nuxt-link class="footer-nav__list-item-link" to="#">Trousers</nuxt-link>
                            </li>
                            <li class="footer-nav__list-item">
                                <nuxt-link class="footer-nav__list-item-link" to="#">About</nuxt-link>
                            </li>
                            <li class="footer-nav__list-item">
                                <nuxt-link class="footer-nav__list-item-link" to="#">Contact Us</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2 footer__to-top">
                    <button type="button" class="to-top"><i class="fas fa-arrow-up"></i></button>
                </div>
            </div>
            <div class="footer__btm">
                <span class="footer__btm-text">Oorlyberg &copy; 2018. <a href="#" class="footer__btm-privacy">Privacy Policy</a></span>
            </div>
        </div>
    </footer>
</template>

<script>
import AppLogo from '~/components/other/AppLogo';
export default {
    components: {
        AppLogo
    }
}
</script>

<style lang="scss">
    .footer {
        padding: 90px 0 30px;
        background: #191919;
        position: relative;
        z-index: 40;
        &__social-list {
            display: flex;
            margin-top: 15px;
            &-item {
                margin-right: 15px;
                &:last-child {
                    margin-right: 0;
                }
                &-link {
                    color: #fff;
                    display: block;
                    width: 45px;
                    height: 45px;
                    line-height: 45px;
                    background: #212121;
                    text-align: center;
                    border-radius: 100%;
                    transition: .15s linear;
                    &:hover {
                        color: #acacac;
                    }
                }
            }
        }
        &-nav {
            &__list {
                &-item {
                    margin-bottom: 10px;
                    &-link {
                        color: #fff;
                        display: inline-block;
                        -webkit-transition: .15s linear;
                        transition: .15s linear;
                        &:hover {
                            color: #acacac;
                        }
                    }
                }
            }
        }
        &__btm {
            text-align: center;
            margin-top: 30px;
            padding-top: 30px;
            border-top: 1px solid #212121;
            &-text {
                color: #3b3b3b;
            }
            &-privacy {
                color: #3b3b3b;
            }
        }

        @media screen and (max-width: 767px) {
            padding: 30px 0;
            &__logo {
                text-align: center;
            }
            &__to-top {
                display: none;
            }
            &__social-list {
                justify-content: center;
            }
            &-nav {
                &__list {
                    &-item {
                        text-align: center;
                    }
                }
            }
            &__btm {
                margin-top: 0;
            }
        }
    }

    .to-top {
        color: #fff;
        display: block;
        width: 45px;
        height: 45px;
        line-height: 45px;
        background: #212121;
        text-align: center;
        border-radius: 100%;
        transition: .15s linear;
        border: none;
        margin-left: auto;
        &:hover {
            color: #acacac;
        }
    }
</style>
