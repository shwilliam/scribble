import {useAuth} from '@redwoodjs/auth'
import {useEffect} from 'react'

const LoginPage = () => {
  const {logIn} = useAuth()

  useEffect(() => {
    logIn()
  }, [logIn])

  return (
    <span role="img" aria-label="waving hand">
      👋
    </span>
  )
}

export default LoginPage
