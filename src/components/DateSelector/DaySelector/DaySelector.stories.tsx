import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DaySelector } from './DaySelector'
import { DAYS, HEADER_ELEMENTS } from '../../../pages/SchedulePage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DaySelector',
  component: DaySelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof DaySelector>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DaySelector> = (args) => <DaySelector {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  headerElements: HEADER_ELEMENTS,
  days: DAYS,
}
