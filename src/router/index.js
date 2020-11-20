import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/tasks/create',
    name: 'Create Task',
    component: () => import('../views/CreateTask.vue')
  },
  {
    path: '/tasks/edit/:id',
    name: 'Edit Task by ID',
    component: () => import('../views/EditTask.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404 Not Found',
    component: () => import('../views/404.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
