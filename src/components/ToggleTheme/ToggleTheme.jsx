import { useState } from 'react';
import Switch from 'react-switch';

export const ToggleTheme = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = checked => {
    setChecked(checked);
  };
  console.log(checked);
  return (
    <div>
      <Switch onChange={handleChange} checked={checked} />
    </div>
  );
};
