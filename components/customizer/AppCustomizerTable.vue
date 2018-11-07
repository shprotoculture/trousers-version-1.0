<template>
    <div class="customizer__table">
        <div class="customizer__table-row" v-for="(field, i) in fields" :key="i">
            <div class="customizer__table-col">
                <label :for="'field-' + i" class="customizer__table-label">{{field.name}}</label>
            </div>
            <div class="customizer__table-col">
                <div class="customizer__table-input">
                    <no-ssr>
                        <the-mask class="customizer__table-input-field" mask="###" type="text" :masked="true" placeholder="Enter here" :id="'field-' + i"></the-mask>
                        <div class="customizer__table-input-unit">CM</div>
                    </no-ssr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            fields: [
                { name: 'Outseam' },
                { name: 'Waist' },
                { name: 'Hips' },
                { name: 'Crotch' },
                { name: 'Thigh' },
                { name: 'Knee' },
            ]
        }
    }
}
</script>

<style lang="scss">
    .customizer__table {
        border: 2px solid #f2f2f2;
        &-row {
            display: flex;
            border-bottom: 2px solid #f2f2f2;
            &:last-child {
                border-bottom: none;
            }
        }
        &-col {
            max-width: 50%;
            flex: 0 0 50%;
            height: 45px;
        }
        &-label {
            display: block;
            cursor: pointer;
            padding: 15px;
            font-size: 13px;
            font-weight: 400;
            transition: .15s ease;
            &:hover {
                background: #f2f2f2;
            }
        }
        &-input {
            position: relative;
            height: 100%;
            border-left: 2px solid #f2f2f2;
            &-field {
                width: 100%;
                height: 100%;
                border: none;
                padding: 15px;
                font-size: 13px;
                font-weight: 400;
            }
            &-unit {
                position: absolute;
                top: 0;
                right: 0;
                width: 45px;
                height: 45px;
                border-left: 2px solid #f2f2f2;
                font-size: 12px;
                font-weight: 400;
                text-transform: uppercase;
                text-align: center;
                line-height: 45px;
                background: #fff;
            }
        }
    }
</style>
