import { createSlice } from '@reduxjs/toolkit';

interface IBasketState {}

const initialState: IBasketState = {};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
});

// export {} = basketSlice.actions;

export default basketSlice.reducer;
