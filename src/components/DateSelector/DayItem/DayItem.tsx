import React from 'react'
import styles from './DayItem.module.scss'

type Props = {
  label: string
  handleClick?: (day: string) => void
  disabled?: boolean
  selected?: boolean
}
export function DayItem({ label, handleClick, disabled, selected }: Props) {
  const className = disabled ? styles.disabled : selected ? styles.selected : styles.item
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={() => handleClick && handleClick(label)}
    >
      {label}
    </button>
  )
}
