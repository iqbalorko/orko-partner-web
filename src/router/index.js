import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue'),
  },
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
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
