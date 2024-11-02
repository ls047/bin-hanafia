import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Teachers from '../views/teachers.vue'
import SpecialStudents from '../views/special-students.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 