import { Story, Meta } from '@storybook/react/types-6-0'
import Section from '.'

export default {
  title: 'Section',
  component: Section
} as Meta

export const Default: Story = args => <Section {...args} />
