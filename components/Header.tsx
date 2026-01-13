
import React from 'react';
import { Menu, Layers } from 'lucide-react';

interface HeaderProps {
  activeTab?: string;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab = 'Dashboard', onMenuClick }) => {
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
      </div>

      <div className="flex items-center gap-2 md:gap-4 relative shrink-0 ml-4">
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