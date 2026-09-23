import { createRouter, createWebHistory, viewDepthKey } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import Patients from '@/components/Patients.vue'
import Signup from '@/components/Signup.vue'
import ViewPatient from '@/components/ViewPatient.vue'
import Profile from '@/components/Profile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage

    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/patients',
      component: Patients
    },
    {
      path: '/profile',
      component:Profile
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/viewpatient',
      component: ViewPatient
    },
    {
      path: '/homepage',
      component: HomePage
    },
  ],
})

export default router
