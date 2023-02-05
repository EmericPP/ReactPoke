import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DaySelector } from './DaySelector'
import { DAYS, HEADER_ELEMENTS, PREVIOUS_MONTH_DAYS } from '../../../mocks/datepicker'

export default {
  title: 'Molecules/DaySelector',
  component: DaySelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleSelect: { action: 'clicked' },
  },
} as ComponentMeta<typeof DaySelector>

const Template: ComponentStory<typeof DaySelector> = (args) => <DaySelector {...args} />

export const Default = Template.bind({})
Default.args = {
  headerElements: HEADER_ELEMENTS,
  days: DAYS,
  previousMonthDays: PREVIOUS_MONTH_DAYS,
}

export const withSelectedDay = Template.bind({})
withSelectedDay.args = {
  headerElements: HEADER_ELEMENTS,
  days: DAYS,
  previousMonthDays: PREVIOUS_MONTH_DAYS,
  selectedDay: '12',
}
