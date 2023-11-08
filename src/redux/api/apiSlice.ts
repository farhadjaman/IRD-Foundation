// Path: client\src\app\store.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: [''],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASE_URL }),
  endpoints: (builder) => ({}),
});

const apiReducer = apiSlice.reducer;
const apiMiddleware = apiSlice.middleware;
const apiReducerPath = apiSlice.reducerPath;

export { apiReducer, apiMiddleware, apiReducerPath };
