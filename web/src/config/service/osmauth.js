import axios from 'axios'

const osmauth = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org/search?email=welbermsantana@gmail.com',
    timeout: 1000,
    headers: { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})

export default osmauth