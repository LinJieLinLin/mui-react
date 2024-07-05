import { createHashRouter } from 'react-router-dom'
import { ComponentType, lazy } from 'react'
const pages: any = import.meta.glob('@/pages/**/*.tsx')
console.log(pages)
export const routes = Object.entries(pages).map(([p, page]) => {
  let [path, ...pathList] = /pages\/(.*)\/(.*).tsx/.exec(p) || []
  const Component = lazy(page as () => Promise<{ default: ComponentType }>) // 确保返回的Promise包含default导出
  console.log(p, path, pathList)
  if (pathList?.at(-1) === 'index') {
    pathList.pop()
  }
  return {
    path: `/${pathList?.join('/')}`,
    element: <Component />,
  }
})
console.log('routes:', routes)
const router = createHashRouter(routes)
export default router
