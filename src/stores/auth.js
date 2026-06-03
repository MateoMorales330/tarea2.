import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'auth-user'
const DEFAULT_USER = {
  name: 'Usuario Invitado',
  email: 'invitado@gmail.com',
  password: '123456',
}

function loadUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null
  } catch {
    return null
  }
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref(loadUser())
  const isAuthenticated = computed(() => !!user.value)

  function saveUser(payload) {
    user.value = {
      name: payload.name.trim(),
      email: payload.email.trim().toLowerCase(),
      password: payload.password,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user.value))
  }

  function clearUser() {
    user.value = null
    localStorage.removeItem(STORAGE_KEY)
  }

  function register(payload) {
    saveUser(payload)
  }

  function login(payload) {
    const email = payload.email.trim().toLowerCase()
    const password = payload.password

    const matchesDefault = email === DEFAULT_USER.email && password === DEFAULT_USER.password

    if (matchesDefault) {
      saveUser(DEFAULT_USER)
      return true
    }

    if (!user.value) {
      return false
    }

    return user.value.email === email && user.value.password === password
  }

  function logout() {
    clearUser()
  }

  return {
    user,
    isAuthenticated,
    register,
    login,
    logout,
  }
})
