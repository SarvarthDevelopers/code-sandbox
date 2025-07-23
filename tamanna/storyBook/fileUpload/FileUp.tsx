
import React, { useState } from 'react';
import './FileUpload.css';
import { FileUploadProps } from './FileUpload';
import { X, RotateCcw } from 'lucide-react';

const FileUp: React.FC<FileUploadProps> = ({
  state = 'rest',
  fileName = '',
  fileSizeKB = 0,
  progress = 0,
  errorMessage = 'Oops! Upload failed',
  onRemove,
  onRetry,
}) => {
  const [localError, setLocalError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isValidType = ['image/png', 'image/jpeg', 'image/gif'].includes(file.type);
    const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB

    if (!isValidType) {
      setLocalError('❌ Only PNG, JPG, and GIF files are allowed.');
      return;
    }

    if (!isValidSize) {
      setLocalError('❌ File size must be 5MB or less.');
      return;
    }

    setLocalError(null); // Clear any previous error
    console.log('✅ Valid file uploaded:', file.name);
    // Optional: Trigger further actions here (e.g. set file in parent state)
  };

  const renderContent = () => {
    switch (state) {
      case 'rest':
      case 'default':
        return (
          <div className={`upload-box ${state}`}>
            <label htmlFor="file-upload" className="icon-placeholder" />
            <input
              id="file-upload"
              type="file"
              className="hidden-input"
              accept=".png, .jpg, .jpeg, .gif"
              onChange={handleFileChange}
            />
            <p><strong>Upload a file</strong> or drag and drop</p>
            <span>PNG, JPG, GIF up to 5MB</span>
            {localError && <p className="error-message">{localError}</p>}
          </div>
        );

      case 'uploading':
        return (
          <div className="upload-item uploading">
            <div className="con1">
              <div className="icon" />
            </div>
            <div className="con2">
              <div className="file-info">
                <span>{fileName}</span>
              </div>
              <div className="lbl">Label</div>
              <div className="progress-bar">
                <div className="bar" style={{ width: `${progress}%` }} />
              </div>
              <p className="caption">{fileSizeKB}KB · {progress}% uploaded</p>
            </div>
            <div className="con3">
              <X className="action" onClick={onRemove} />
            </div>
          </div>
        );

      case 'uploaded':
        return (
          <div className="upload-item uploaded">
            <div className="uploaded-con1">
              <div className="uploaded-icon" />
            </div>
            <div className="uploaded-con2">
              <div className="uploaded-file-info">
                <span>{fileName}</span>
              </div>
              <p className="uploaded-caption">{fileSizeKB}KB · 100% uploaded</p>
            </div>
            <div className="uploaded-con3">
              <X className="uploaded-action" onClick={onRemove} />
            </div>
          </div>
        );

      case 'error':
        return (
          <div className="upload-item error">
            <div className="error-icon-wrapper">
              <div className="error-icon" />
            </div>
            <div className="error-content">
              <span className="file-name">{fileName}</span>
              <p className="caption error-text">{errorMessage}</p>
            </div>
            <div className="error-action" onClick={onRetry}>
              <RotateCcw size={16} />
            </div>
          </div>
        );
    }
  };

  return <div className="file-upload-wrapper">{renderContent()}</div>;
};

export default FileUp;
