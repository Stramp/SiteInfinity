import { Story, Meta } from '@storybook/react/types-6-0'
import Svg1 from '.'

export default {
  title: 'Svg1',
  component: Svg1
} as Meta

export const Default: Story = args => <Svg1 {...args} />
