
import React, { useState } from 'react';
import { Calendar, Image as ImageIcon } from 'lucide-react';
import { TaskPriority } from '../types';

interface AddTaskModalProps {
  onClose: () => void;
  onDone: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onDone }) => {
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.MODERATE);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[24px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 custom-scrollbar">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Title</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-1 focus:ring-[#F45B5B] outline-none" placeholder="Task title" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Date</label>
              <div className="relative">
                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 pr-10 text-sm focus:ring-1 focus:ring-[#F45B5B] outline-none" placeholder="Select date" />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-4">Priority</label>
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              {[
                { type: TaskPriority.EXTREME, color: 'bg-[#F45B5B]', border: 'border-[#F45B5B]' },
                { type: TaskPriority.MODERATE, color: 'bg-[#3BAFDA]', border: 'border-[#3BAFDA]' },
                { type: TaskPriority.LOW, color: 'bg-[#27AE60]', border: 'border-[#27AE60]' }
              ].map((p) => (
                <button key={p.type} onClick={() => setPriority(p.type)} className="flex items-center gap-2 cursor-pointer group">
                  <div className={`w-3 h-3 rounded-full ${priority === p.type ? p.color : 'bg-gray-200'}`} />
                  <span className="text-xs md:text-sm font-bold text-gray-800">{p.type}</span>
                  <div className={`w-5 h-5 border-2 rounded flex items-center justify-center ${priority === p.type ? p.border : 'border-gray-200'}`}>
                    {priority === p.type && <div className={`w-2 h-2 rounded-sm ${p.color}`} />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Description</label>
              <textarea className="w-full h-32 md:h-40 border border-gray-300 rounded-lg p-4 resize-none focus:ring-1 focus:ring-[#F45B5B] outline-none text-sm" placeholder="Start writing..." />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Upload Image</label>
              <div className="w-full h-32 md:h-40 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-[#F45B5B]/30 transition-all">
                <ImageIcon size={32} className="text-gray-300 group-hover:text-[#F45B5B]" />
                <p className="text-[10px] md:text-xs font-medium text-gray-400">Browse or Drag files</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-10 py-6 bg-white border-t border-gray-50">
          <button onClick={onDone} className="w-full md:w-auto bg-[#F45B5B] text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-[#F45B5B]/20">Done</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
