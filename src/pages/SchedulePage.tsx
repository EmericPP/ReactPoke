import React from 'react'
import { Button } from '../components/Button/Button'
import { InputWithLabel } from '../components/Input/InputWithLabel'
import { ChoiceItem } from '../components/ChoiceItem/ChoiceItem'
import { HorizontalSelector } from '../components/HorizontalSelector/HorizontalSelector'
import { DaySelector } from '../components/DateSelector/DaySelector/DaySelector'

export const HEADER_ELEMENTS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
export const DAYS = ['29', '30', ...Array.from(Array(31), (_, i) => `${i}`)]

export const SchedulePage = () => {
  return (
    <>
      <h3>Protected</h3>
      <Button type='submit' label='Login' />
      <Button type='submit' label='Login' modifiers='secondary' />
      <InputWithLabel
        label='Date'
        name='date'
        type='text'
        value='16/102023'
        handleChange={() => ''}
      />
      <InputWithLabel
        label='time'
        name='time'
        type='text'
        value='01:00 AM'
        handleChange={() => ''}
      />
      <ChoiceItem label='12:00 AM' handleSelect={() => ''} />
      <ChoiceItem label='12:00 AM' handleSelect={() => ''} selected />
      <HorizontalSelector label='May 2018' getNextitem={() => ''} getPreviousitem={() => ''} />
      <DaySelector headerElements={HEADER_ELEMENTS} days={DAYS} />
    </>
  )
}
