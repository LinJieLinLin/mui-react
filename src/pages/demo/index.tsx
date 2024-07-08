import { Button, Checkbox } from '@mui/material'
import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch, Provider } from 'react-redux'
// import userReducer from '@/store/users'
import store, { setStatus } from '../../store/index'

interface DemoProps {
  msg?: string
}

const Demo: FC<DemoProps> = (prop) => {
  const [count, setCount] = useState(false)
  const toPage = useNavigate()
  const user: any = store.getState()
  const userAge = useSelector((s: any) => s.users.age)
  const todoStatus = useSelector((s: any) => s.todo.status)
  // const dispatch = useDispatch()
  function addAge() {
    store.dispatch({ type: 'addAge', data: 'ssss' })
    store.dispatch({ type: 'todo/setStatus', data: '123' })
    setStatus('123')
    console.log(store.getState())
  }

  useEffect(() => {
    console.log('init', store.getState())
    return () => {}
  }, [])
  return (
    <div>
      <Button variant="text" onClick={() => toPage(-1)}>
        返回
      </Button>
      <Button variant="text" onClick={() => addAge()}>
        年龄+1
      </Button>
      <div>
        {userAge}----{todoStatus}
      </div>
      <h1>{count ? '1' : '0'}</h1>
      <div>
        age: {user?.age}--
        {/* {userAge} */}
      </div>
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
