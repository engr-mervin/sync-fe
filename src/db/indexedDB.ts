import Dexie from "dexie";
import { ITodo } from "../types/types";
import { IAction } from "../types/types";

class SyncDB extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instantiated by Dexie in stores() method)
  todos!: Dexie.Table<ITodo, string>; // number = type of the primkey
  actions!: Dexie.Table<IAction, string>; // number = type of the primkey
  //...other tables goes here...

  constructor() {
    super("SyncDB");

    this.version(2).stores({
      todos: "&id, status",
      actions: "&id",
    });
  }
}

export const syncDB = new SyncDB();
