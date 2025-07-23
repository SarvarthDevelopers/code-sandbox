import React, { useState } from 'react';
import InlineAlert from './Component/InlineAlert';

const AlertTriggerExample: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);

  return (
    <div>
      <button onClick={handleShowAlert}>Show Alert</button>

      {showAlert && (
        <InlineAlert
          type="neutral"
          title="Error!"
          description="Something went wrong. Please try again."
          showClose={true}
          onClose={handleCloseAlert}
          
        />
      )}
    </div>
  );
};

export default AlertTriggerExample;
