import { useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'
import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'

const Navigation = () => {
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <nav style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
      {isAuthenticated ? (
        <SignoutBtn />
      ) : (
        <>
          <Link to={routes.signup()}>Sign Up</Link>
          <Link to={routes.signin()}>Sign In</Link>
        </>
      )}
      <p>isAuthenticated: {JSON.stringify(isAuthenticated)}</p>
      <p>Current User: {JSON.stringify(currentUser)}</p>
    </nav>
  )
}

export default Navigation