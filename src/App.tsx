import { AppWrapper } from 'components/AppWrapper/AppWrapper'
import { AuthProvider } from 'contexts/authContextManager'
import LoginPage from 'pages/LoginPage'
import ProfilePage from 'pages/ProfilePage'
import { SchedulePage } from 'pages/SchedulePage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
