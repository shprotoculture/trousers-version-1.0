<template>
    <div class="cart">
        <div class="section__content">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="cart__shipping">
                            <div class="cart__shipping-heading">Shipping address</div>
                            <div class="cart__shipping-body">
                                <form >
                                    <div class="row">
                                        <div class="col-md-6 col_padding-around">
                                            <div class="input">
                                                <input type="text" placeholder="First Name*">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col_padding-around">
                                            <div class="input">
                                                <input type="text" placeholder="Last Name*">
                                            </div>
                                        </div>
                                        <div class="col-md-12 col_padding-around">
                                            <div class="input">
                                                <input type="text" placeholder="Email*">
                                            </div>
                                        </div>
                                        <div class="col-md-12 col_padding-around">
                                            <div class="input">
                                                <input type="text" placeholder="Phone Number*">
                                            </div>
                                        </div>
                                        <div class="col-md-12 col_padding-around">
                                            <div class="input">
                                                <input type="text" placeholder="Address*">
                                            </div>
                                        </div>
                                        <div class="col-md-12 col_padding-around">
                                            <div class="input">
                                                <input type="text" placeholder="Apartment, suite, etc.*">
                                            </div>
                                        </div>
                                        <div class="col-md-12 col_padding-around">
                                            <div class="input">
                                                <input type="text" placeholder="City*">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col_padding-around">
                                            <app-country-select @getCost="shippingCost = $event"></app-country-select>
                                        </div>
                                        <div class="col-md-6 col_padding-around">
                                            <div class="input">
                                                <input type="text" placeholder="City*">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart__shipping-submit">
                                        <app-checkbox></app-checkbox>
                                        <button type="submit" class="button button_transparent">Order</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 order-first order-md-last">
                        <div class="cart__products">
                            <div class="cart__products-heading">Products in cart</div>
                            <div class="cart__products-list">
                                <div class="cart__products-list-item">
                                    <div class="cart__products-list-item-top">
                                        <div class="row">
                                            <div class="col-lg-3 col-4 col_padding-around">
                                                <img src="/images/s03.jpg" alt="">
                                            </div>
                                            <div class="col-lg-9 col-8 col_padding-around">
                                                <div class="cart__products-list-item-info">
                                                    <span class="cart__products-list-item-name">Supa Dupa Trousers-6</span>
                                                    <button type="button" class="cart__products-list-item-remove"><i class="fal fa-times"></i></button>
                                                </div>
                                                <div class="cart__products-list-item-cost">200 EURO</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart__products-list-item-dimensions">
                                        <h5 class="cart__products-list-item-dimensions-title">Dimensions</h5>
                                        <ul class="dimensions-list">
                                            <li class="dimensions-list__item">
                                                <span class="dimensions-list__item-content">Outseam</span>
                                                <span class="dimensions-list__item-content">200cm</span>
                                                <div class="dimensions-list__item-line"></div>
                                            </li>
                                            <li class="dimensions-list__item">
                                                <span class="dimensions-list__item-content">Outseam</span>
                                                <span class="dimensions-list__item-content">200cm</span>
                                                <div class="dimensions-list__item-line"></div>
                                            </li>
                                            <li class="dimensions-list__item">
                                                <span class="dimensions-list__item-content">Outseam</span>
                                                <span class="dimensions-list__item-content">200cm</span>
                                                <div class="dimensions-list__item-line"></div>
                                            </li>
                                            <li class="dimensions-list__item">
                                                <span class="dimensions-list__item-content">Outseam</span>
                                                <span class="dimensions-list__item-content">200cm</span>
                                                <div class="dimensions-list__item-line"></div>
                                            </li>
                                        </ul>
                                        <nuxt-link to="/trousers" class="cart__products-list-item-dimensions-edit">Edit</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCountrySelect from '~/components/cart/AppCountrySelect';
import AppCheckbox from '~/components/other/AppCheckbox';
export default {
    components: {
        AppCountrySelect,
        AppCheckbox
    },
    data () {
        return {
            shippingCost: 0
        }
    }
}
</script>

<style lang="scss">
    .cart {
        &__shipping {
            &-heading {
                font-size: 24px;
                font-weight: 300;
                margin-bottom: 15px;
            }
            &-submit {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        &__products {
            padding-left: 60px;
            &-heading {
                font-size: 24px;
                font-weight: 300;
                margin-bottom: 15px;
            }
            &-list {
                &-item {
                    padding-bottom: 30px;
                    margin-bottom: 30px;
                    border-bottom: 1px solid #f2f2f2;
                    &-info {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                    }
                    &-name {
                        font-size: 18px;
                        font-weight: 400;
                        margin-bottom: 5px;
                        display: inline-block;
                        padding-right: 5px;
                    }
                    &-remove {
                        background: none;
                        border: none;
                        font-size: 20px;
                    }
                    &-cost {
                        font-size: 13px;
                        font-weight: 400;
                    }
                    &-dimensions {
                        &-title {
                            font-size: 18px;
                            font-weight: 400;
                            margin-bottom: 5px;
                        }
                        &-edit {
                            display: inline-block;
                            padding: 5px 25px;
                            border: 1px solid #000;
                            color: #000;
                            font-size: 13px;
                            font-weight: 600;
                            transition: .15s ease;
                            &:hover {
                                background: #000;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }


        @media screen and (max-width: 991px) {
            &__products {
                padding-left: 0;
            }
        }

        @media screen and (max-width: 767px) {
            &__products {
                padding-bottom: 60px;
            }
        }
    }

    .dimensions-list {
        margin-bottom: 15px;
        &__item {
            position: relative;
            display: flex;
            justify-content: space-between;
            margin-left: -5px;
            margin-right: -5px;
            margin-bottom: 10px;
            &-content {
                display: inline-block;
                background: #fff;
                position: relative;
                z-index: 2;
                padding: 0 5px;
                font-size: 13px;
            }
            &-line {
                position: absolute;
                width: 100%;
                height: 2px;
                background: url(/images/border-btm.svg) repeat-x;
                background-size: contain;
                z-index: 1;
                bottom: 3px;
                left: 0;
            }
        }
    }
</style>
