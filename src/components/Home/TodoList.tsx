import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodo } from '@/redux/accessors';
import { TodoContextModel } from '@/interfaces/ITodoContext';
import todoSlice from '@/pages/home/todoSlice';
import { Link } from 'react-router-dom';
import { url } from '@/helpers/Utils';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector(selectTodo);
  if (loading) return <div>Loading...</div>;

  const checkHandle = (id: string) => {
    dispatch(todoSlice.actions.updateCheckedTodo(id));
  };

  return (
    <ul className='space-y-3'>
      {todos?.map((todo: TodoContextModel, key: any) => (
        <li key={key} className='p-6 bg-white shadow rounded-md flex items-center justify-start'>
          <input
            id='done'
            name='done'
            type='checkbox'
            checked={todo.done}
            onChange={() => checkHandle(todo.id)}
            className='w-4 h-4 mr-4 shadow bg-slate-50 rounded border-slate-300 focus:ring-blue-500 focus:ring-2'
          />
          <Link to={url(`task`, { id: todo.id })}>{todo.todo}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
