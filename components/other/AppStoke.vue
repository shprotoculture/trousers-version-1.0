<template>
    <div class="stoke">
        <span class="stoke__label">Hot!</span>
        <p class="stoke__text">При заказе от двух пар брюк скидка 50%</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .stoke {
        display: flex;
        justify-content: center;
        align-items: center;
        &__label {
            display: inline-block;
            padding: 10px 15px;
            text-transform: uppercase;
            background: #23b980;
            border-radius: 4px;
            margin-right: 15px;
            font-size: 14px;
            font-weight: 600;
            color: #fff;
            flex: 0 0 auto;
        }
        &__text {
            font-size: 24px;
        }

        @media screen and (max-width: 767px) {
            flex-wrap: wrap;
            &__label {
                margin-right: 0;
                margin-bottom: 15px;
            }
            &__text {
                font-size: 20px;
                text-align: center;
                width: 100%;
            }
        }
    }
</style>
