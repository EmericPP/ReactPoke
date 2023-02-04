import { Link, Outlet } from 'react-router-dom'
import React from 'react'
import { AuthStatus } from '../App'

export function AppWrapper() {
  return (
    <header>
      <AuthStatus />
      <nav>
        <ul>
          <li>
            <Link to='/'>Profile Page</Link>
          </li>
          <li>
            <Link to='/schedule'>Schedule Page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </header>
  )
}
