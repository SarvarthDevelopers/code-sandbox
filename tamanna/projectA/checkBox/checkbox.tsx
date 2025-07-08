
import React, { useState } from 'react';
import './checkbox.css';
//  import { FaCheck } from "react-icons/fa6";
import { MdOutlineCheck } from "react-icons/md";
interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CustomCheckbox: React.FC<CheckboxProps> = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange?.(!isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="checkmark">{isChecked && <span className="tick">
        <MdOutlineCheck className="check"/>
        </span>}</span>
    </label>
  );
};
