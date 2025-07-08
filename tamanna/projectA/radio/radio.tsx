import React from "react";
import "./radio.css";

type Props = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

export const CustomRadio: React.FC<Props> = ({ name, value, checked, onChange }) => {
  return (
    <label className="custom-radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className="radio-mark" />
    </label>
  );
};
