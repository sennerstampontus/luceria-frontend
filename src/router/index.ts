import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Example view

const ROUTES = {
  HOME: {
    path: '/',
    name: 'Home',
  },
  SERVICES: {
    path: '/tjanster',
    name: 'Tjänster',
  },
};

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: HomeView,
  },
  // Add other routes as needed
  {
    path: ROUTES.SERVICES.path,
    name: ROUTES.SERVICES.name,
    component: () => import('@/views/ServicesView.vue'), // Lazy-loaded route
    children: [
      {
        path: '/tjanster',
        redirect: '/tjanster/cvgranskning',
      },
      {
        path: 'cvgranskning',
        name: 'CVReview',
        component: () => import('@/views/CVReviewView.vue'),
      },
      {
        path: 'testintervju',
        name: 'TestInterview',
        component: () => import('@/views/TestInterviewView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
