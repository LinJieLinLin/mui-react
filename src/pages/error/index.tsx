import { FC, useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

interface DemoProps {
  msg?: string
}

const Demo: FC<DemoProps> = (prop) => {
  console.log(prop)
  let { a, b } = useParams()
  let [searchParams, setSearchParams] = useSearchParams()
  console.error(a, b, searchParams)
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div>
      <h1>{count}--</h1>
      {a}
    </div>
  )
}

export default Demo
