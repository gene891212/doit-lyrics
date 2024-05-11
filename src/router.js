import SongDetail from '@/components/SongDetail.vue'
import SongList from '@/components/SongList.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   redirect: '/songs',
  // },
  // {
  //   path: '/songs/',
  //   name: 'SongList',
  //   component: SongList,
  // },
  // {
  //   path: '/song/:id',
  //   name: 'SongDetail',
  //   component: SongDetail,
  //   props: true,
  // },

  {
    path: '/',
    name: 'SongList',
    component: SongList
  },
  {
    path: '/song/:youtubeId',
    name: 'SongDetail',
    component: SongDetail,
    props: true
  },
  {
    path: '/edit',
    name: 'EditLyrics',
    component: () => import('@/components/EditLyrics.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
