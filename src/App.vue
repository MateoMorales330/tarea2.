<script setup>
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
</script>

<template>
  <div class="app-shell">
    <nav class="topbar">
      <router-link to="/inicio">Inicio</router-link>
      <router-link to="/login">Iniciar sesión</router-link>
      <router-link to="/registro">Registro</router-link>
      <router-link v-if="auth.isAuthenticated" to="/bienvenida">Bienvenida</router-link>
    </nav>

    <main class="page-container">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, sans-serif;
  background: #f7f7fb;
  color: #1f2937;
}

.topbar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #4f46e5;
  color: white;
}

.topbar a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.page-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
