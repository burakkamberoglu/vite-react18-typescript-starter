import { combineReducers } from 'redux';
import loginSlice from '@/pages/auth/loginSlice';
import todoSlice from '@/pages/home/todoSlice';

export default combineReducers({
  login: loginSlice.reducer,
  todo: todoSlice.reducer,
});
