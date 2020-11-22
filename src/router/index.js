import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      protected: true
    }
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('../views/Tasks.vue'),
    meta: {
      protected: true
    }
  },
  {
    path: '/tasks/create',
    name: 'Create Task',
    component: () => import('../views/CreateTask.vue'),
    meta: {
      protected: true
    }
  },
  {
    path: '/tasks/edit/:id',
    name: 'Edit Task by ID',
    component: () => import('../views/EditTask.vue'),
    meta: {
      protected: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404 Not Found',
    component: () => import('../views/404.vue')
  },
  {
    path: '/user',
    name: 'Account',
    component: () => import('../views/User.vue'),
    meta: {
      protected: true
    }
  },
  {
    path: '/register',
    name: 'Sign In',
    component: () => import('../views/Register.vue'),
    meta: {
      toenter: true
    }
  },
  {
    path: '/login',
    name: 'Sign Up',
    component: () => import('../views/Login.vue'),
    meta: {
      toenter: true
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from, next) => {
  if(to.meta.protected === true){
    if(store.getters.authUser){
      next();
    }else{
      next('/login');
    }
  } else if( to.meta.toenter === true ) {

    if(!store.getters.authUser){
      next();
    }else{
      next('/');
    }

  } else {
    next();
  }
});

export default router
