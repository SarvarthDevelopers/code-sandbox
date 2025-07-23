import React, { useState } from 'react';
import Input from './Component/Input';

const App = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const containsNumber = (str: string) => /\d/.test(str);
  const isInvalid = containsNumber(value);

  const getState = () => {
    if (isFocused && value) return 'typing';
    if (isFocused) return 'focused';
    if (value) return 'active';
    return 'default';
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Input
        label="Name"
        placeholder="Enter your name"
        helperText={isInvalid ? 'Name should not contain numbers.' : 'Add on'}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        state={getState()}
        destructive={isInvalid}
      />
    </div>
  );
};

export default App;
