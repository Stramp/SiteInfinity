import { Story, Meta } from '@storybook/react/types-6-0'
import Teste from '.'

export default {
  title: 'Teste',
  component: Teste
} as Meta

export const Default: Story = args => <Teste {...args} />
