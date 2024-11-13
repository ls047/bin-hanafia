import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Teachers from '../views/teachers.vue'
import SpecialStudents from '../views/special-students.vue'
import News from '../views/news.vue'
import TeachersDash from '../views/dashboard/teachers-dash.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/special-students',
    name: 'SpecialStudents',
    component: SpecialStudents
  },
  {
    path: '/teachers-info/:id',
    name: 'TeacherProfile',
    component: () => import('../views/teachers-profile.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/news/:id',
    name: 'NewsSpecial',
    component: () => import('../views/news-special.vue')
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/dashboard/dashIndex.vue"),
  },
  {
    path: "/dashboard/teachers",
    name: "TeachersDash",
    component: () => import("../views/dashboard/teachers-dash.vue"),
  },
  {
    path: '/dashboard/news',
    name: 'NewsDash',
    component: () => import('../views/dashboard/newsDash.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/dashboard/login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Check if user is authenticated by looking for token in localStorage
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  
  // Case 1: Trying to access protected route while not authenticated
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login') // Redirect to login page
  } 
  // Case 2: Trying to access login page while already authenticated
  else if (to.path === '/login' && isAuthenticated) {
    next('/dashboard') // Redirect to dashboard
  }
  // Case 3: All other cases - allow navigation
  else {
    next()
  }
})

export default router 