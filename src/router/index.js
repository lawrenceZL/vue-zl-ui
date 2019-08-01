import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/pages/Example'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Example',
      component: Example
    }
  ]
})
