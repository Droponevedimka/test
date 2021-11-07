import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from "./components/Home.vue";
import LessonsComponent from "./components/Lessons.vue";


Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    hashbang: false,
    routes: [
        { path: '*',            name: 'home',       component: HomeComponent },
        { path: '/login',       name: 'login',       component: HomeComponent },
        { path: '/lessons',     name: 'lessons',    component: LessonsComponent, meta: {requiresAuth: true} },
    ]    
})

// route.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//       if (store.getters.isLoggedIn) {
//           console.log(store.getters.isLoggedIn)
//         next()
//         return
//       }
//       next('/login') 
//     } else {
//       next() 
//     }
// })

export default routes