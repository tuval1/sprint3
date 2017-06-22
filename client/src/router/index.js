import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import emailApp from '@/pages/emailApp'
import booksApp from '@/pages/booksApp'
import placesApp from '@/pages/placesApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/booksApp',
      name: 'booksApp',
      component: booksApp
    },
    {
      path: '/emailApp',
      name: 'emailApp',
      component: emailApp
    },
    {
      path: '/placesApp',
      name: 'placesApp',
      component: placesApp
    }
  ]
})
