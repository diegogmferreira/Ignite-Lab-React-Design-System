import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Component/Text',
  component: Text,
  args: {
    children: 'Loren ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Testing</p>
    )
  },
  argTypes: {
    asChild: {
      table: {
        disabled: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}
