import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketing from "@/views/Marketing";
import Finance from "@/views/Finance"
import Personnel from "@/views/Personnel";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/marketing',
    name: 'Home',
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: Marketing
  },
  {
    path: '/finance',
    name: 'Finance',
    component: Finance
  },
  {
    path: '/personnel',
    name: 'Personnel',
    component: Personnel
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
