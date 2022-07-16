import React from 'react';
import TodoForm from '@/components/Home/TodoForm';
import TodoList from '@/components/Home/TodoList';
import TodoHeader from '@/components/Home/TodoHeader';

const Home: React.FC = () => {
  return (
    <>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </>
  );
};
export default Home;
