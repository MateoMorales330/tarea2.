<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

function onSubmit() {
  error.value = ''

  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Completa todos los campos.'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Las contraseñas no coinciden.'
    return
  }

  auth.register({ name: name.value, email: email.value, password: password.value })
  router.push('/bienvenida')
}
</script>

<template>
  <section class="card">
    <h1>Registro</h1>
    <form @submit.prevent="onSubmit">
      <label>
        Nombre
        <input v-model="name" type="text" placeholder="Tu nombre" />
      </label>

      <label>
        Correo
        <input v-model="email" type="email" placeholder="ejemplo@mail.com" />
      </label>

      <label>
        Contraseña
        <input v-model="password" type="password" placeholder="********" />
      </label>

      <label>
        Confirmar contraseña
        <input v-model="confirmPassword" type="password" placeholder="********" />
      </label>

      <button type="submit">Registrar</button>

      <p class="help-text">
        ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link>
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
