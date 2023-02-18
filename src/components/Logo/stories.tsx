import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    version: {
      control: { type: 'select', options: ['hall1', 'hall2', 'full', 'slim'] }
    }
  }
} as Meta

export const Default: Story<LogoProps> = args => <Logo {...args} />
export const Hall1: Story<LogoProps> = () => <Logo version={'hall1'} />
export const Hall2: Story<LogoProps> = () => <Logo version={'hall2'} />
export const Full: Story<LogoProps> = () => <Logo version={'full'} />
export const Slim: Story<LogoProps> = () => <Logo version={'slim'} />
