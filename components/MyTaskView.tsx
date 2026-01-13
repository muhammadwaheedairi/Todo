
import React, { useState } from 'react';
import { Task, TaskStatus } from '../types';
import TaskDetail from './TaskDetail';
import { MoreHorizontal } from 'lucide-react';

const MyTaskView: React.FC = () => {
  const myTasks: Task[] = [
    {
      id: 'm1',
      title: "Submit Documents",
      description: "Make sure to submit all the necessary documents. Review the list of documents required for submission and ensure all necessary documents are ready...",
      status: TaskStatus.NOT_STARTED,
      createdAt: '20/06/2023'
    },
    {
      id: 'm2',
      title: "Complete assignments",
      description: "The assignments must be completed to pass final year exams. Focus on Mathematics and Science projects first...",
      status: TaskStatus.IN_PROGRESS,
      createdAt: '20/06/2023'
    }
  ];

  const [selectedTask, setSelectedTask] = useState<Task>(myTasks[0]);

  return (
    <div className="h-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-12 gap-8 h-full">
        {/* Left Column: Task List */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 relative inline-block">
              My Tasks
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#F45B5B] rounded-full"></span>
            </h3>
          </div>

          <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
            {myTasks.map((task) => (
              <button
                key={task.id}
                onClick={() => setSelectedTask(task)}
                className={`w-full text-left bg-white border rounded-[24px] p-6 transition-all relative group ${
                  selectedTask.id === task.id 
                    ? 'border-[#F45B5B] shadow-md ring-1 ring-[#F45B5B]' 
                    : 'border-gray-100 hover:border-gray-200 shadow-sm'
                }`}
              >
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 ${
                        task.status === TaskStatus.IN_PROGRESS ? 'border-[#3BAFDA]' : 'border-[#F45B5B]'
                      }`} />
                      <h4 className="font-bold text-gray-800 text-base line-clamp-1">{task.title}</h4>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">
                      {task.description}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-gray-400 font-medium">Status:</span>
                        <span className={`text-[10px] font-bold ${
                          task.status === TaskStatus.NOT_STARTED ? 'text-[#F45B5B]' : 'text-[#3BAFDA]'
                        }`}>{task.status}</span>
                      </div>
                    </div>
                     <div className="mt-1">
                        <span className="text-[10px] text-gray-400 font-medium">Created on: </span>
                        <span className="text-[10px] text-gray-500 font-medium">{task.createdAt}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-gray-300">
                  <MoreHorizontal size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Detail View */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 h-full">
           <TaskDetail task={selectedTask} />
        </div>
      </div>
    </div>
  );
};

export default MyTaskView;