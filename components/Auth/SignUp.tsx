
import React from 'react';
import { User, Mail, Lock } from 'lucide-react';

interface SignUpProps {
  onRegister: () => void;
  onGoToSignIn: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onRegister, onGoToSignIn }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Side: Illustration */}
        <div className="hidden lg:flex items-center justify-center p-8">
          <img 
            src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg" 
            alt="Auth illustration" 
            className="w-full max-w-lg object-contain"
          />
        </div>

        {/* Right Side: Form */}
        <div className="p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sign Up</h1>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onRegister(); }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF8A8A]">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A8A]/20 focus:border-[#FF8A8A] transition-all"
                />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF8A8A]">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A8A]/20 focus:border-[#FF8A8A] transition-all"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF8A8A]">
                <User size={18} />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A8A]/20 focus:border-[#FF8A8A] transition-all"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF8A8A]">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Enter Email"
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A8A]/20 focus:border-[#FF8A8A] transition-all"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF8A8A]">
                <Lock size={18} />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A8A]/20 focus:border-[#FF8A8A] transition-all"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF8A8A]">
                <Lock size={18} />
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A8A]/20 focus:border-[#FF8A8A] transition-all"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 rounded border-gray-300 text-[#FF8A8A] focus:ring-[#FF8A8A]"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm font-medium select-none">
                I agree to all terms
              </label>
            </div>

            <button
              type="submit"
              className="w-40 py-4 mt-4 bg-[#FF8A8A] text-white rounded-2xl font-bold text-lg hover:bg-[#ff7575] transition-colors shadow-lg shadow-[#FF8A8A]/20"
            >
              Register
            </button>
          </form>

          <p className="mt-8 text-gray-600 font-medium">
            Already have an account?{' '}
            <button 
              onClick={onGoToSignIn}
              className="text-[#3BAFDA] font-bold hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
