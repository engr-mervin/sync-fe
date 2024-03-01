import { MouseEventHandler } from "react";
import "./ActionButton.css";

interface ActionButtonProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function ActionButton(props: ActionButtonProps) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ActionButton;
