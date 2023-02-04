import React, { useState } from 'react'
import styles from './DaySelector.module.scss'
import { DayItem } from '../DayItem/DayItem'

type Props = {
  headerElements: string[]
  days: string[]
}
export function DaySelector({ headerElements, days }: Props) {
  const [selectedDay, setSelectedDay] = useState('')
  return (
    <article className={styles.selector}>
      {headerElements.map((day) => (
        <DayItem key={day} label={day} disabled />
      ))}
      {days.map((day) => (
        <DayItem
          selected={day === selectedDay}
          key={day}
          label={day}
          handleClick={() => setSelectedDay(day)}
        />
      ))}
    </article>
  )
}
