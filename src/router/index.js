import { createRouter, createWebHistory } from 'vue-router'
import signup from "../components/signup.vue";
import login from "../components/login.vue";
import dashboard from "../components/player.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
  {
      path:'/login',
      name:'login',
      component:login,
  },
  {
    path:'/signup',
    name:'signup',
    component:signup,
},
{
  path:'/dashboard',
  name:'dashboard',
  component:dashboard
}
  ]
})

export default router
