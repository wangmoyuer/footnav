import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 单文件组件的引用，需要先在script中用import引用（同时命名）格式为import [命名] from [相对路径]再用components:{ [命名] }局部注册
// 最后在模板中使用，注意命名格式。如果是驼峰HeadNav或headNav，使用时就是<head-nav>
import Index from'../views/index/index'
import Manage from'../views/manage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/manage',
      name:'Manage',
      component:Manage
    }
  ]
})
