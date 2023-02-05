import React from 'react'
import styles from './DaySelector.module.scss'
import { DayItem } from '../DayItem/DayItem'
import cx from 'classnames'

type Props = {
  headerElements: string[]
  days: string[]
  previousMonthDays: string[]
  handleSelect: (day: string) => void
  selectedDay: string
  className: string
}
export function DaySelector({
  headerElements,
  days,
  handleSelect,
  selectedDay,
  previousMonthDays,
  className,
}: Props) {
  return (
    <ul className={cx(styles.selector, className)}>
      {[...headerElements, ...previousMonthDays].map((day, index) => (
        <li key={`${day} + ${index}`}>
          <DayItem className={styles.day} key={`${day} + ${index}`} label={day} disabled />
        </li>
      ))}
      {days.map((day, index) => (
        <li key={`${day} + ${index}`}>
          <DayItem
            className={styles.day}
            selected={day === selectedDay}
            label={day}
            handleClick={() => handleSelect(day)}
          />
        </li>
      ))}
    </ul>
  )
}
