<template>
    <div class="navigation">
        <ul class="navigation__list">
            <li class="navigation__list-item">
                <nuxt-link to="/" class="navigation__list-item-link">Home</nuxt-link>
            </li>
            <li class="navigation__list-item">
                <nuxt-link to="/trousers" class="navigation__list-item-link">Trousers</nuxt-link>
            </li>
            <li class="navigation__list-item">
                <nuxt-link to="/about" class="navigation__list-item-link">About</nuxt-link>
            </li>
            <li class="navigation__list-item">
                <nuxt-link to="/contact-us" class="navigation__list-item-link">Contact Us</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .navigation {
        &__list {
            display: flex;
            align-items: center;
            &-item {
                margin-right: 30px;
                &:last-child {
                    margin-right: 0;
                }
                &-link {
                    display: inline-block;
                    font-size: 13px;
                    font-weight: 400;
                    position: relative;
                    padding: 5px 0;
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

        @media screen and (max-width: 991px) {
            display: none;
        }
    }
</style>
