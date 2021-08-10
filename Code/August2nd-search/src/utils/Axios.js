import Vue from 'vue'
import axios from 'axios'
import Router from '../router/index'
import { Message } from 'element-ui'

Vue.prototype.$axios = axios.create({
    baseURL: 'https://petstore.swagger.io/v2',
    headers: {
        'Content-Type': 'application/json'
    }
})

