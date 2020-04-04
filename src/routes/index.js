import Login from '@/pages/Login'
export default [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
]