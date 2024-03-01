import { ChangeEventHandler, FormEventHandler } from "react";
import "./App.css";
import CustomInput from "./components/CustomInput";
import TodoGroup from "./components/TodoGroup";

import { syncDB } from "./db/indexedDB";
import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import { ITodo } from "./types/types";
import { generateId } from "./db/idGenerator";

function App() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const activeTodos = useLiveQuery(() =>
    syncDB.todos.filter((todo) => todo.status === "active" && todo.isActive).toArray()
  );
  const doneTodos = useLiveQuery(() =>
    syncDB.todos.filter((todo) => todo.status === "done" && todo.isActive).toArray()
  );
  const deletedTodos = useLiveQuery(() => syncDB.todos.filter((todo) => !todo.isActive).toArray());

  const onTitleChange: ChangeEventHandler<HTMLInputElement> = function (event) {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const onDescriptionChange: ChangeEventHandler<HTMLInputElement> = function (event) {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const onAddTodo: FormEventHandler<HTMLFormElement> = async function (event) {
    event.preventDefault();

    const id = generateId();
    const todo: ITodo = {
      id,
      title,
      description,
      isActive: true,
      status: "active",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await syncDB.todos.add(todo, id);
  };

  return (
    <main>
      <h1>Todo</h1>
      <form onSubmit={onAddTodo}>
        <CustomInput id="input__title" label="Title" type="text" value={title} changeHandler={onTitleChange} />
        <CustomInput
          id="input__description"
          label="Description"
          type="text"
          value={description}
          changeHandler={onDescriptionChange}
        />
        <button type="submit">Add</button>
      </form>
      <TodoGroup groupName="Active" todos={activeTodos}></TodoGroup>
      <TodoGroup groupName="Done" todos={doneTodos}></TodoGroup>
      <TodoGroup groupName="Deleted" todos={deletedTodos}></TodoGroup>
    </main>
  );
}

export default App;
