import { Checkbox } from '@mui/material'
import { FC, useState, useEffect } from 'react'

interface DemoProps {
  msg?: string
}

const Demo: FC<DemoProps> = (prop) => {
  const [count, setCount] = useState(false)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div>
      <h1>{count ? '1' : '0'}</h1>
      <Checkbox
        size="small"
        onChange={(e) => {
          setCount(e.target.checked)
        }}
        value={count}
      />
    </div>
  )
}

export default Demo
