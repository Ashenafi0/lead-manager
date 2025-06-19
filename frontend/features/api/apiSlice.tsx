import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LeadsResponse, LeadRequest, CreateLeadResponse } from '@/types/api';

export const leadsApi = createApi({
  reducerPath: 'leadsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lead-manager-vo9h.onrender.com/api',
  }),
  tagTypes: ['Leads'],
  endpoints: (builder) => ({
    createLead: builder.mutation<CreateLeadResponse, LeadRequest>({
      query: (body) => ({
        url: '/leads',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Leads'],
    }),
    getLeads: builder.query<LeadsResponse, { page: number; limit?: number }>({
      query: ({ page, limit = 9 }) => `/leads?page=${page}&limit=${limit}`,
      providesTags: ['Leads'],
    }),
  }),
});

export const { useCreateLeadMutation, useGetLeadsQuery } = leadsApi;
