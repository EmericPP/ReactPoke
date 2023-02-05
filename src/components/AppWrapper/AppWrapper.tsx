import { Link, Outlet } from 'react-router-dom'
import styles from './AppWrapper.module.scss'
import React from 'react'
import { AuthStatus } from '../../App'

export function AppWrapper() {
  return (
    <div className={styles.wrapper}>
      <header>
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
      </header>
      <AuthStatus />

      <main className={styles.body}>
        <Outlet />
      </main>
    </div>
  )
}
