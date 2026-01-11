
import React from 'react';
import { Square, CheckSquare, AlertTriangle } from 'lucide-react';
import { Task, TaskPriority, TaskStatus } from '../types';

interface TaskDetailProps {
  task: Task;
  // Made onGoBack optional to support split views where back navigation isn't needed
  onGoBack?: () => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task, onGoBack }) => {
  return (
    <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-gray-100 h-full flex flex-col relative overflow-y-auto custom-scrollbar">
      {/* Detail Header Navigation - Only show if onGoBack is provided */}
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

      <div className="flex flex-col lg:flex-row gap-10 mb-10">
        {/* Task Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={task.image || 'https://picsum.photos/seed/task/600/400'} 
            alt={task.title} 
            className="w-full aspect-[4/3] rounded-[32px] object-cover shadow-sm border border-gray-100"
          />
        </div>

        {/* Task Summary */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">{task.title}</h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-800">Priority:</span>
              <span className={`text-sm font-bold ${
                task.priority === TaskPriority.EXTREME ? 'text-[#F45B5B]' : 'text-[#3BAFDA]'
              }`}>
                {task.priority}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-800">Status:</span>
              <span className={`text-sm font-bold ${
                task.status === TaskStatus.NOT_STARTED ? 'text-[#F45B5B]' : 'text-[#3BAFDA]'
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

        <section>
          <ol className="list-decimal list-inside space-y-4 text-gray-600 font-medium">
            <li>A cake, with candles to blow out. (Layer cake, cupcake, flat sheet cake)</li>
            <li>The birthday song.</li>
            <li>A place to collect gifts.</li>
          </ol>
        </section>

        <section>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Optional:</h4>
          <ul className="list-disc list-inside space-y-4 text-gray-500">
            <li>Paper cone-shaped party hats, paper whistles that unroll.</li>
            <li>Games, activities (carry an object with your knees, then drop it into a milk bottle.)</li>
            <li>Lunch: sandwich halves, or pizza slices, juice, pretzels, potato chips...THEN cake & candles and the song.</li>
          </ul>
        </section>
      </div>

      {/* Action Buttons Cluster - Bottom Right as per image */}
      <div className="absolute bottom-10 right-10 flex gap-3">
        <button className="w-12 h-12 flex items-center justify-center bg-[#F45B5B] text-white rounded-xl shadow-lg shadow-[#F45B5B]/20 hover:scale-105 transition-all">
          <Square size={20} fill="white" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-[#F45B5B] text-white rounded-xl shadow-lg shadow-[#F45B5B]/20 hover:scale-105 transition-all">
          <CheckSquare size={20} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-[#F45B5B] text-white rounded-xl shadow-lg shadow-[#F45B5B]/20 hover:scale-105 transition-all">
          <AlertTriangle size={20} />
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
