import Vue from 'vue';
import Vuex from 'vuex';

import {header} from './header/index';
import {samples} from './samples/index';

Vue.use(Vuex);

const store = () => new Vuex.Store({
    modules: {
        header,
        samples
    }
 
});

export default store;