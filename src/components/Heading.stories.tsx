import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Component/Heading',
  component: Heading,
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Testing</h1>
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
