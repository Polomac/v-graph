import './assets/main.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import { createClient } from 'villus';
import App from './App.vue'
import router from './router'

const app = createApp({
  render: () => h(App),
})

const client = createClient({
  url: import.meta.env.VITE_API_URL, // your endpoint.
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(client)
app.mount('#app')
