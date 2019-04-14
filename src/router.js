import Vue from 'vue'
import Router from 'vue-router'
import PortfolioHome from './views/PortfolioHome'
import ProjectDetails from './views/ProjectDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PortfolioHome
    },
    {
      path: '/projects/:projectName',
      name: 'project',
      component: ProjectDetails
    }
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" './views/About.vue')
    }
    */
  ],
  mode: 'history'
})
