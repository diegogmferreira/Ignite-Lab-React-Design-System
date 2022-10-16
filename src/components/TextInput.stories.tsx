import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react'

export default {
  title: 'Component/TextInput',
  component: TextInput.Root,
  args: {
    children: [
        <TextInput.Icon><Envelope /></TextInput.Icon>,
        <TextInput.Input placeholder='Type your email address' />
    ]
  },
  argTypes: {
    children: {
      disabled: true
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const InputWithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
        <TextInput.Input placeholder='Type your email address' />
    ]
  }
}
