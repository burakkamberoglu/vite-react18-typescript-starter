import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { Form, Formik } from 'formik';
import Input from '@/components/Form/Input';
import ToogleCheckbox from '@/components/Form/ToogleCheckbox';
import { LoginSchema } from '@/validations';
import { useDispatch } from 'react-redux';
import loginSlice from '@/pages/auth/loginSlice';

interface CustomizedState {
  return_url?: string | null;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationState = location.state as CustomizedState;

  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full bg-white p-12 rounded-2xl shadow-xl space-y-8'>
          <div>
            <h2 className='text-center text-3xl font-bold text-gray-700'>Hesabınıza giriş yapın</h2>
          </div>
          <Formik
            initialValues={{
              userName: '',
              password: '',
              rememberMe: true,
            }}
            onSubmit={(values) => {
              dispatch(
                loginSlice.actions.userLoggedIn({
                  id: 1,
                  userName: values.userName!,
                }),
              );
              navigate(locationState?.return_url || '/', {
                replace: true,
                state: {
                  return_url: location.pathname + location.search,
                },
              });
            }}
            validationSchema={LoginSchema}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <Input label='Kullanıcı Adı' name='userName' />
                <Input label='Parola' name='password' />
                <ToogleCheckbox
                  label='Beni Hatırla'
                  name='rememberMe'
                  setFieldValue={setFieldValue}
                />
                <button
                  disabled={isSubmitting}
                  type='submit'
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 disabled:bg-indigo-500 disabled:cursor-not-allowed hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <svg
                      className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  Giriş Yap
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
