<template>
    <transition name="sale-alert">
        <div class="sale-alert" v-if="saleAlertIsActive">
            <span class="sale-alert__text">Sale 50% Off</span>
            <button type="button" class="sale-alert__close" @click="closeSaleAlert">
                <i class="sale-alert__close-icon fal fa-times"></i>
            </button>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        saleAlertIsActive () {
            return this.$store.state.header.saleAlertIsActive;
        },
    },
    methods: {
        closeSaleAlert () {
            this.$store.commit('closeSaleAlert');
        }
    }
}
</script>

<style lang="scss">
    .sale-alert {
        position: relative;
        background: #000;
        width: 100%;
        height: 30px;
        text-align: center;
        z-index: 40;
        transition: .25s ease;
        overflow: hidden;
        &__text {
            font-size: 16px;
            font-weight: 300;
            color: #fff;
            line-height: 30px;
        }
        &__close {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 0;
            right: 0;
            border: none;
            background: none;
            color: #fff;
            font-size: 18px;
        }
        &-leave-to {
            height: 0;
        }
    }
</style>
