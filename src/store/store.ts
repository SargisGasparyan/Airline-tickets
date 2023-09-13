import { configureStore } from '@reduxjs/toolkit';
import { ticketsSlice } from './slices/ticketsSlice.ts';

export const store = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
