<template>
    <div class="checkbox">
        <label class="checkbox__label">
            <input type="checkbox" class="checkbox__input">
            <span class="checkbox__text">{{text}}</span>
        </label>
    </div>
</template>

<script>
export default {
    data () {
        return {
            text: 'Agree Policy'
        }
    }
}
</script>

<style lang="scss">
    .checkbox {
        &__input {
            position: absolute;
            opacity: 0;
            z-index: -1;
            &:checked + .checkbox__text {
                &:after {
                    animation: checkbox-selected .25s ease forwards;
                }
            }
        }
        &__text {
            display: inline-block;
            position: relative;
            padding-left: 20px;
            font-size: 13px;
            font-weight: 400;
            cursor: pointer;
            &:before {
                content: '';
                position: absolute;
                width: 15px;
                height: 15px;
                border: 1px solid #000;
                top: 0;
                left: 0;
            }
            &:after {
                content: '';
                position: absolute;
                width: 9px;
                height: 9px;
                top: 3px;
                left: 3px;
                background: #000;
                transition: .25s ease;
                transform: scale(0);
                // animation: checkbox-not-selected .25s ease forwards;
            }
        }
    }

    @keyframes checkbox-selected {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    @-webkit-keyframes checkbox-selected {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes checkbox-not-selected {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(0);
        }
    }
</style>
