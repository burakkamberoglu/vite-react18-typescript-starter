import React, { useId } from 'react';
import { TodoSchema } from '@/validations';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import todoSlice from '@/pages/home/todoSlice';
import { TodoContextModel } from '@/interfaces/ITodoContext';
import { useNavigate } from 'react-router-dom';

type Props = {
  todo?: TodoContextModel;
};

const TodoForm: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        id: todo?.id || '',
        todo: todo?.todo || '',
        done: todo?.done || false,
      }}
      onSubmit={(values, formikHelpers) => {
        if (todo) {
          dispatch(
            todoSlice.actions.updateTodo({
              id: todo?.id,
              todo: values.todo,
              done: values.done,
            }),
          );
          return;
        }
        dispatch(
          todoSlice.actions.addNewTodo({
            id: new Date().getTime().toString(36),
            todo: values.todo,
            done: values.done,
          }),
        );
        formikHelpers.resetForm();
      }}
      validationSchema={TodoSchema}
    >
      {({ setFieldValue, values, errors }) => (
        <Form
          className={`h-12 mt-5 mb-5 flex items-center relative justify-center px-6 ${
            todo ? 'bg-white py-8 shadow-md rounded-md' : ''
          }`}
        >
          <input
            id='done'
            name='done'
            type='checkbox'
            checked={values.done}
            onChange={(e) => setFieldValue('done', e.target.checked)}
            className='w-4 h-4 shadow cursor-pointer bg-slate-50 rounded border-slate-300 focus:ring-slate-300 focus:ring-1'
          />
          <input
            id='todo'
            name='todo'
            className={`h-12 bg-transparent tracking-tight border-none w-full px-4 py-2 text-lg text-slate-400 ${
              todo ? 'mx-3 focus:ring-slate-300' : 'focus:ring-0 focus:outline-none'
            }`}
            type='text'
            value={values.todo}
            onChange={(e) => setFieldValue('todo', e.target.value)}
            placeholder='Add a new task...'
          />
          {errors.todo && (
            <div className='text-red-500 tracking-tight border border-slate-100 font-medium text-xs p-1 ml-1 shadow-sm rounded-sm absolute left-12 -bottom-[35%] bg-white'>
              {errors.todo}
            </div>
          )}
          {todo && (
            <div className='space-x-2 flex'>
              <button
                onClick={() => {
                  dispatch(todoSlice.actions.deleteTodo(todo.id));
                  navigate('/');
                }}
                className='bg-red-700 w-20 text-xs hover:bg-red-600 transition font-medium p-1 rounded text-white tracking-tight '
                type='button'
              >
                ❌ Delete
              </button>
              <button
                className='bg-green-700 w-20 text-xs hover:bg-green-600 transition font-medium p-1 rounded text-white tracking-tight '
                type='submit'
              >
                ✅ Update
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
