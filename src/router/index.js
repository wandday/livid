import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Movies from '../views/Movies.vue'
import Movie from '../views/Movie.vue'
import Account from '../views/Account.vue'
import Payment from '../views/Payment.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },

  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie
  },

  {
    path: '/account',
    name: 'Account',
    component: Account
  },

  {
    path: '/payment/:id',
    name: 'Payment',
    component: Payment
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
