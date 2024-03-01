import "./TodoCard.css";
import ActionButton from "./ActionButton";

import { syncDB } from "../db/indexedDB";
import { MouseEventHandler } from "react";
import { ITodoStatus } from "../types/types";

interface TodoCardProps {
  title: string;
  description: string;
  id: string;
  status: ITodoStatus;
  isActive: boolean;
}

function TodoCard(props: TodoCardProps) {
  const onDeleteHandler: MouseEventHandler<HTMLButtonElement> = async function (event) {
    event.preventDefault();

    if ((props.isActive && props.status === "active") || (props.isActive && props.status === "done")) {
      return await syncDB.todos.update(props.id, { isActive: false });
    }

    if (!props.isActive) {
      return await syncDB.todos.delete(props.id);
    }
  };

  const status = props.isActive ? (props.status === "active" ? "Mark done" : "Mark active") : "Restore";

  const onUpdateHandler: MouseEventHandler<HTMLButtonElement> = async function (event) {
    event.preventDefault();

    const updatedAt = new Date();

    if (props.status === "done" && props.isActive) {
      return await syncDB.todos.update(props.id, { status: "active", updatedAt });
    }
    if (props.status === "active" && props.isActive) {
      return await syncDB.todos.update(props.id, { status: "done", updatedAt });
    }

    if (!props.isActive) {
      return await syncDB.todos.update(props.id, { isActive: true });
    }
  };

  return (
    <li>
      <div className="todoCard__text-box">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="todoCard__action-box">
        <ActionButton onClick={onUpdateHandler}>{status}</ActionButton>
        <ActionButton onClick={onDeleteHandler}>Delete</ActionButton>
      </div>
    </li>
  );
}

export default TodoCard;
