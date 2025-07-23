import InlineAlert from '../Component/InlineAlert';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof InlineAlert> = {
  title: 'Components/InlineAlert',
  component: InlineAlert,
};

export default meta;
type Story = StoryObj<typeof InlineAlert>;

export const Neutral: Story = {
  args: {
    type: 'neutral',
    title: 'Neutral Alert',
    description: 'This is a neutral alert.',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Info Alert',
    description: 'Useful information shown here.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success!',
    description: 'Your action was successful.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning!',
    description: 'You should be cautious about this.',
  },
};

export const Primary: Story = {
  args: {
    type: 'primary',
    title: 'Primary Alert',
    description: 'This is a primary alert with important information.',
  },
};
export const Error: Story = {
  args: {
    type: 'error',
    title: 'Primary Alert',
    description: 'This is a primary alert with important information.',
  },
};
