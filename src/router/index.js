import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index'

const routes = [
    {
        path: '/dashboard',
        component: () => import('../views/layouts/Layouts'),
        meta: true,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: import('../views/dashboard/Dashboard'),
                meta: {
                    auth: true,
                    breadCrumb: 'Dashboard',
                },
            },
            {
                path: '/patients',
                name: 'Patients',
                component: import('../views/patient/Patients'),
                meta: {
                    auth: true,
                    breadCrumb: 'Dashboard',
                },
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        // console.log('record', record.meta.auth)
        if(store.state.auth.user){
            var api_token = localStorage.getItem('api_token');
            if(api_token) {
                if (!store.state.auth.loggedIn) {
                    next({
                        name: 'login'
                    })
                } else {
                    next();
                }
            }else{
                next({
                    name: 'login'
                })
            }
        }else{
            next({
                name: 'login'
            })
        }
    } else {
        next();
    }
})
export default router;
