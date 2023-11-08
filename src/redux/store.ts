import { configureStore } from '@reduxjs/toolkit';
import commonSlice from '@/redux/features/common/commonSlice';
import { apiReducer, apiMiddleware, apiReducerPath } from '@/redux/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiReducerPath]: apiReducer,
    common: commonSlice,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiMiddleware);
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
