<template>
    <div class="contact-us">
        <section class="section section-contact">
            <div class="container">
                <div class="section__content">
                    <div class="section__heading contact-us__title">
                        <h4 class="section__heading-title">Contact Us</h4>
                    </div>
                    <div class="contact-us__form-wrapper section__body">
                        <form>
                            <div class="input">
                                <input type="text" placeholder="Name*">
                            </div>
                            <div class="input">
                                <input type="text" placeholder="Email*">
                            </div>
                            <div class="input">
                                <input type="text" placeholder="Phone Number*">
                            </div>
                            <div class="textarea">
                                <textarea placeholder="Message..."></textarea>
                            </div>
                            <button class="button button_transparent">Send</button>
                            <p class="contact-us__text text_default">You can also reach us via e-mail at trousers@gmail.com</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .contact-us {
        &__title {
            text-align: center;
        }
        &__form-wrapper {
            max-width: 600px;
            margin: 0 auto;
        }
        &__text {
            text-align: center;
            margin-top: 60px;
        }

        @media screen and (max-width: 575px) {
            &__text {
                margin-top: 30px;
            }
        }
    }
</style>
