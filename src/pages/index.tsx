import { FC, useEffect } from 'react'
import { Button } from '@mui/material'
import App from '@/App'
import { useNavigate } from 'react-router-dom'
import store from '../store/index'
export const Index: FC = () => {
  const toPage = useNavigate()
  useEffect(() => {
    // 为什么会运行两次？
    console.log(store.getState())
    return () => {}
  }, [])
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" onClick={() => toPage('/demo')}>
        toDemo
      </Button>
      <App />
    </div>
  )
}
export default Index
