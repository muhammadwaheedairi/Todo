
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Task, TaskStatus } from '../types';

interface TaskListProps {
  onSelectTask: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ onSelectTask }) => {
  const tasks: Task[] = [
    {
      id: '1',
      title: "Attend Nischal's Birthday Party",
      description: "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)...",
      status: TaskStatus.NOT_STARTED,
      createdAt: '20/06/2023'
    },
    {
      id: '2',
      title: "Landing Page Design for TravelDays",
      description: "Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)",
      status: TaskStatus.IN_PROGRESS,
      createdAt: '20/06/2023'
    },
    {
      id: '3',
      title: "Presentation on Final Product",
      description: "Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...",
      status: TaskStatus.NOT_STARTED,
      createdAt: '10/06/2023'
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
      {tasks.map((task) => (
        <div 
          key={task.id} 
          onClick={() => onSelectTask(task)}
          className="bg-white border border-gray-100 rounded-[20px] md:rounded-[24px] p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow group relative cursor-pointer"
        >
          <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${
                  task.status === TaskStatus.IN_PROGRESS ? 'border-blue-500' : 
                  task.status === TaskStatus.COMPLETED ? 'border-green-500' : 'border-[#F45B5B]'
                }`} />
                <h4 className="font-bold text-gray-800 text-base md:text-lg leading-snug">{task.title}</h4>
              </div>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-2 mb-4">
                {task.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-auto">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] md:text-xs text-gray-400 font-medium">Status:</span>
                  <span className={`text-[10px] md:text-xs font-bold ${
                    task.status === TaskStatus.NOT_STARTED ? 'text-[#F45B5B]' : 
                    task.status === TaskStatus.COMPLETED ? 'text-green-500' : 'text-blue-500'
                  }`}>{task.status}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] md:text-xs text-gray-400 font-medium">Date:</span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-medium">{task.createdAt}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;