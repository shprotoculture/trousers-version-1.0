import Vue from 'vue';
import Vuex from 'vuex';

import {header} from './header/index';
import {samples} from './samples/index';
import {cart} from './cart/index';

Vue.use(Vuex);

const store = () => new Vuex.Store({
    modules: {
        header,
        samples,
        cart
    }
 
});

export default store;