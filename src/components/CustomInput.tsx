import { ChangeEventHandler } from "react";

interface CustomInputProps {
  id: string;
  type: string;
  label: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

function CustomInput(props: CustomInputProps) {
  console.log(`${props.label} changed`);
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} onChange={props.changeHandler} value={props.value} id={props.id} />
    </div>
  );
}

export default CustomInput;
