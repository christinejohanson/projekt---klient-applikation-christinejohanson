import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//importerar alla views
import AddrecordView from '../views/AddrecordView.vue'
import EditrecordView from '../views/EditrecordView.vue'
import LoginView from '../views/LoginView.vue'
import RecordlistView from '../views/RecordlistView.vue'
import SignupView from '../views/SignupView.vue'
import AddtrackView from '../views/AddtrackView.vue'
import TracklistView from '../views/TracklistView.vue'
import TrackidView from '../views/TrackidView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: HomeView
    },
    {
      path: '/addrecord',
      name: 'add record',
      component: AddrecordView
    },
    {
      path: '/editrecord/:id',
      name: 'edit record',
      component: EditrecordView
    },
    {
      path: '/login',
      name: 'log in',
      component: LoginView
    },
    {
      path: '/recordlist',
      name: 'record list',
      component: RecordlistView
    },
    {
      path: '/signup',
      name: 'sign up',
      component: SignupView
    },
    {
      path: '/addtrack',
      name: 'add track',
      component: AddtrackView
    },
    {
      path: '/gettracks/:id',
      name: 'trackid',
      component: TrackidView
    },
     {
      path: '/track',
      name: 'track',
      component: TracklistView
     } 
  ]
})

export default router
