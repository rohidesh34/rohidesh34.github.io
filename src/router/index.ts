import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import AgenticAI from '@/pages/AgenticAI.vue'
import APIsAndMCP from '@/pages/APIsAndMCP.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home | rohidesh.com'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About | rohidesh.com'
    }
  },
  {
    path: '/blog/agentic-ai',
    name: 'agentic-ai',
    component: AgenticAI,
    meta: {
      title: 'Agentic AI | rohidesh.com'
    }
  },
  {
    path: '/blog/apis-and-mcp',
    name: 'apis-and-mcp',
    component: APIsAndMCP,
    meta: {
      title: 'APIs and MCP | rohidesh.com'
    }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Set page title dynamically
router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string
  }
})

export default router