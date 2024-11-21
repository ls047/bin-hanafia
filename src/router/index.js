import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Teachers from '../views/teachers.vue'
import SpecialStudents from '../views/special-students.vue'
import News from '../views/news.vue'
import TeachersDash from '../views/dashboard/teachers-dash.vue'
import Form from '../views/form.vue'
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
    path: '/form',
    name: 'Form',
    component: () => import('../views/form.vue')
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
    name: 'news-special',
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
    path: '/dashboard/students',
    name: 'StudentsDash',
    component: () => import('../views/dashboard/studentDash.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/dashboard/login.vue')
  },
  {
    path: '/dashboard/student',
    name: 'StudentDashboard',
    component: () => import('../views/dashboard/studentDash.vue'),
    meta: {
      requiresAuth: true,
      role: 'student'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router 