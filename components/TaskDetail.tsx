
import React from 'react';
import { Task, TaskStatus } from '../types';

interface TaskDetailProps {
  task: Task;
  onGoBack?: () => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task, onGoBack }) => {
  return (
    <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-gray-100 h-full flex flex-col relative overflow-y-auto custom-scrollbar">
      {/* Detail Header Navigation */}
      {onGoBack && (
        <div className="flex justify-end mb-4">
          <button 
            onClick={onGoBack}
            className="text-gray-800 text-sm font-bold hover:underline"
          >
            Go Back
          </button>
        </div>
      )}

      <div className="mb-10">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">{task.title}</h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-800">Status:</span>
              <span className={`text-sm font-bold ${
                task.status === TaskStatus.NOT_STARTED ? 'text-[#F45B5B]' : 
                task.status === TaskStatus.COMPLETED ? 'text-green-500' : 'text-[#3BAFDA]'
              }`}>
                {task.status}
              </span>
            </div>
            <div className="text-sm text-gray-400 font-medium">
              Created on: {task.createdAt}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-10 flex-1">
        <p className="text-gray-500 leading-relaxed font-medium">
          {task.description}
        </p>

        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Task Details</h4>
          <p className="text-gray-600 font-medium">
            This task was created on {task.createdAt}. You can update its status from the main dashboard.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TaskDetail;