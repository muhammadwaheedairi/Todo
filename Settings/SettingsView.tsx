
import React, { useState } from 'react';
import AccountInfo from './AccountInfo';
import ChangePassword from './ChangePassword';

const SettingsView: React.FC = () => {
  const [currentSubView, setCurrentSubView] = useState<'account' | 'password'>('account');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {currentSubView === 'account' ? (
        <AccountInfo 
          onGoBack={() => {}} 
          onChangePassword={() => setCurrentSubView('password')} 
        />
      ) : (
        <ChangePassword 
          onGoBack={() => setCurrentSubView('account')} 
          onCancel={() => setCurrentSubView('account')} 
        />
      )}
    </div>
  );
};

export default SettingsView;
