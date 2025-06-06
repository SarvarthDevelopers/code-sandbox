import React, { useState, useCallback } from 'react';

const Button: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click Me</button>;
};

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Without useCallback, this function would be recreated every render
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={handleClick} />
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
    </div>
  );
};

export default ParentComponent;

