import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Static State
// const initialState = [
//   { id: '0', name: 'Jake Lebowski' },
//   { id: '1', name: 'Ryan Zebowski' },
//   { id: '2', name: 'Dave Rebowski' },
// ];

// State from an API call
const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
// since fetchUsers is a asyncThunck action that occurs out of the Slice we define an extraReducer

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
