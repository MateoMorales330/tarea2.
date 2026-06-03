import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Inicio from '../views/Inicio.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Bienvenida from '../views/Bienvenida.vue'

const routes = [
  { path: '/', redirect: '/inicio' },
  { path: '/inicio', name: 'Inicio', component: Inicio },
  { path: '/login', name: 'Login', component: Login },
  { path: '/registro', name: 'Registro', component: Registro },
  {
    path: '/bienvenida',
    name: 'Bienvenida',
    component: Bienvenida,
    meta: { requiresAuth: true },
  },
  { path: '/:pathMatch(.*)*', redirect: '/inicio' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next('/login')
  }

  if ((to.path === '/login' || to.path === '/registro') && auth.isAuthenticated) {
    return next('/bienvenida')
  }

  next()
})

export default router
