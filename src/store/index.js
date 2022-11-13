import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './auth.module'
export default createStore({
    plugins: [createPersistedState()],
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth,
    },
});
