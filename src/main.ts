// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Install the router
app.use(router)

// Dynamic Page Title after each route
router.afterEach((to) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title as string;
    }
});

app.mount('#app')
