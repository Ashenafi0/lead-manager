import React from 'react';
import { Lead } from '@/types/api';

interface LeadCardProps {
  lead: Lead;
}

const LeadCard: React.FC<LeadCardProps> = ({ lead }) => {
  // Define status colors based on the lead's status
  const statusColors: { [key: string]: string } = {
    New: 'bg-green-100 text-green-800',
    Contacted: 'bg-blue-100 text-blue-800',
    Qualified: 'bg-yellow-100 text-yellow-800',
    Lost: 'bg-red-100 text-red-800',
    // Add more statuses as needed
  };

  const statusClass = statusColors[lead.status] || 'bg-gray-100 text-gray-800';

  return (
    <div className="w-[350px] rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mb-10">
      <div className="px-6 py-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
              {lead.name[0]}
            </div>
            <h3 className="font-semibold text-lg text-gray-900">{lead.name}</h3>
          </div>
          <p className="text-gray-500 text-sm font-mono">{lead.email}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusClass}`}>{lead.status}</span>
          <p className="text-gray-400 text-xs">Created: {new Date(lead.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;