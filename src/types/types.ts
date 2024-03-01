export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: ITodoStatus;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ITodoStatus = "active" | "done";

export interface IAction {
  id: string;
  title: string;
  description: string;
  type: "create" | "update" | "delete";
  updateTo: ITodoStatus;
  createdAt: Date;
}
