
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MyTaskView from './components/MyTaskView';
import SettingsView from './Settings/SettingsView';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { Menu, X } from 'lucide-react';

type View = 'signin' | 'signup' | 'app';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [view, setView] = useState<View>('signin');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogin = () => setView('app');
  const handleLogout = () => setView('signin');
  const goToSignUp = () => setView('signup');
  const goToSignIn = () => setView('signin');

  if (view === 'signin') {
    return <SignIn onLogin={handleLogin} onGoToSignUp={goToSignUp} />;
  }

  if (view === 'signup') {
    return <SignUp onRegister={handleLogin} onGoToSignIn={goToSignIn} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'My Task':
        return <MyTaskView />;
      case 'Settings':
        return <SettingsView />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl text-gray-400 font-medium">{activeTab} coming soon...</h2>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#F0F2F5] overflow-hidden relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Drawer on mobile, Fixed on desktop */}
      <div className={`
        fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsSidebarOpen(false);
          }} 
          onLogout={handleLogout} 
        />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        <Header 
          activeTab={activeTab} 
          onMenuClick={() => setIsSidebarOpen(true)} 
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
