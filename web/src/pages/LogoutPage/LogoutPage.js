import {useAuth} from '@redwoodjs/auth'
import {useEffect} from 'react'

const LogoutPage = () => {
  const {logOut} = useAuth()

  useEffect(() => {
    logOut()
  }, [logOut])

  return <p>signed out</p>
}

export default LogoutPage
