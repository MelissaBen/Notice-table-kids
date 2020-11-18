
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/Index.vue')
      },
      {
        path: '/Contact', component: () => import('pages/Contact.vue')
      },{
        path: '/faq', component: () => import('pages/FAQ.vue'),
     
      }
      ,{
        path: '/info', component: () => import('pages/Info.vue'),
     
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
