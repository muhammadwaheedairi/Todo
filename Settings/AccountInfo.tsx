
import React from 'react';

interface AccountInfoProps {
  onGoBack: () => void;
  onChangePassword: () => void;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ onGoBack, onChangePassword }) => {
  return (
    <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="relative">
          <h2 className="text-2xl font-bold text-gray-800">Account Information</h2>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-[#F45B5B] rounded-full"></div>
        </div>
        <button 
          onClick={onGoBack}
          className="text-gray-800 font-bold hover:underline text-sm"
        >
          Go Back
        </button>
      </div>

      <div className="flex items-center gap-6 mb-10">
        <img 
          src="https://picsum.photos/seed/sundar/150/150" 
          alt="Profile" 
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800">Sundar Gurung</h3>
          <p className="text-gray-500">sundargurung360@gmail.com</p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-[24px] p-8 border border-gray-100">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">First Name</label>
              <input 
                type="text" 
                defaultValue="Sundar"
                className="w-full bg-white border border-gray-300 rounded-lg p-3.5 focus:ring-2 focus:ring-[#F45B5B]/10 focus:border-[#F45B5B] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Last Name</label>
              <input 
                type="text" 
                defaultValue="Gurung"
                className="w-full bg-white border border-gray-300 rounded-lg p-3.5 focus:ring-2 focus:ring-[#F45B5B]/10 focus:border-[#F45B5B] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Email Address</label>
              <input 
                type="email" 
                defaultValue="sundargurung360@gmail.com"
                className="w-full bg-white border border-gray-300 rounded-lg p-3.5 focus:ring-2 focus:ring-[#F45B5B]/10 focus:border-[#F45B5B] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Contact Number</label>
              <input 
                type="text" 
                placeholder="Enter contact number"
                className="w-full bg-white border border-gray-300 rounded-lg p-3.5 focus:ring-2 focus:ring-[#F45B5B]/10 focus:border-[#F45B5B] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Position</label>
              <input 
                type="text" 
                placeholder="Enter your position"
                className="w-full bg-white border border-gray-300 rounded-lg p-3.5 focus:ring-2 focus:ring-[#F45B5B]/10 focus:border-[#F45B5B] outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="submit"
              className="bg-[#F45B5B] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#F45B5B]/20 hover:bg-[#E04A4A] transition-colors"
            >
              Update Info
            </button>
            <button 
              type="button"
              onClick={onChangePassword}
              className="bg-[#F45B5B] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#F45B5B]/20 hover:bg-[#E04A4A] transition-colors"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInfo;
