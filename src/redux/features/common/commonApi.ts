import { apiSlice } from '@/redux/api/apiSlice';

export const commonApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDuasByCatagory: builder.query({
      query: (id: number) => `/duas/${id}`,
    }),
  }),
});

export const {
  useGetDuasByCatagoryQuery,
  util: { getRunningQueriesThunk },
} = commonApi;
export const { getDuasByCatagory } = commonApi.endpoints;
