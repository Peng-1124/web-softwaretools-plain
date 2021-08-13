import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios.create({
    baseURL: 'https://petstore.swagger.io/v2',
    headers: {
        'Content-Type': 'application/json'
    }
})

