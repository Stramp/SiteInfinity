import { Story, Meta } from '@storybook/react/types-6-0'
import SocialMedia from '.'

export default {
  title: 'SocialMedia',
  component: SocialMedia
} as Meta

export const Default: Story = args => <SocialMedia {...args} />
