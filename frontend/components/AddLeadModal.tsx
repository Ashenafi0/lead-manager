import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; status: string }) => Promise<void>;
}

interface FormInputs {
  name: string;
  email: string;
  status: string;
}

const AddLeadModal: React.FC<AddLeadModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const [serverError, setServerError] = useState<string | null>(null);

  const handleFormSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await onSubmit(data);
      reset();
      onClose();
      setServerError(null); 
    } catch (error: unknown) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else if (error && typeof error === "object" && "data" in error && error.data && typeof error.data === "object" && "message" in error.data) {
        setServerError((error as { data: { message: string } }).data.message);
      } else {
        setServerError('An unexpected error occurred. Please try again.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl w-11/12 md:w-2/5 lg:w-1/3 p-8 border border-white/30">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-900">Add New Lead</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl font-bold" aria-label="Close">&times;</button>
        </div>
        {serverError && (
          <div className="mb-4 p-2 bg-red-100 text-red-600 rounded-md">
            {serverError}
          </div>
        )}
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white/70 shadow-inner px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white/70 shadow-inner px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              {...register('status', { required: 'Status is required' })}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white/70 shadow-inner px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            >
              <option value="New">New</option>
              <option value="Engaged">Engaged</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Closed-Won">Closed-Won</option>
              <option value="Closed-Lost">Closed-Lost</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>
            )}
          </div>
          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow hover:from-indigo-700 hover:to-purple-700 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLeadModal;