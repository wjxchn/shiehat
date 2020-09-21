const routers = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/database',
        name: 'database',
        meta: {
            title: '导师数据库'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/database/index/:index',
        name: 'detail',
        meta: {
            title: '导师数据库'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
];
export default routers;