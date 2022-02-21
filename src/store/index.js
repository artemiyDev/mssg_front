import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

import auth from "@/store/auth";

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth
    },
    plugins: [
        createPersistedState({
            paths: ["auth"],
        })],
})
