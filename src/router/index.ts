import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Template from '../views/Template.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import NewLink from '../views/NewLink.vue'
import NewLink2 from '@/views/NewLink2.vue'
import PreView from '@/views/PreView.vue'
import SignUp from '@/views/SignUp.vue'
import Register from '@/views/Register.vue'
import TellUs from '@/views/TellUs.vue'
import PanelLayout from '@/layouts/PanelLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/template',
      name: 'template',
      component: Template,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        layout: PanelLayout
      },
    },
    {
      path: '/newLink',
      name: 'newLink',
      component: NewLink,
      meta: {
        layout: PanelLayout
      },
    },
    {
      path: '/newLink2',
      name: 'newLink2',
      component: NewLink2,
      meta: {
        layout: PanelLayout
      },
    },
    {
      path: '/preView',
      name: 'preView',
      component: PreView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path : '/register',
      name : '/register',
      component : Register
    },
    {
      path : '/tellUs',
      name : '/tellUs',
      component : TellUs
    }
  ]
})

export default router
