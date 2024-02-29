import { MouseEventHandler } from 'react';
import './ActionButton.css';

interface ActionButtonProps{
    children: React.ReactNode;
    onClick: () => void;
}


function ActionButton(props: ActionButtonProps){

    const clickHandler:MouseEventHandler<HTMLButtonElement> = function(event){
        event.preventDefault();
        props.onClick();
    }

    return <button type='button' onClick={clickHandler}>{props.children}</button>
}

export default ActionButton;