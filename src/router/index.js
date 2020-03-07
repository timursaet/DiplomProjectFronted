import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('../components/Home.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../components/Authorization/login.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../components/Authorization/register.vue')
    }
  },
  {
    path: '/manager/admin',
    name: 'admin',
    component: function () {
      return import('../components/Admin/manager/main.vue')
    },
  },
  {
    path: '/manager/edit',
    name: 'edit',
    component: function () {
      return import('../components/Admin/manager/edit.vue')
    }
  },
  {
    path: '/manager/employee',
    name: 'employee',
    component: function () {
      return import('../components/Admin/manager/employee.vue')
    }
  },
  {
    path: '/employee/admin',
    name: 'admin',
    component: function () {
      return import('../components/Admin/employee/main.vue')
    },
  },
  {
    path: '/employee/edit',
    name: 'edit',
    component: function () {
      return import('../components/Admin/employee/edit.vue')
    }
  },
  {
    path: '/employee/task',
    name: 'task',
    component: function () {
      return import('../components/Admin/employee/task.vue')
    }
  },
  {
    path: '/employee/messenger',
    name: 'messenger',
    component: function () {
      return import('../components/Admin/employee/messenger.vue')
    }
  },
  {
    path: '/manager/task',
    name: 'task',
    component: function () {
      return import('../components/Admin/manager/task.vue')
    },
  },
  {
    path: '/manager/messenger',
    name: 'messenger',
    component: function () {
      return import('../components/Admin/manager/messenger.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
