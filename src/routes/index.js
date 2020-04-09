import Login from '@/pages/Login'
import DefaultLayout from '@/pages/layout/Default'
import Group from '@/pages/Group'
import User from '@/pages/User'
export default [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/Group',
        meta: {
          title: '角色管理'
        },
        component: Group
      },
      {
        path: '/User',
        meta: {
          title: '用户管理'
        },
        component: User
      }
    ]
  },
  { path: '/login', component: Login },
]