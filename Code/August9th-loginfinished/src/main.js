import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Router from 'vue-router'


import 'element-ui/lib/theme-chalk/index.css'
import 'css/reset.css'
import 'css/element-ui.css'

import './utils/Axios'

import locale from 'element-ui/lib/locale/lang/EN'

Vue.use(ElementUI, {locale})

// Vue.use(ElementUI)
Vue.config.productionTip = false

// 路由守卫
router.beforeEach((to, from, next) => {
    next()
})

// Vue.prototype.$http = axios

// 解决点击同一路由下报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
