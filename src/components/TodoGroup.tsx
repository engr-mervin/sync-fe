import { ITodo } from "../types/types";
import TodoCard from "./TodoCard";
import ChevronDown from "./icons/ChevronDown";

import "./TodoGroup.css";
import { useState } from "react";
import ChevronUp from "./icons/ChevronUp";

interface TodoGroupProps {
  groupName: string;
  children?: React.ReactNode;
  todos: ITodo[] | undefined;
}

function TodoGroup(props: TodoGroupProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <div className={isCollapsed ? "todo-group__box collapse" : "todo-group__box"}>
      <div
        className="todo-title__box"
        onClick={() => {
          setIsCollapsed((current) => {
            return !current;
          });
        }}
      >
        <h2>{props.groupName}</h2>
        {isCollapsed ? <ChevronDown /> : <ChevronUp />}
      </div>
      <ul className={isCollapsed ? "collapse" : ""}>
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
