import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import data from '../api/data.json';

export type UsersState = {
  entities: User[];
};

const initialState: UsersState = {
  entities: data.users,
};

type DraftUser = RequireOnly<User, 'realName' | 'alterEgo'>;

const createUser = (draftUser: DraftUser): User => ({
  id: nanoid(),
  tasks: [],
  ...draftUser,
});
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const user = createUser(action.payload);
      state.entities.unshift(user);
    },
    removeUser: (state, action: PayloadAction<User['id']>) => {
      const index = state.entities.findIndex(
        (user) => user.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      const index = state.entities.findIndex(
        (user) => user.id === action.payload.id,
      );
      state.entities[index] = {
        ...state.entities[index],
        ...action.payload,
      };
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser, removeUser, updateUser } = usersSlice.actions;

export default usersSlice;
