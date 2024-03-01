import { ITodo } from "../types/types";
import TodoCard from "./TodoCard";

import "./TodoGroup.css";

interface TodoGroupProps {
  groupName: string;
  children?: React.ReactNode;
  todos: ITodo[] | undefined;
}

function TodoGroup(props: TodoGroupProps) {
  return (
    <div className="todo-group__box">
      <h2>{props.groupName}</h2>
      <ul>
        {props.todos
          ? props.todos.map((todo) => (
              <TodoCard
                isActive={todo.isActive}
                title={todo.title}
                description={todo.description}
                id={todo.id}
                key={todo.id}
                status={todo.status}
              ></TodoCard>
            ))
          : ""}
      </ul>
    </div>
  );
}

export default TodoGroup;
