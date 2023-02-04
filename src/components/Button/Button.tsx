import React from 'react'
import styles from './Button.module.scss'

export type Props = {
  label: string
  modifiers?: 'primary' | 'secondary'
  handleClick?: () => void
  type: 'submit' | 'button'
}
export function Button({ label, handleClick, modifiers = 'primary', type = 'submit' }: Props) {
  return (
    <button type={type} onClick={handleClick} className={styles[modifiers]}>
      {label}
    </button>
  )
}
