// File: components/FileUpload/FileUpload.stories.tsx

// import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-webpack5'
import FileUp from '../Component/FileUp';
// import { FileUploadProps } from '../Component/FileUpload';

const meta: Meta<typeof FileUp> = {
  title: 'Components/FileUpload',
  component: FileUp,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FileUp>;

export const Rest: Story = {
  args: {
    state: "error",
  },
};

export const Default: Story = {
  args: {
    state: 'default',
  },
};

export const Uploading: Story = {
  args: {
    state: 'uploading',
    fileName: 'example-image.jpg',
    fileSizeKB: 1024,
    progress: 40,
    onRemove: () => alert('Remove clicked'),
  },
};

export const Uploaded: Story = {
  args: {
    state: 'uploaded',
    fileName: 'uploaded-file.pdf',
    fileSizeKB: 850,
    onRemove: () => alert('Remove clicked'),
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    fileName: 'broken-file.zip',
    fileSizeKB: 1200,
    errorMessage: 'Upload failed. Try again.',
    onRetry: () => alert('Retry clicked'),
  },
};
