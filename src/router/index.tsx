import { createHashRouter, RouteObject } from 'react-router-dom'
import { ComponentType, lazy } from 'react'
import Error from '@/pages/error'

const pages: any = import.meta.glob('@/pages/**/*.tsx')
const routeSet = new Set()
console.log('pages:', pages)
export const routes = Object.entries(pages).reduce(
  (res: RouteObject[], [p, page]) => {
    let [filePath, path] = /pages\/(.*\/?){1,5}.tsx/.exec(p) || []
    path = ('/' + path).replace(/\/index$/, '') || '/'
    if (routeSet.has(path)) {
      console.error('repeatRoute:', path, filePath, 'will ignore,please check')
      return res
    }
    routeSet.add(path)
    console.log('route：', p, filePath, path)
    const Component = lazy(page as () => Promise<{ default: ComponentType }>)
    res.push({
      path,
      element: <Component />,
      errorElement: <Error />,
    })
    return res
  },
  []
)
console.log('routes:', routes)
const router = createHashRouter(routes)
export default router
