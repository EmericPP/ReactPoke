import React from 'react'
import styles from './DayItem.module.scss'
import cx from 'classnames'

type Props = {
  label: string
  handleClick?: (day: string) => void
  disabled?: boolean
  selected?: boolean
  className?: string
}
export function DayItem({
  label,
  handleClick,
  disabled,
  selected,
  className: optionalClassName,
}: Props) {
  const className = disabled ? styles.disabled : selected ? styles.selected : styles.item
  return (
    <button
      className={cx(className, optionalClassName)}
      disabled={disabled}
      onClick={() => handleClick && handleClick(label)}
    >
      {label}
    </button>
  )
}
