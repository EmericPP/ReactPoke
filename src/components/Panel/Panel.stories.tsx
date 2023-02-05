import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Panel } from './Panel'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Panel',
  component: Panel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'day selected' },
  },
} as ComponentMeta<typeof Panel>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Super bloc',
}
