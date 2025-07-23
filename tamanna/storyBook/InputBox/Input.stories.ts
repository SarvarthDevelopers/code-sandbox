// import { InputProps } from '../Component/Input.types';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Input from '../Component/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// Non-destructive states
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    state: 'default',
    destructive: false,
  },
};

export const Focused: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    state: 'focused',
    destructive: false,
  },
};

export const Typing: Story = {
  args: {
    label: 'Label',
    placeholder: 'Type something...',
    helperText: 'Helper text',
    state: 'typing',
    value: 'Typing...',
    destructive: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Label',
    placeholder: 'Active input',
    helperText: 'Active input with black border',
    state: 'active',
    value: 'Active input',
    destructive: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Disabled input',
    helperText: 'Disabled input',
    state: 'disabled',
    destructive: false,
  },
};

// Destructive states
export const DestructiveDefault: Story = {
  args: {
    label: 'Label',
    placeholder: 'Name should not include numbers',
    helperText: 'Numbers are not allowed.',
    state: 'default',
    destructive: true,
  },
};

export const DestructiveFocused: Story = {
  args: {
    label: 'Label',
    placeholder: 'Focus error',
    helperText: 'This is a focused error input',
    state: 'focused',
    destructive: true,
  },
};

export const DestructiveTyping: Story = {
  args: {
    label: 'Label',
    placeholder: 'Typing invalid name...',
    helperText: 'Numbers are not allowed.',
    state: 'typing',
    value: '123',
    destructive: true,
  },
};

export const DestructiveActive: Story = {
  args: {
    label: 'Label',
    placeholder: 'Active invalid input',
    helperText: 'Something is wrong',
    state: 'active',
    value: 'Error input',
    destructive: true,
  },
};

export const DestructiveDisabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Not editable',
    helperText: 'Input is disabled',
    state: 'disabled',
    destructive: true,
  },
};
