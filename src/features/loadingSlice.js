import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoadingTrue: (state, action) => {
      state.loading = action.payload;
    },
    setLoadingFalse: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoadingTrue, setLoadingFalse } = loadingSlice.actions;

export const selectLoadingState = (state) => state.loading.loading;

export default loadingSlice.reducer;
