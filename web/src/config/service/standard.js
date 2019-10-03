import axios from 'axios'

const standard = axios.create({
    baseURL: 'http://localhost:3000',
    headers: { 'X-Custom-Header': 'foobar' }
})

// standard.interceptors.response.use(..., ...)

export default standard