import { FC } from 'react'
import { Button } from '@mui/material'
import App from '@/App'

export const Index: FC = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <App />
    </div>
  )
}
export default Index
