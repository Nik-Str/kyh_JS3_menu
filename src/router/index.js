import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdultsView from '../views/AdultsView.vue';
import CoupleView from '../views/CoupleView.vue';
import ChildrenView from '../views/ChildrenView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/children',
    name: 'children',
    component: ChildrenView,
  },
  {
    path: '/coupleView',
    name: 'coupleView',
    component: CoupleView,
  },
  {
    path: '/adultsView',
    name: 'adultsView',
    component: AdultsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
