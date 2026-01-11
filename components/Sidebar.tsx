
import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Settings, 
  HelpCircle, 
  LogOut 
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
      {/* Profile Section */}
      <div className="p-8 pt-12 flex flex-col items-center">
        <div className="relative mb-4">
          <img 
            src="https://picsum.photos/seed/sundar/150/150" 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-white/20 object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">Sundar Gurung</h2>
        <p className="text-white/70 text-sm mt-1 text-center truncate w-full px-2">sundargurung360@gmail.com</p>
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
                    ? 'bg-white text-[#F45B5B] shadow-lg' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <item.icon size={22} strokeWidth={activeTab === item.name ? 2.5 : 2} />
                <span className="font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 mb-4">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-white"
        >
          <LogOut size={22} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
