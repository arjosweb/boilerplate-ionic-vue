import { createStore } from 'vuex'
import module from "./modules/module";

const store = createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        module,
    }
});

export default store;
