import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser, selectTodo } from '@/redux/accessors';
import loginSlice from '@/pages/auth/loginSlice';

const TodoHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectLoggedInUser);
  const { todos } = useSelector(selectTodo);

  const logoutHandle = () => {
    dispatch(loginSlice.actions.userLoggedOut());
  };

  return (
    <header className='flex flex-col items-start justify-center'>
      <h1 className='font-medium text-3xl tracking-tight text-slate-900 mb-1'>
        Welcome back, {user?.userName} (
        <button
          className='text-sm bg-red-500 text-white rounded-md p-1 align-middle'
          onClick={logoutHandle}
        >
          🚫 Logout
        </button>
        )
      </h1>
      <h3 className='font-normal text-xl tracking-tight text-slate-400'>
        You've got {todos.length} tasks coming up the next days.
      </h3>
    </header>
  );
};

export default TodoHeader;
