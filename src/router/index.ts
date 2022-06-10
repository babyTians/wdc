import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import AccountView from '../views/AccountView.vue'
import NameView from '../views/NameView.vue'
import PhoneView from '../views/PhoneView.vue'
import PasswordView from '../views/PasswordView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView
  },
  {
    path: '/name',
    name: 'name',
    component: NameView
  },
  {
    path: '/phone',
    name: 'phone',
    component: PhoneView
  },
  {
    path: '/password',
    name: 'password',
    component: PasswordView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
