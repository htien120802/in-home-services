// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Category = lazy(() => import('../pages/protected/Category'))
const Customer = lazy(() => import('../pages/protected/Customer'))
const Provider = lazy(() => import('../pages/protected/Provider'))
const Order = lazy(() => import('../pages/protected/Order'))
const Product = lazy(() => import('../pages/protected/Product'))
const Review = lazy(() => import('../pages/protected/Review'))


const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/welcome',
    component: Welcome,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/service/public',
    component: Product,
  },
  {
    path: '/service/provider',
    component: Product,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/customer',
    component: Customer,
  },
  {
    path: '/provider',
    component: Provider,
  },
  {
    path: '/booking',
    component: Order,
  },
  {
    path: '/review',
    component: Review,
  },
  {
    path: '/404',
    component: Page404,
  },
]

export default routes
