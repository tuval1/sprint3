import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import emailApp from '@/components/emailApp/emailsList'
import booksApp from '@/components/booksApp/booksApp'
import mapApp from '@/components/mapApp/mapApp'

Vue.use(Router)
/*eslint-disable*/
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
      path: '/mapApp',
      name: 'mapApp',
      component: mapApp
    }
  ]
})
