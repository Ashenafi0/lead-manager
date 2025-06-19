export type Lead = {
  _id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
  __v?: number;
};

export type LeadRequest = {
  name: string;
  email: string;
  status?: string;
};

export type CreateLeadResponse = {
  success: boolean;
  message: string;
  data: Lead;
};

export type LeadsResponse = {
  success: boolean;
  message: string;
  data: {
    leads: Lead[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalLeads: number;
      limit: number;
    };
  };
};
