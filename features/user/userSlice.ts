import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import moment from 'moment';

interface UserState {
  userName: string;
  accessToken: string;
  expire?: string;
}

const initialState: UserState = {
  userName: '',
  accessToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.userName = '';
      state.accessToken = '';
      state.expire = '';
    },
    login: (
      state,
      action: PayloadAction<{name: string; accessToken: string}>,
    ) => {
      state.userName = action.payload.name;
      state.accessToken = action.payload.accessToken;
      state.expire = moment().add(1, 'day').toString();
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
