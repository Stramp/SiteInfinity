import { Story, Meta } from '@storybook/react/types-6-0'
import PhraseHall from '.'

export default {
  title: 'PhraseHall',
  component: PhraseHall
} as Meta

export const Default: Story = args => <PhraseHall {...args} />
