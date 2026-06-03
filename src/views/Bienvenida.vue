<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

function onLogout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <section class="card welcome-card">
    <h1>Bienvenido{{ auth.user?.name ? `, ${auth.user.name}` : '' }}!</h1>
    <p class="message">
      Has iniciado sesión correctamente. Aquí puedes ver un mensaje simple de bienvenida.
    </p>
    <button @click="onLogout">Cerrar sesión</button>
  </section>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 520px;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.08);
  text-align: center;
}

h1 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.message {
  margin: 1rem 0 2rem;
  color: #4b5563;
}

button {
  padding: 0.95rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  background: #4f46e5;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background: #4338ca;
}
</style>
