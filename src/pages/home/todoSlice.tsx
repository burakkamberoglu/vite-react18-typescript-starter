import { createSlice } from '@reduxjs/toolkit';
import { TodoContextModel } from '@/interfaces/ITodoContext';

interface TodoReduxModel {
  todos: TodoContextModel[];
  loading: boolean;
}

const initialState: TodoReduxModel = {
  todos: JSON.parse(localStorage.getItem('todos')!) || [],
  loading: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
      localStorage.setItem('todos', JSON.stringify(state.todos));
      state.loading = false;
    },
    updateTodo: (state, action) => {
      state.todos = state.todos?.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.done = action.payload.done;
          todo.todo = action.payload.todo;
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
      state.loading = false;
    },
    updateCheckedTodo: (state, action) => {
      state.todos = state.todos?.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
      state.loading = false;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos?.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
      state.loading = false;
    },
  },
});

export default todoSlice;
