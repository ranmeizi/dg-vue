import Login from '@/pages/Login'
import DefaultLayout from '@/pages/layout/Default'
import Group from '@/pages/Group'
import User from '@/pages/User'
import Resource from '@/pages/Resource'
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
      },
      {
        path: '/Resource',
        meta: {
          title: '权限管理'
        },
        component: Resource
      }
    ]
  },
  { path: '/login', component: Login },
]