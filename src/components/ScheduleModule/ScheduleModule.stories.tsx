import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ScheduleModule } from './ScheduleModule'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'organisms/ScheduleModule',
  component: ScheduleModule,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleSubmit: { action: 'date selected' },
  },
} as ComponentMeta<typeof ScheduleModule>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ScheduleModule> = (args) => <ScheduleModule {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
