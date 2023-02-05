import React from 'react'
import styles from './HorizontalSelector.module.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import cx from 'classnames'

type Props = {
  label: string
  getNextItem: () => void
  getPreviousItem: () => void
  className: string
}
export function HorizontalSelector({ getPreviousItem, getNextItem, label, className }: Props) {
  return (
    <div className={cx(styles.hs, className)}>
      <span className={styles.hsLabel}>{label}</span>
      <button className={styles.hsButton} onClick={getPreviousItem}>
        <FaChevronLeft />
      </button>
      <button className={styles.hsButton} onClick={getNextItem}>
        <FaChevronRight />
      </button>
    </div>
  )
}
