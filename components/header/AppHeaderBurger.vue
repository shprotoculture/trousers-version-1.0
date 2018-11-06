<template>
    <button type="button" class="burger" :class="{'burger_active': menuIsActive}" @click="toggleMenu">
        <span class="burger__line burger__line_f"></span>
        <span class="burger__line burger__line_s"></span>
        <span class="burger__line burger__line_t"></span>
    </button>
</template>

<script>
export default {
    computed: {
        menuIsActive () {
            return this.$store.state.header.menuIsActive;
        }
    },
    methods: {
        toggleMenu () {
            this.$store.commit('toggleMenu');
        }
    }
}
</script>

<style lang="scss">
    .burger {
        display: none;
        margin-left: -15px;
        position: relative;
        width: 48px;
        height: 48px;
        background: none;
        border: none;
        &__line {
            position: absolute;
            width: 18px;
            height: 2px;
            background: #000;
            top: 50%;
            left: 15px;
            transition: .25s .25s ease margin, .25s ease transform;
            &_f {
                margin-top: -7px;
            }
            &_s {
                margin-top: -1px;
            }
            &_t {
                margin-top: 5px;
            }
        }
        &_active {
            .burger {
                &__line {
                    margin-top: -1px;
                    transition: .25s ease margin, .25s .25s ease transform;
                    &_f, &_s {
                        transform: rotate(45deg);
                    }
                    &_t {
                        transform: rotate(-45deg);
                    }
                }
            }
        }


        @media screen and (max-width: 991px) {
            display: block;
        }
    }
</style>
