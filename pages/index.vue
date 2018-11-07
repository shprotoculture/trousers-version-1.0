<template>
    <div class="home">
        <section class="section">
            <div class="intro">
                <picture intro__image-wrapper>
                    <source srcset="/images/02-s.jpg" media="(max-width:767px)">
                    <source srcset="/images/02-m.jpg" media="(max-width:991px)">
                    <img src="/images/02.jpg" alt="Oorlyberg trousers" class="intro__img">
                </picture>
                <div class="intro__content">
                    <h1 class="intro__title">Supa Dupa Trousers</h1>
                </div>
            </div>
        </section>
        


        <section class="section">
            <div class="section__content">
                <div class="container">
                    <div class="about-company row">
                        <div class="col-lg-6">
                            <div class="section__heading">
                                <h4 class="section__heading-title">It is a long <br> established fact that <br> a reader will be distracted.</h4>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-company__content">
                                <p class="about-company__text text_default">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                <p class="about-company__text text_default">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section class="section feature-order">
            <div class="section__content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <no-ssr>
                                <app-feature-slider></app-feature-slider>
                            </no-ssr>
                        </div>
                        <div class="col-md-6">
                            <div class="feature-order__content">
                                <div class="feature-order__heading">Supa Dupa Trousers Navy</div>
                                <div class="feature-order__price">150 EURO</div>
                                <div class="feature-order__text text_default">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                <nuxt-link to="/trousers" class="feature-order__call-to-action button button_transparent">Order Now</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section class="section">
            <div class="section__content">
                <div class="container">
                    <div class="section__heading">
                        <h4 class="section__heading-title">Samples</h4>
                    </div>
                    <div class="section__body">
                        <div class="samples-grid">
                            <div class="samples-grid__tile" v-for="(sample, i) in getSamples" :key="i">
                                <nuxt-link to="/trousers" class="samples-grid__tile-link">
                                    <img :src="'/images/' + sample.img" alt="" class="samples-grid__tile-img">
                                    <div class="samples-grid__tile-content">{{sample.name}}</div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section_grey">
            <div class="section__content">
                <div class="container">
                    <app-stoke></app-stoke>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import AppFeatureSlider from '~/components/other/AppFeatureSlider';
import AppStoke from '~/components/other/AppStoke';
export default {
    head: {
        title: 'Home - OORLYBERG.'
    },
    components: {
        AppFeatureSlider,
        AppStoke
    },
    computed: {
        getSamples () {
            return this.$store.state.samples.samples;
        }
    }
    
}
</script>




<style lang="scss">
    .intro {
        position: relative;
        &__content {
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__title {
            border: 5px solid #fff;
            color: #fff;
            font-size: 36px;
            font-weight: 400;
            padding: 35px;
        }

        @media screen and (max-width: 575px) {
            &__title {
                padding: 15px;
                font-size: 24px;
                border: 3px solid #fff;
            }
        }
    }


    .about-company {
        &__content {
            padding-left: 60px;
        }
        &__text {
            margin-bottom: 30px;
            &:last-child {
                margin-bottom: 0;
            }
        }

        @media screen and (max-width: 991px) {
            &__content {
                padding: 30px 0 0;
            }
        }
    }

    
    .feature-order {
        background: url(/images/bg.jpg) repeat-y center/100%;
        &__content {
            padding-left: 60px;
        }
        &__heading {
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 5px;
        }
        &__price {
            font-size: 14px;
            margin-bottom: 60px;
        }
        &__text {
            margin-bottom: 60px;
        }

        @media screen and (max-width: 991px) {
            &__price {
                margin-bottom: 30px;
            }
            &__text {
                margin-bottom: 30px;
            }
        }

        @media screen and (max-width: 767px) {
            background: #fff;
            &__content {
                padding: 60px 0 0;
            }
        }
    }
</style>



