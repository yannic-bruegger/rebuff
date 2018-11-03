import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LogIn from './views/LogIn.vue'
import Vehicles from './views/Vehicles.vue'
import Vehicle from './views/Vehicle.vue'
import Check from './views/Check.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: Vehicles
    },
    {
      path: '/vehicle',
      name: 'vehicle',
      component: Vehicle
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/check',
      name: 'check',
      component: Check
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
