import React from 'react'
import styles from './HorizontalSelector.module.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type Props = {
  label: string
  getNextitem: () => void
  getPreviousitem: () => void
}
export function HorizontalSelector({ getPreviousitem, getNextitem, label }: Props) {
  return (
    <div className={styles.hs}>
      <span className={styles.hsLabel}>{label}</span>
      <button className={styles.hsButton} onClick={getPreviousitem}>
        <FaChevronLeft />
      </button>
      <button className={styles.hsButton} onClick={getNextitem}>
        <FaChevronRight />
      </button>
    </div>
  )
}
