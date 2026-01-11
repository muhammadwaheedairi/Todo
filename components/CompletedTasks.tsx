
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const CompletedTasks: React.FC = () => {
  const completedTasks = [
    {
      id: 'c1',
      title: 'Walk the dog',
      description: 'Take the dog to the park and bring treats as well.',
      completedAt: 'Completed 2 days ago.',
      image: 'https://picsum.photos/seed/dog/200/200'
    },
    {
      id: 'c2',
      title: 'Conduct meeting',
      description: 'Meet with the client and finalize requirements.',
      completedAt: 'Completed 2 days ago.',
      image: 'https://picsum.photos/seed/office/200/200'
    }
  ];

  return (
    <div className="space-y-6">
      {completedTasks.map((task) => (
        <div 
          key={task.id} 
          className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-shadow relative"
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded-full border-2 border-[#27AE60]" />
                <h4 className="font-bold text-gray-800 text-base line-through opacity-70">{task.title}</h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                {task.description}
              </p>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-gray-400 font-medium">Status:</span>
                  <span className="text-[10px] text-[#27AE60] font-bold">Completed</span>
                </div>
                <div className="text-[10px] text-gray-400 font-medium">
                  {task.completedAt}
                </div>
              </div>
            </div>

            <img 
              src={task.image} 
              alt="task" 
              className="w-16 h-16 rounded-xl object-cover shrink-0 grayscale opacity-80"
            />

            <button className="absolute top-6 right-6 text-gray-300 hover:text-gray-500 transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;
