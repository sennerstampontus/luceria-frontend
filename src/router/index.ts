import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Example view

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  // Add other routes as needed
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue') // Lazy-loaded route
  // }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
