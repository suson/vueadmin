import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import LeftContent from '@/components/LeftContent'
import desktop from '@/components/desktop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'desktop',
      meta:{
      	title: '首页'
      },
      component: desktop
    },
    {
      path: '/index',
      name: 'desktop',
      meta:{
      	title: '首页'
      },
      component: desktop
    }
  ]
})
