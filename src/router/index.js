import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/FAQView.vue'),
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/CardsView.vue'),
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('../views/SolicitarView.vue'),
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue'),
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/FinancialView.vue'),
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('../views/SecurityView.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
    },
    {
      path: '/nearby',
      name: 'nearby',
      component: () => import('../views/NearView.vue'),
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: () => import('../views/RetoBAM.vue'),
    },
    {
      path: '/gauge',
      name: 'gauge',
      component: () => import('../views/GaugeView.vue'),
    },
    {
      path: '/prizes',
      name: 'prizes',
      component: () => import('../views/PrizesView.vue'),
    },
    {
      path: '/giveaways',
      name: 'giveaways',
      component: () => import('../views/GiveawayView.vue'),
    },
    {
      path: '/aprobada',
      name: 'aprobada',
      component: () => import('../views/SuccessCard.vue'),
    },
  ],
})

export default router
