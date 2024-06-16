import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Menu from './components/Menu.vue'
import Water from './components/Water.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Menu', component: Menu },
  { path: '/water', name: 'Water', component: Water }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

app.mount('#app')
