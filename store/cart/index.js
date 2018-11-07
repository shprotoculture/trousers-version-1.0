import {countries} from './countries';
export const cart = {
    modules: {
        countries
    },
    state: {
        menuIsActive: false,
        saleAlertIsActive: true
    },
    mutations: {
        toggleMenu (state) {
            state.menuIsActive = !state.menuIsActive;
        },
        closeMenu (state) {
            state.menuIsActive = false;
        },
        closeSaleAlert (state) {
            state.saleAlertIsActive = false;
        }
    }
}