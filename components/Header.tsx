
import React, { useState, useEffect, useRef } from 'react';
import { Search, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Menu, Layers } from 'lucide-react';

interface HeaderProps {
  activeTab?: string;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab = 'Dashboard', onMenuClick }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = [];
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);
    const today = new Date();

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
    }

    for (let d = 1; d <= totalDays; d++) {
      const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
      days.push(
        <div 
          key={d} 
          className={`h-8 w-8 flex items-center justify-center rounded-lg text-xs font-bold transition-colors ${
            isToday 
              ? 'bg-[#F45B5B] text-white shadow-md' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {d}
        </div>
      );
    }
    return days;
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <header className="h-20 md:h-24 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-20 shrink-0">
      <div className="flex items-center gap-4 md:gap-8 flex-1 min-w-0">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <Menu size={24} />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="hidden xs:flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F45B5B] rounded-lg flex items-center justify-center lg:hidden">
              <Layers size={18} className="text-white" />
            </div>
            <h1 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tighter">
              Nexulo<span className="text-[#F45B5B]">Tasks</span>
            </h1>
          </div>
          <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
          <h2 className="text-sm md:text-lg font-bold text-gray-400 whitespace-nowrap hidden sm:block">{activeTab}</h2>
        </div>
        
        {/* Search Bar */}
        <div className="relative max-w-sm w-full ml-auto md:ml-4">
          <input 
            type="text" 
            placeholder="Quick search..." 
            className="w-full bg-[#F8FAFC] border-none rounded-full py-2.5 md:py-3 px-4 md:px-6 pr-12 md:pr-14 focus:ring-2 focus:ring-[#F45B5B]/20 transition-all text-xs md:text-sm outline-none font-medium"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-[#F45B5B] text-white p-2 md:p-2 rounded-full hover:bg-[#E04A4A] transition-colors">
            <Search size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 relative shrink-0 ml-4">
        {/* Calendar Section */}
        <div ref={calendarRef}>
          <button 
            onClick={() => setShowCalendar(!showCalendar)}
            className={`p-2 md:p-2.5 rounded-xl transition-all ${
              showCalendar 
                ? 'bg-[#F45B5B] text-white shadow-lg' 
                : 'text-[#F45B5B] bg-[#F45B5B]/10 hover:bg-[#F45B5B]/20'
            }`}
          >
            <CalendarIcon size={20} />
          </button>

          {showCalendar && (
            <div className="absolute right-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-800 text-sm">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h4>
                <div className="flex gap-1">
                  <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                    <ChevronLeft size={16} className="text-gray-400" />
                  </button>
                  <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                    <ChevronRight size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayLabels.map(label => <div key={label} className="h-8 w-8 flex items-center justify-center text-[10px] font-bold text-gray-400 uppercase">{label}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
            </div>
          )}
        </div>

        {/* Date Display - Hidden on mobile */}
        <div className="ml-2 text-right leading-none hidden md:block border-l pl-4 border-gray-100">
          <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
            {new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date())}
          </div>
          <div className="text-[#3BAFDA] text-sm font-black mt-0.5">
            {new Intl.DateTimeFormat('en-GB').format(new Date())}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;