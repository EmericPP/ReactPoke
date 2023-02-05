import React, { PropsWithChildren, useEffect, useState } from 'react'
import styles from './ScheduleModule.module.scss'
import { InputWithLabel } from '../Input/InputWithLabel'
import { ChoiceItem } from '../ChoiceItem/ChoiceItem'
import { HorizontalSelector } from '../HorizontalSelector/HorizontalSelector'
import { DaySelector } from '../DateSelector/DaySelector/DaySelector'
import { Button } from '../Button/Button'
import { DAYS, HEADER_ELEMENTS, HOURS, PREVIOUS_MONTH_DAYS, MONTHS } from '../../mocks/datepicker'

type Props = {
  handleSubmit: (date: Date) => void
}
export function ScheduleModule({ handleSubmit }: PropsWithChildren<Props>) {
  const [year, setYear] = useState(2023)
  const [selectedDay, setSelectedDay] = useState(DAYS[0])
  const [selectedMonthIndex, setSelectedMonth] = useState(0)
  const [selectedHour, setSelectedHour] = useState(HOURS[2])
  const [date, setDate] = useState(new Date(year, selectedMonthIndex, Number(selectedDay)))

  useEffect(() => {
    const [hours, minutes] = selectedHour.split(':')
    const newDate = new Date(year, selectedMonthIndex, Number(selectedDay))
    newDate.setHours(parseInt(hours), parseInt(minutes), 0)

    setDate(newDate)
  }, [selectedMonthIndex, selectedDay, selectedHour, year])

  const getNextMonth = () => {
    if (selectedMonthIndex === 11) {
      setSelectedMonth(() => 0)
      setYear(year + 1)
    } else {
      setSelectedMonth(() => selectedMonthIndex + 1)
    }
  }

  const getPreviousMonth = () => {
    if (selectedMonthIndex === 0) {
      setSelectedMonth(() => 11)
      setYear(year - 1)
    } else {
      setSelectedMonth(() => selectedMonthIndex - 1)
    }
  }

  return (
    <article className={styles.module}>
      <section>
        {/*
        this input is disabled so as not to have to manage
        the verification of the correct format of the date entered by the user
        */}
        <InputWithLabel
          disabled
          label='Date'
          name='date'
          type='text'
          value={date.toLocaleDateString('fr-FR')}
        />
        <HorizontalSelector
          className={styles.months}
          label={`${MONTHS[selectedMonthIndex]} ${year}`}
          getNextItem={getNextMonth}
          getPreviousItem={getPreviousMonth}
        />
        <DaySelector
          className={styles.days}
          selectedDay={selectedDay}
          headerElements={HEADER_ELEMENTS}
          previousMonthDays={PREVIOUS_MONTH_DAYS}
          days={DAYS}
          handleSelect={(day) => setSelectedDay(day)}
        />
      </section>
      <section>
        <InputWithLabel
          label='time'
          name='time'
          type='text'
          value={selectedHour}
          handleChange={(e) => setSelectedHour(e.target.value)}
        />

        <ul className={styles.hours}>
          {HOURS.map((hour) => (
            <li key={hour}>
              <ChoiceItem
                key={hour}
                label={hour}
                handleSelect={(hour) => setSelectedHour(hour)}
                selected={selectedHour === hour}
              />
            </li>
          ))}
        </ul>
      </section>
      <div className={styles.buttons}>
        <Button type='button' handleClick={() => handleSubmit(date)} label='Schedule' />
        <Button type='button' label='Cancel' modifiers='secondary' />
      </div>
    </article>
  )
}
