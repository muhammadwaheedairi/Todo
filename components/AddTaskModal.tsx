
import React from 'react';

interface AddTaskModalProps {
  onClose: () => void;
  onDone: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onDone }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[24px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 custom-scrollbar">
        {/* Header */}
        <div className="px-6 md:px-10 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div className="relative">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Add New Task</h2>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F45B5B]"></div>
          </div>
          <button onClick={onClose} className="text-gray-800 text-sm font-bold hover:underline">Go Back</button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-10 space-y-6 md:space-y-8">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Title</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-1 focus:ring-[#F45B5B] outline-none" 
              placeholder="What needs to be done?" 
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Description</label>
            <textarea 
              className="w-full h-32 md:h-40 border border-gray-300 rounded-lg p-4 resize-none focus:ring-1 focus:ring-[#F45B5B] outline-none text-sm" 
              placeholder="Add some details..." 
            />
          </div>
        </div>

        <div className="px-6 md:px-10 py-6 bg-white border-t border-gray-50 flex justify-end">
          <button 
            onClick={onDone} 
            className="bg-[#F45B5B] text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-[#F45B5B]/20 hover:bg-[#E04A4A] transition-colors"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;