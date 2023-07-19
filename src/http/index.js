import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost/',
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded",
    }
})

http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function (erro) {
    return Promise.reject(erro)
})

export default http