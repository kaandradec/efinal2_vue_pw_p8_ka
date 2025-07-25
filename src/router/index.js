import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearDoctorView from '@/views/CrearDoctorView.vue'
import CrearPacienteView from '@/views/CrearPacienteView.vue'
import AgendarCitaView from '@/views/AgendarCitaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/creardoctor',
    name: 'creardoctor',
    component: CrearDoctorView
  },
  {
    path: '/crearpaciente',
    name: 'crearpaciente',
    component: CrearPacienteView
  },
  {
    path: '/agendarcita',
    name: 'agendarcita',
    component: AgendarCitaView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
