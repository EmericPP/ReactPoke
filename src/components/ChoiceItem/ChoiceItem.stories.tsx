import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ChoiceItem } from './ChoiceItem'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/ChoiceItem',
  component: ChoiceItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleSelect: { action: 'selected !' },
  },
} as ComponentMeta<typeof ChoiceItem>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChoiceItem> = (args) => <ChoiceItem {...args} />

export const Standard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  label: 'ChoiceItem',
}

export const Selected = Template.bind({})
Selected.args = {
  label: 'ChoiceItem',
  selected: true,
}
