
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const StatusCharts: React.FC = () => {
  const data = [
    { name: 'Completed', value: 84, color: '#27AE60' },
    { name: 'In Progress', value: 46, color: '#3BAFDA' },
    { name: 'Not Started', value: 13, color: '#F45B5B' },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full mb-8">
        {data.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="relative w-20 h-20">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { value: item.value },
                      { value: 100 - item.value },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={28}
                    outerRadius={38}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill={item.color} />
                    <Cell fill="#F1F5F9" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-700">
                {item.value}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs font-bold text-gray-500">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusCharts;
