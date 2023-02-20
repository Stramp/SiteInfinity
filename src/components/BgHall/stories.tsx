import { Story, Meta } from '@storybook/react/types-6-0'
import BgHall from '.'

export default {
  title: 'BgHall',
  component: BgHall
} as Meta

export const Default: Story = args => <BgHall {...args} />
