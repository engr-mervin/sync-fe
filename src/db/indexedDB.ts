import Dexie from "dexie";
import { ITodo } from "../types/types";
import { IAction } from "../types/types";

class SyncDB extends Dexie {
  todos!: Dexie.Table<ITodo, string>;
  actions!: Dexie.Table<IAction, string>;

  constructor() {
    super("SyncDB");

    this.version(2).stores({
      todos: "&id, status",
      actions: "&id",
    });
  }
}

export const syncDB = new SyncDB();
