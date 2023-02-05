import { Outlet } from 'react-router-dom'
import styles from './AppWrapper.module.scss'
import React from 'react'
import { Header } from 'components/Header/Header'

export function AppWrapper() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.body}>
        <Outlet />
      </main>
    </div>
  )
}
