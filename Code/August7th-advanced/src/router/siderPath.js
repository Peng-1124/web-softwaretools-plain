import Main from '../views/common/main.vue'

export default [

    {
        path: '/pet',
        name: '/pet',
        meta: { name: 'pet', auth: true },
        component: Main,
        children: [
            {
                path: '/pet/show',
                name: '/pet/show',
                meta: { name: 'Show Pet', auth: true },
                component: () => import('../views/Pets/ShowPet')
            },
            {
                path: '/pet/add',
                name: '/pet/add',
                meta: { name: 'Add Pet', auth: true },
                component: () => import('../views/Pets/AddPet')
            }
        ]
    },

    {
        path: '/store',
        name: '/store',
        meta: { name: 'store', auth: true },
        component: () => import('../views/Stores/ShowStore')
    },
    {
        path: '/user',
        name: '/user',
        meta: { name: 'user', auth: true },
        component: () => import('../views/Users/ShowUser')
    }
]
