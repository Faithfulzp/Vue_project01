// 创建整个应用的路由器
import VueRouter from 'vue-router';

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'

// 创建路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component:About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component:News
                },
                {
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            name:'detail',
                            path: 'detail',
                            component: Detail,
                            // props的第一种写法,少用
                            // props: {a:1,b:2,}
                            // props的第二种写法，为真则把接收到的params参数传递给组件
                            // props: true,
                            // props的第三种写法，函数
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                },
            ]
        },
    ]
})