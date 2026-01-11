
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import TaskList from './TaskList';
import StatusCharts from './StatusCharts';
import CompletedTasks from './CompletedTasks';
import AddTaskModal from './AddTaskModal';
import { Task } from '../types';
import TaskDetail from './TaskDetail';

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  if (selectedTask) {
    return (
      <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full">
        <TaskDetail task={selectedTask} onGoBack={() => setSelectedTask(null)} />
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Welcome back, Sundar 👋</h1>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Left Column: To-Do Section */}
        <div className="col-span-1 md:col-span-7 lg:col-span-8 bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-8 shadow-sm border border-gray-100 flex flex-col min-h-[500px]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-[#F45B5B] rounded-sm flex items-center justify-center">
                <div className="w-3 h-0.5 bg-[#F45B5B]" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800">To-Do</h3>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1 text-[#F45B5B] font-bold text-sm hover:underline"
            >
              <Plus size={16} strokeWidth={3} />
              Add task
            </button>
          </div>

          <div className="text-xs md:text-sm font-bold text-gray-400 mb-6">
            20 June <span className="mx-1">•</span> Today
          </div>

          <TaskList onSelectTask={setSelectedTask} />
        </div>

        {/* Right Column: Status & Completed */}
        <div className="col-span-1 md:col-span-5 lg:col-span-4 space-y-6 md:space-y-8">
          {/* Status Section */}
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 md:mb-8">Task Status</h3>
            <StatusCharts />
          </div>

          {/* Completed Section */}
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-8 shadow-sm border border-gray-100">
             <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-6 h-6 bg-[#27AE60]/10 border-2 border-[#27AE60] rounded-sm flex items-center justify-center">
                <CheckMarkIcon />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800">Completed</h3>
            </div>
            <CompletedTasks />
          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <AddTaskModal 
          onClose={() => setIsModalOpen(false)} 
          onDone={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

const CheckMarkIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5L4.5 8.5L11 1.5" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Dashboard;
