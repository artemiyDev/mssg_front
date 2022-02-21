import axios from "../api/backend";

export default {
    namespaced: true,
    state: () => ({
        token: null,
        user: null
    }),
    getters: {
        isAuthenticated: (state) => {
            return state.user !== null && state.token !== null;
        }
    },
    actions: {
        async LOGIN_WITH_CREDENTIALS({commit, dispatch}, credentials) {
            credentials.username = credentials.email.toLowerCase()
            await axios.post("/api/v1/auth/token/", credentials).then(response => {
                commit("SET_TOKEN", response.data.token)
            })
            await dispatch("FETCH_USER")
        },
        async FETCH_USER({commit}) {
            const response = await axios.get("/api/v1/users/me/")
            commit("SET_USER", response.data)
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, user) {
            state.user = user
        }
    }
}