import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from './views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tasks',
        component: Tabs,
        children: [
            {
                path: 'tasks',
                component: () => import('@/views/TabsTasks.vue')
            },
            {
                path: 'focus',
                component: () => import('@/views/TabsFocus.vue')
            },
            {
                path: 'insights',
                component: () => import('@/views/TabsInsights.vue')
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