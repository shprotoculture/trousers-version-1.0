<template>
    <div class="about">
        <div class="col-left">
            <no-ssr>
                <scrollactive class="col-left__anchors" active-class="col-left__anchors-link--active" :offset="100">
                    <a href="#who-we-are" class="scrollactive-item col-left__anchors-link">Who We Are</a>
                    <a href="#our-product" class="scrollactive-item col-left__anchors-link">Our Product</a>
                    <a href="#delivery" class="scrollactive-item col-left__anchors-link">Delivery</a>
                    <a href="#faq" class="scrollactive-item col-left__anchors-link">FAQ</a>
                    <a href="#alterations" class="scrollactive-item col-left__anchors-link">Alterations</a>
                    <a href="#returns" class="scrollactive-item col-left__anchors-link">Returns</a>
                </scrollactive>
            </no-ssr>
        </div>
        <div class="col-main">
            <div class="col-main__content">
                <section class="section section-about" id="who-we-are">
                    <div class="section__content">
                        <div class="section__heading">
                            <h4 class="section__heading-title">Who We Are</h4>
                        </div>
                        <div class="section__body">
                            <p class="text_default about__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p class="text_default about__text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                </section>
                <section class="section section-about" id="our-product">
                    <div class="section__content">
                        <div class="section__heading">
                            <h4 class="section__heading-title">Our Product</h4>
                        </div>
                        <div class="section__body">
                            <p class="text_default about__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p class="text_default about__text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                </section>
                <section class="section section-about" id="delivery">
                    <div class="section__content">
                        <div class="section__heading">
                            <h4 class="section__heading-title">Delivery</h4>
                        </div>
                        <div class="section__body">
                            <p class="text_default about__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p class="text_default about__text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                </section>
                <section class="section section-about" id="faq">
                    <div class="section__content">
                        <div class="section__heading">
                            <h4 class="section__heading-title">FAQ</h4>
                        </div>
                        <div class="section__body">
                            <p class="text_default about__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p class="text_default about__text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                </section>
                <section class="section section-about" id="alterations">
                    <div class="section__content">
                        <div class="section__heading">
                            <h4 class="section__heading-title">Alterations</h4>
                        </div>
                        <div class="section__body">
                            <p class="text_default about__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p class="text_default about__text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                </section>
                <section class="section section-about" id="returns">
                    <div class="section__content">
                        <div class="section__heading">
                            <h4 class="section__heading-title">Returns</h4>
                        </div>
                        <div class="section__body">
                            <p class="text_default about__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p class="text_default about__text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
       
    }
}
</script>

<style lang="scss">
    .col-left {
        width: 25%;
        min-width: 240px;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        transition: .5s linear;
        &__anchors {
            &-link {
                display: block;
                margin-bottom: 30px;
                font-size: 14px;
                font-weight: 400;
                text-transform: uppercase;
                &--active {
                    font-weight: 500;
                }
            }
            
        }
        
        @media screen and (max-width: 992px) {
            display: none;
        }
    }

    .col-main {
        position: relative;
        z-index: 1;
        padding-left: 25%;
        padding-right: 5%;
        &__content {
            max-width: 600px;
            padding: 0 15px;
        }
        
        @media screen and (max-width: 991px) {
            padding: 0 5%;
            &__content {
                max-width: none;
            }
        }

        @media screen and (max-width: 575px) {
            padding: 0 15px;
            &__content {
                padding: 0;
            }
        }
    }

    .about__text {
        margin-bottom: 30px;
        &:last-child {
            margin-bottom: 0;
        }
    }
</style>
