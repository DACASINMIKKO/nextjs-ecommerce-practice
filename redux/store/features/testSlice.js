import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "username",
  password: "password",
  firstName: "firstName",
  lastName: "lastName",
  count: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    returnState: (state, action) => {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.username,
        count: 0,
      };
    },
    mutateState: (state, action) => {
      const { username, password, firstName, lastName, count } = state;

      state.username = action.payload.username;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.count += 1;
    },
  },
});

export const { returnState, mutateState } = testSlice.actions;
export default testSlice.reducer;
