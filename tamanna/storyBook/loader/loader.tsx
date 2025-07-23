import React from 'react';
import './loader.css';
import { LoaderProps } from './loader.type';

const Loader: React.FC<LoaderProps> = ({
  size = 'regular',
  label = 'Loading...',
  showLabel = true,
  showBG = true,
}) => {
  return (
    <div className={`loader-wrapper ${showBG ? 'bg' : ''} size-${size}`}>
      <div className="spinner" />
      {showLabel && <p className="loader-label">{label}</p>}
    </div>
  );
};

export default Loader;
