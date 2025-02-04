import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from './views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/tasks'
    },
    {
        path: '/tabs/',
        component: Tabs,
        children: [
            {
                path: '',
                redirect: '/tabs/tasks'
            },
            {
                path: 'tasks',
                component: () => import('@/views/TabsTasks.vue')
            },
            {
                path: 'focus',
                component: () => import('@/views/TabsFocus.vue')
            },
            {
                path: 'stats',
                component: () => import('@/views/TabsStats.vue')
            },
            {
                path: 'account',
                component: () => import('@/views/TabsAccount.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;