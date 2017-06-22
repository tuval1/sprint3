import Vue from 'vue'
import Router from 'vue-router'
import CartPage from '@/pages/CartPage'
import HomePage from '@/pages/HomePage'
import emailApp from '@/pages/emailApp'
import booksApp from '@/pages/booksApp'
import placesApp from '@/pages/placesApp'
import ProductPage from '@/pages/ProductPage'

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
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    }
  ]
})
