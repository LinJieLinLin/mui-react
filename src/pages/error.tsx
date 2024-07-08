import { FC, useState, useEffect } from 'react'
import { useRouteError } from 'react-router-dom'
interface ErrorProps {
  msg?: string
}
interface IError {
  statusText?: string
  message?: string
}

const Error: FC<ErrorProps> = ({ msg = '' }) => {
  const [count, setCount] = useState(0)
  const error = useRouteError() as IError

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
}

export default Error
