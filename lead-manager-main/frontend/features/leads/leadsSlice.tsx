import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Lead } from '@/types/api';

interface LeadsState {
  leads: Lead[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalLeads: number;
    limit: number;
  };
}

const initialState: LeadsState = {
  leads: [],
  pagination: {
    currentPage: 1,
    totalPages: 0,
    totalLeads: 0,
    limit: 9,
  },
};

const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    addLead: (state, action: PayloadAction<Lead>) => {
      state.leads.push(action.payload);
    },
    setLeads: (
      state,
      action: PayloadAction<{
        leads: Lead[];
        pagination: LeadsState['pagination'];
      }>,
    ) => {
      state.leads = action.payload.leads;
      state.pagination = action.payload.pagination;
    },
  },
});

export const { addLead, setLeads } = leadsSlice.actions;
export default leadsSlice.reducer;