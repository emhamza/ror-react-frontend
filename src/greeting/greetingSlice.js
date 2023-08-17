import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: {},
  isLoading: false,
  error: undefined,
};

export const takeGreeting = createAsyncThunk('greeting/random', async () => {
  const greeting = await axios.get('http://localhost:3000/api/random_greeting');
  return greeting.data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(takeGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(takeGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    });
    builder.addCase(takeGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default greetingSlice.reducer;
