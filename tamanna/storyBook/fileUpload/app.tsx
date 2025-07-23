import React from 'react';
import FileUp from './Component/FileUp';


function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>File Upload Demo</h2>
      <FileUp
        state="rest"
        fileName="sample.jpg"
        fileSizeKB={1024}
        progress={50}
        onRemove={() => console.log('Remove clicked')}
        onRetry={() => console.log('Retry clicked')}
      />
    </div>
  );
}

export default App;
