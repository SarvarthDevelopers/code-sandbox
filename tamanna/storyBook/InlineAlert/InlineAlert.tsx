import React from 'react';
import './InlineAlert.css';

export type AlertType = 'neutral' | 'info' | 'success' | 'warning' | 'error' | 'primary';

interface InlineAlertProps {
  type?: AlertType;
  title: string;
  description?: string;
  showIcon?: boolean;
  showClose?: boolean;
  onClose?: () => void;
}

const InlineAlert: React.FC<InlineAlertProps> = ({
  type = 'neutral',
  title,
  description,
  showIcon = true,
  showClose = true,
  onClose,
}) => {
  return (
    <div className={`inline-alert ${type}`}>
      {showIcon && <span className="alert-icon"></span>}
      <div className='cont'>
        <div className="alert-content">
          <div className="subCont">
            <div className="alert-title">{title}</div>
            {description && <div className="alert-description">{description}</div>}
          </div>
          {showClose && (
            <button className="alert-close" onClick={onClose}>
              ×
            </button>
          )}
        </div>

        <div className='alert-btn'>
          <button className='btn'>Action</button>
          <button className='btn'>Action</button>
        </div>
      </div>
    </div>
  );
};

export default InlineAlert;
