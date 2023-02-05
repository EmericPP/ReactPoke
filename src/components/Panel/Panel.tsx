import React, { PropsWithChildren } from 'react'
import styles from './Panel.module.scss'
import classNames from 'classnames'

type Props = {
  title: string
  className: string
}
export function Panel({ title, children, className }: PropsWithChildren<Props>) {
  return (
    <div className={classNames(styles.panel, className)}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}
