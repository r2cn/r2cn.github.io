import App from '../app'

export default [
    {
        path: '/',
        component: App,
        children: [
            {//首页
                path: '/',
                redirect:'/talent/knight',
                name: "home",
                component: resolve => require(['../pages/index/'], resolve)
            },
            {//天赋模拟器
                path: '/talent/:role',
                name: "talent",
                component: resolve => require(['../pages/talent/'], resolve)
            },
            {//天赋推荐
                path: '/talent/:role/id/:id',
                name: "special",
                component: resolve => require(['../pages/talent/'], resolve)
            },
            {
                path: '*',
                redirect: '/talent/knight'
            }
        ]
    }
]