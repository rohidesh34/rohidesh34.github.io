import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import AgenticAI from '@/pages/AgenticAI.vue'
import APIsAndMCP from '@/pages/APIsAndMCP.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/agentic-ai',
    name: 'agentic-ai',
    component: AgenticAI
  },
  {
    path: '/apis-and-mcp',
    name: 'apis-and-mcp',
    component: APIsAndMCP
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
