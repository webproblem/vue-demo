import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home'
import exam1 from '@/page/exam1'
import result from '@/page/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/exam1',
      name: 'exam1',
      component: exam1,
      props: (route) => {id: route.query.id}
    },
    {
      name: 'Result',
      path: '/result',
      component: result
    }
  ]
})
