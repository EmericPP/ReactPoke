import { useAuthContext } from 'contexts/authContextManager'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export function ProtectedRoute() {
  const auth = useAuthContext()
  const location = useLocation()
  if (!auth.user) {
    return (
      <>
        <Navigate to='/login' state={{ from: location }} replace />
      </>
    )
  }
  return <Outlet />
}
