
import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Settings, 
  HelpCircle, 
  LogOut,
  Layers
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'My Task', icon: CheckSquare },
    { name: 'Settings', icon: Settings },
    { name: 'Help', icon: HelpCircle },
  ];

  const handleMenuClick = (name: string) => {
    if (name === 'Help') {
      window.open('https://wa.me/923180297567', '_blank');
      return;
    }
    setActiveTab(name);
  };

  return (
    <aside className="w-[280px] h-full bg-[#F45B5B] text-white flex flex-col shrink-0">
      {/* Branding Section */}
      <div className="p-8 pt-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
          <Layers size={22} className="text-white" />
        </div>
        <h1 className="text-2xl font-black uppercase tracking-tighter">
          Task<span className="text-white/60">Flow</span>
        </h1>
      </div>

      {/* Profile Section */}
      <div className="px-8 py-6 flex flex-col items-center border-y border-white/10 bg-white/5">
        <div className="relative mb-4">
          <img 
            src="https://picsum.photos/seed/sundar/150/150" 
            alt="Profile" 
            className="w-16 h-16 rounded-2xl border-2 border-white/20 object-cover"
          />
        </div>
        <h2 className="text-lg font-bold">Sundar Gurung</h2>
        <p className="text-white/50 text-[10px] uppercase font-black tracking-widest mt-1">Free Tier User</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-8 overflow-y-auto custom-scrollbar">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleMenuClick(item.name)}
                className={`w-full flex items-center gap-3 px-6 py-3.5 rounded-xl transition-all ${
                  activeTab === item.name 
                    ? 'bg-white text-[#F45B5B] shadow-xl' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <item.icon size={20} strokeWidth={activeTab === item.name ? 2.5 : 2} />
                <span className="font-bold text-sm tracking-tight">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 mb-4">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-white group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm tracking-tight">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
