import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";

const routes = [
  { 
    name: 'home',
    path: '/', 
    component: Home,
  },
  { 
    name: 'login',
    path: '/login', 
    component: Login,
  },
  { 
    name: 'profile',
    path: '/profile', 
    component: Profile, 
    props:true 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;