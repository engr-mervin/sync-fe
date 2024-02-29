import './TodoCard.css'
import ActionButton from './ActionButton';

interface TodoCardProps {
    title: string;
    description: string;
    id: string;
}

function TodoCard(props: TodoCardProps) {
    return (
        <li>
            <div className='todoCard__text-box'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className='todoCard__action-box'>
                <ActionButton onClick={()=>{}}>Done</ActionButton>
                <ActionButton onClick={()=>{}}>Delete</ActionButton>
            </div>
        </li>
    );
}

export default TodoCard;
