import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    tipo: {
      control: {
        type: 'inline-radio',
        options: ['full', 'slim']
      }
    }
  }
} as Meta

export const Default: Story<ButtonProps> = args => <Button {...args} />
export const Full: Story<ButtonProps> = () => <Button tipo="full" />
export const Slim: Story<ButtonProps> = () => <Button tipo="slim" />
