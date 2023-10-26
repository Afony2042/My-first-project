import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import MainPage from './components/MainPage.vue'
import ChatPage from './components/ChatPage.vue'
import ApiPage from './components/ApiPage.vue'
import NotFoundView from './components/NotFoundView.vue'
import LoveCalculator from './components/LoveCalculator.vue'

const router = createRouter({
    routes: [
        {
            path:"/" ,
            name:"main" ,
            component: MainPage ,
        },

        {
            path:"/chat" ,
            name:"chat" ,
            component: ChatPage ,
        },

        {
            path:"/api" ,
            name:"api" ,
            component: ApiPage ,
        },

        {
            path:"/love" ,
            name:"love" ,
            component: LoveCalculator ,
        },

        {
            path:"/:pathMatch(.*)*" ,
            name:"404" ,
            component: NotFoundView ,
        },
    ],

    history: createWebHistory(),
})






const app = createApp(App)
app.use(router)
app.mount('#app')