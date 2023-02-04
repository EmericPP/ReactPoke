import { AppWrapper } from 'components/AppWrapper'
import { AuthProvider, useAuthContext } from 'contexts/authContextManager'
import LoginPage from 'pages/LoginPage'
import ProfilePage from 'pages/ProfilePage'
import { SchedulePage } from 'pages/SchedulePage'
import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<AppWrapper />}>
          <Route path='/login' element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<ProfilePage />} />
            <Route path='/schedule' element={<SchedulePage />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export function AuthStatus() {
  const auth = useAuthContext()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p>You are not logged in.</p>
  }

  return (
    <p>
      Welcome {auth.user.username}!{' '}
      <button
        onClick={async () => {
          await auth.signout()
          navigate('/')
        }}
      >
        Sign out
      </button>
    </p>
  )
}
