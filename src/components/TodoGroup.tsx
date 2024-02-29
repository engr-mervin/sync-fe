import './TodoGroup.css'

interface TodoGroupProps {
    groupName: string;
    children: React.ReactNode;
}

function TodoGroup(props: TodoGroupProps) {
    return (
        <div className='todo-group__box'>
            <h2>{props.groupName}</h2>
            <ul>{props.children}</ul>
        </div>
    );
}

export default TodoGroup;
