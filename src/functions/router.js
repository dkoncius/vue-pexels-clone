import { createRouter, createWebHistory } from 'vue-router'
import People from '../pages/People.vue'
import Nature from '../pages/Nature.vue'
import Music from '../pages/Music.vue'
import Books from '../pages/Books.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: People },
    { path: '/people', component: People },
    { path: '/nature', component: Nature },
    { path: '/music', component: Music },
    { path: '/books', component: Books }
  ]
})
