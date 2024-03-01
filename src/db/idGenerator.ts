import { v4 as uuidv4 } from "uuid";

//Encapsulation for future additional logic
export const generateId = function (): string {
  return uuidv4();
};
