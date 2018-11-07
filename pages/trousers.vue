<template>
    <div class="customizer">
        <div class="container">
            <div class="section__content">
                <div class="section__heading section__heading_center">
                    <h4 class="section__heading-title">Customizer</h4>
                </div>
                <div class="section__body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="customizer__images">
                                <img src="/images/prod.svg" alt="">
                            </div>
                            <div class="customizer__instruction">
                                <p class="text_default">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <form>
                                <div class="customizer__options">
                                    <div class="customizer__samples">
                                        <div class="customizer__samples-grid">
                                            <div class="customizer__samples-grid-tile" v-for="(sample, i) in getSamples" :key="i">
                                                <div class="customizer-sample">
                                                    <input type="radio" class="customizer-sample__input" :id="'sample-' + i" name="sample" :value="sample.name">
                                                    <label :for="'sample-' + i" class="customizer-sample__label">
                                                        <img :src="'/images/' + sample.img" alt="">
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="customizer__product-details">
                                        <h4 class="customizer__product-details-heading">Product details:</h4>
                                        <p class="customizer__product-details-text text_default">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <app-customizer-table></app-customizer-table>
                                    <div class="customizer__submit">
                                        <button type="submit" class="button button_transparent">Add to cart</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCustomizerTable from '~/components/customizer/AppCustomizerTable';
export default {
    head: {
        title: 'Trousers - OORLYBERG.'
    },
    components: {
        AppCustomizerTable
    },
    computed: {
        getSamples () {
            return this.$store.state.samples.samples;
        }
    }
}
</script>

<style lang="scss">
    .customizer {
        &__instruction {
            padding-top: 60px;
            text-align: center;
        }





        &__options {
            padding-left: 60px;
        }





        &__samples {
            margin-bottom: 30px;
            &-grid {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -5px;
                &-tile {
                    max-width: 25%;
                    flex: 0 0 25%;
                    padding: 5px;
                }
            }

        }





        &-sample {
            &__input {
                position: absolute;
                opacity: 0;
                z-index: -1;
                &:checked {
                    & + label {
                        &:after {
                            border-color: #3fd884;
                        }
                        &:before {
                            content: '\f00c';
                            font-family: 'Font Awesome 5 Pro';
                            position: absolute;
                            right: 10px;
                            top: 10px;
                            width: 15px;
                            height: 15px;
                            border-radius: 100%;
                            background: #3fd884;
                            color: #fff;
                            text-align: center;
                            line-height: 15px;
                            font-size: 10px;
                        }
                    }
                }
            }
            
            &__label {
                display: block;
                position: relative;
                cursor: pointer;
                &:after {
                    content: '';
                    position: absolute;
                    display: block;
                    top: 0px;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                    border: 3px solid transparent;
                }
            }
        }






        &__product-details {
            margin-bottom: 30px;
            &-heading {
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 5px;
            }
        }

        &__submit {
            margin-top: 30px;
        }






        @media screen and (max-width: 991px) {
            &__options {
                padding-left: 0;
            }
        }

        @media screen and (max-width: 767px) {
            &__options {
                padding-top: 30px;
            }
            &__instruction {
                padding-top: 30px;
            }
        }
        
    }
</style>
