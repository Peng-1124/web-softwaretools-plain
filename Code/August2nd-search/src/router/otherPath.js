// import Main from '@/views/common/main.vue'
// 其他路由,不在sidebar显示
export default [
  {
    path: '/home',
    name: '/home',
    meta: {name: 'Home', icon: 'el-icon-setting', auth: true},
    component: () => import('../views/home/home.vue')
  }
]
