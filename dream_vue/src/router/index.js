import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

Vue.use(Index)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
