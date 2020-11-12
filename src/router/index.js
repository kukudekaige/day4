import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dotail from "../view/Dotail"
import List from "../view/List"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dotail/:id',
      name: 'Dotail',
      component: Dotail
    }, {
      path: '/list',
      name: 'List',
      component: List
    }
  ],
  mode: "history"
})
