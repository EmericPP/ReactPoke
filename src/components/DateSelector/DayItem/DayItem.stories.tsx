import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DayItem } from './DayItem'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/DayItem',
  component: DayItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'day selected' },
  },
} as ComponentMeta<typeof DayItem>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DayItem> = (args) => <DayItem {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'M',
}

export const Disabled = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  label: 'M',
  disabled: true,
}

export const Selected = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Selected.args = {
  label: 'M',
  selected: true,
}
