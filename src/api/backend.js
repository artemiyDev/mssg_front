import store from '../store'
import axios from 'axios'


const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL
})


instance.interceptors.request.use(
    function (config) {
        const {url, headers} = config
        const {token} = store.state.auth
        if (url.startsWith("/api/v1")) {
            headers["Authorization"] = `Bearer ${token}`

        }
        return config
    },
    function (error) {
        return Promise.reject(error);
    }
)


export default instance