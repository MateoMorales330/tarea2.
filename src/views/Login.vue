<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

function onSubmit() {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'Por favor completa correo y contraseña.'
    return
  }

  const success = auth.login({ email: email.value, password: password.value })

  if (!success) {
    error.value = 'Correo o contraseña incorrectos.'
    return
  }

  router.push('/bienvenida')
}

function loginGuest() {
  email.value = 'invitado@gmail.com'
  password.value = '123456'
  error.value = ''
  const success = auth.login({ email: email.value, password: password.value })

  if (success) {
    router.push('/bienvenida')
  }
}
</script>

<template>
  <section class="card">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="onSubmit">
      <label>
        Correo
        <input v-model="email" type="email" placeholder="ejemplo@mail.com" />
      </label>

      <label>
        Contraseña
        <input v-model="password" type="password" placeholder="********" />
      </label>

      <button type="submit">Ingresar</button>
      <button type="button" class="guest-button" @click="loginGuest">Ingresar como invitado</button>

      <p class="help-text">
        Puedes usar <strong>invitado@gmail.com</strong> / <strong>123456</strong>
      </p>
      <p class="help-text">
        ¿No tienes cuenta? <router-link to="/registro">Regístrate aquí</router-link>
      </p>

      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </section>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 420px;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.08);
}

h1 {
  margin-bottom: 1rem;
  font-size: 1.6rem;
}

label {
  display: block;
  margin-bottom: 1rem;
  font-weight: 600;
}

input {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.9rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.95rem;
  border: none;
  border-radius: 0.75rem;
  background: #4f46e5;
  color: white;
  font-weight: 700;
  cursor: pointer;
  margin-top: 0.5rem;
}

button:hover {
  background: #4338ca;
}

.guest-button {
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.95rem;
  border: 1px solid #4f46e5;
  border-radius: 0.75rem;
  background: white;
  color: #4f46e5;
  font-weight: 700;
  cursor: pointer;
}

.guest-button:hover {
  background: #eef2ff;
}

.help-text {
  margin-top: 1rem;
  color: #4b5563;
}

.error {
  margin-top: 1rem;
  color: #b91c1c;
  font-weight: 600;
}
</style>
