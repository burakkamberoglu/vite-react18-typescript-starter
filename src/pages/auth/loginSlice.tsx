import { createSlice } from '@reduxjs/toolkit';
import { AuthContextModel } from '@/interfaces/IAuthContext';

interface LoginReduxModel {
  isUserLoggedIn: boolean;
  user: AuthContextModel | boolean | null;
  loading: boolean;
}

const initialState: LoginReduxModel = {
  isUserLoggedIn: false,
  user: null,
  loading: true,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload;
      state.isUserLoggedIn = true;
      state.loading = false;
    },
    userLoggedOut: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
      state.loading = false;
    },
  },
});

export default loginSlice;
