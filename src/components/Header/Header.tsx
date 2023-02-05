import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import React from 'react'
import { useAuthContext } from '../../contexts/authContextManager'
import { Button } from '../Button/Button'

export function Header() {
  const auth = useAuthContext()
  const navigate = useNavigate()
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link className={styles.navLink} to='/'>
              Profile Page
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to='/schedule'>
              Schedule Page
            </Link>
          </li>
        </ul>
      </nav>
      {!auth.user ? (
        <div className={styles.auth}>You are not logged in.</div>
      ) : (
        <div className={styles.auth}>
          Welcome {auth.user.username}!{' '}
          <Button
            className={styles.authBtn}
            handleClick={async () => {
              await auth.signout()
              navigate('/')
            }}
            modifiers={'secondary'}
            label='Sign out'
          />
        </div>
      )}
    </header>
  )
}
