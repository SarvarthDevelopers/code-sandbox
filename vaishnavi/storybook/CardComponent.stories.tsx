import React from 'react';
import  type{ Meta, StoryObj } from '@storybook/react';
import CardComponent from './CardComponent';

const meta: Meta<typeof CardComponent> = {
  title: 'Components/Quiz Card',
  component: CardComponent,
  tags: ['autodocs'], // For Storybook Docs addon if used
};

export default meta;
type Story = StoryObj<typeof CardComponent>;


export const WithEmptyFields: Story = {
  args: {
    title: 'Create Quiz',
    subtitle: 'Overview of your learning journey',
  },
};

