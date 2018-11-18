import Vue from 'vue'
import Router from 'vue-router'
// import LeftContent from '@/components/LeftContent'
import desktop from '@/components/desktop'
import addTask from '@/components/addTask'

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
      path: '/addTask',
      name: 'addTask',
      meta:{
      	title: '添加任务'
      },
      component: addTask
    },
    {
      path: '/addTask/:id',
      name: 'addTask',
      meta:{
      	title: '添加任务'
      },
      component: addTask
    }
  ]
})
