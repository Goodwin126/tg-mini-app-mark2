import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Menu from './components/Menu.vue'
import Water from './components/Water.vue'
import InputWater from './components/InputWater.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Menu', component: Menu },
  { path: '/water', name: 'Water', component: Water },
  { path: '/inputwater', name: 'InputWater', component: InputWater }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

app.mount('#app')
