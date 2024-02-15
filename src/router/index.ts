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
  ABOUT: {
    path: '/om-oss',
    name: 'Om oss',
  },
  CONTACT: {
    path: '/kontakt',
    name: 'Kontakt',
  },
  SEND_CV: {
    path: '/skicka/cv',
    name: 'Skicka CV',
  },
  SEND_INTERVIEW: {
    path: '/skicka/intervju',
    name: 'Skicka Intervju',
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
  {
    path: ROUTES.ABOUT.path,
    name: ROUTES.ABOUT.name,
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: ROUTES.CONTACT.path,
    name: ROUTES.CONTACT.name,
    component: () => import('@/views/ContactView.vue'),
  },
  {
    path: ROUTES.SEND_CV.path,
    name: ROUTES.SEND_CV.name,
    component: () => import('@/views/FormsView.vue'),
  },
  {
    path: ROUTES.SEND_INTERVIEW.path,
    name: ROUTES.SEND_INTERVIEW.name,
    component: () => import('@/views/FormsView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
