import React, { useState } from 'react';
import Label from './Label';
import Input from './Input';

const CheckboxBase = (props: any) => {
  const [checkboxCheckedState, setCheckboxCheckedState] = useState(props.checked);

  const handleChange = () => {
    setCheckboxCheckedState(!checkboxCheckedState);
  }

  return (
    <div className={props.className}>
      <Input id={props.id} type="checkbox" onChange={handleChange} className={checkboxCheckedState ? 'is-checked' : ''} />
      <Label htmlFor={props.id}>{props.label}</Label>
    </div>
  );
}

export default CheckboxBase;