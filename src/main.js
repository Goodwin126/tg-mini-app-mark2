import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Menu from './components/Menu.vue'
import Water from './components/Water.vue'
import InputWater from './components/InputWater.vue'
import Eating from './components/Eating.vue'

const app = createApp(App)
const pinia = createPinia()

const routes = [
  { path: '/', name: 'Menu', component: Menu },
  { path: '/water', name: 'Water', component: Water },
  { path: '/inputwater', name: 'InputWater', component: InputWater },
  { path: '/eating', name: 'Eating', component: Eating }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(pinia)
app.use(router)

app.mount('#app')
