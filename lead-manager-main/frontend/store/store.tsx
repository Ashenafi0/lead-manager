import { configureStore } from '@reduxjs/toolkit';
import leadsReducer from '@/features/leads/leadsSlice';
import { leadsApi } from '@/features/api/apiSlice';

export const store = configureStore({
  reducer: {
    leads: leadsReducer,
    [leadsApi.reducerPath]: leadsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(leadsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;