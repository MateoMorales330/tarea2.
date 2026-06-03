<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

function goToLogin() {
  router.push('/login')
}

function goToRegister() {
  router.push('/registro')
}

function goToWelcome() {
  router.push('/bienvenida')
}
</script>

<template>
  <section class="card home-card">
    <h1>Bienvenido a la aplicación</h1>
    <p class="intro">
      Aquí puedes iniciar sesión, registrarte o usar el acceso rápido de invitado. Esta página de
      inicio sirve como puerta de entrada al sistema.
    </p>

    <div class="actions">
      <button @click="goToLogin">Iniciar sesión</button>
      <button @click="goToRegister">Registrarse</button>
      <button v-if="auth.isAuthenticated" @click="goToWelcome">Ir a bienvenida</button>
    </div>
    <div class="info-block">
      <h2>Acceso rápido</h2>
      <p>Si quieres probar sin registrar, usa:</p>
      <p class="credentials"><strong>invitado@gmail.com</strong> / <strong>123456</strong></p>
    </div>
  </section>
</template>

<style scoped>
.home-card {
  width: 100%;
  max-width: 560px;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.08);
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.intro {
  margin-bottom: 1.5rem;
  color: #4b5563;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.actions button {
  min-width: 160px;
  padding: 0.95rem 1.2rem;
  border: none;
  border-radius: 0.75rem;
  background: #4f46e5;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.actions button:hover {
  background: #4338ca;
}

.info-block {
  background: #eef2ff;
  border-radius: 14px;
  padding: 1.5rem;
  color: #1e293b;
}

.credentials {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #111827;
}
</style>
