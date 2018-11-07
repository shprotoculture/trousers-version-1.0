<template>
    <div class="country-select" :class="{'country-select_active': selectIsActive}">
        <p class="country-select__text">{{placeholder}}</p>
        <span class="country-select__icon"><i class="fal fa-chevron-down"></i></span>
        <select @change="onChange($event);">
            <option :value="country.name" v-for="(country, i) in countries" :key="i">{{country.name}}</option>
        </select>
    </div>
</template>

<script>
export default {
    data () {
        return {
            countries: [
                {name: 'United States', shippingCost: 30},
                {name: 'Germany', shippingCost: 20},
                {name: 'Netherlands', shippingCost: 10},
            ],
            placeholder: 'Country',
            selectIsActive: false,
        }
    },
    methods: {
        onChange (e) {
            let cost = this.countries[e.target.selectedIndex].shippingCost;
            this.selectIsActive = true;
            this.placeholder = e.target.value;
            this.$emit('getCost', cost);
        }
    },
}
</script>

<style lang="scss">
.country-select {
    position: relative;
    padding: 15px;
    border: 1px solid #e6e6e6;
    &__text {
        position: relative;
        z-index: 1;
        font-size: 13px;
        font-weight: 400;
        color: #c6c6c6;
    }
    &__icon {
        position: absolute;
        z-index: 2;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        display: inline-block;
        color: #c6c6c6;
        i {
            font-size: 13px;
            font-weight: 400;
        }
    }
    select {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 3;
        opacity: 0;
    }
    &_active {
        .country-select__text {
            color: #000;
        }
    }
}

</style>
