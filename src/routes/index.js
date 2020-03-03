import Vue from "vue";
import VueRouter from  'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:()=>import("@/views/home/Home.vue")
    },
    {
      path:'/user',
      component:()=>import("@/views/user/userList.vue")
    },
    {
      path:'/pschedules',
      component:()=>import("@/views/schedules/personSchedules.vue")
    },
    {
      path:'/cschedules',
      component:()=>import("@/views/schedules/classSchedules.vue")
    },
  ]
})


export default router;