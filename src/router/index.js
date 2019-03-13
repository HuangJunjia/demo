import Vue from 'vue'
import Router from 'vue-router'

//引入页面
const Home = () => import("@/pages/Home")
const ScratchDemo = () => import("@/pages/component-demo/ScratchDemo")//刮刮乐
const TurnTableDemo = () => import("@/pages/component-demo/TurnTableDemo")//大转盘

Vue.use(Router)

let routes = [
  {
    //重定向去home
    path: "*",
    redirect: "/Home",
  },
  {
    //home
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    //刮刮乐组件
    path: "/ScratchDemo",
    name: "ScratchDemo",
    component: ScratchDemo
  },

  {
    //大转盘组件
    path: "/TurnTableDemo",
    name: "TurnTableDemo",
    component: TurnTableDemo
  }
]

export default new Router({
  mode: "history",
  routes: routes
})
