export type FileUploadState = 'rest' | 'default' | 'uploading' | 'uploaded' | 'error';

export interface FileUploadProps {
  state?: FileUploadState;
  fileName?: string;
  fileSizeKB?: number;
  progress?: number;
  errorMessage?: string;
  onRemove?: () => void;
  onRetry?: () => void;
}