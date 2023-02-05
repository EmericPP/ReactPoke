import React from 'react'
import styles from './Button.module.scss'
import cx from 'classnames'

export type Props = {
  label: string
  modifiers?: 'primary' | 'secondary'
  handleClick?: () => void
  type?: 'submit' | 'button'
  className?: string
}
export function Button({
  label,
  handleClick,
  modifiers = 'primary',
  type = 'submit',
  className,
}: Props) {
  return (
    <button type={type} onClick={handleClick} className={cx(styles[modifiers], className)}>
      {label}
    </button>
  )
}
