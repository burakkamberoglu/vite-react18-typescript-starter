import React from 'react';

export type TodoContextModel = {
  id: string;
  todo: string;
  done: boolean;
};
export interface TodoContext {
  todos: TodoContextModel[] | [];
  setUser: React.Dispatch<React.SetStateAction<TodoContextModel[] | []>>;
}
