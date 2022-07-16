import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTodo } from '@/redux/accessors';
import { TodoContextModel } from '@/interfaces/ITodoContext';
import TodoHeader from '@/components/Home/TodoHeader';
import TodoForm from '@/components/Home/TodoForm';

const TaskDetail: React.FC = () => {
  const selector = useSelector(selectTodo);
  const { pathname } = useLocation();
  const key = pathname?.split('/')?.[2];

  const data = selector?.todos?.find((find: TodoContextModel) => find.id === key);

  return (
    <>
      <TodoHeader />
      <Link
        to='/'
        className='text-sm p-2 tracking-tight font-medium rounded inline-flex mt-4 bg-blue-500 hover:bg-blue-400 text-white'
        replace
        state={{ return_url: location.pathname + location.search }}
      >
        👈 Previous Page
      </Link>
      <TodoForm todo={data} />
    </>
  );
};
export default TaskDetail;
