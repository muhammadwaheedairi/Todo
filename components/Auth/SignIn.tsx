
import React from 'react';
import { User, Lock, Facebook } from 'lucide-react';

interface SignInProps {
  onLogin: () => void;
  onGoToSignUp: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onLogin, onGoToSignUp }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* Illustration - Top on mobile, Right on desktop */}
        <div className="flex items-center justify-center p-4 md:p-8 order-1 lg:order-2">
          <img 
            src="https://img.freepik.com/free-vector/payment-concept-illustration_114360-1555.jpg" 
            alt="Welcome illustration" 
            className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Form - Bottom on mobile, Left on desktop */}
        <div className="p-4 md:p-8 lg:p-12 order-2 lg:order-1 bg-white rounded-3xl lg:shadow-none">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Sign In</h1>
          
          <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF8A8A]">
                <User size={18} />
              </div>
              <input
                type="text"
                placeholder="Username"
                className="block w-full pl-12 md:pl-14 pr-4 py-3.5 md:py-4 border border-gray-300 rounded-xl md:rounded-2xl text-sm md:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A8A]/20 focus:border-[#FF8A8A] transition-all"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 md:pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#FF8A8A]">
                <Lock size={18} />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="block w-full pl-12 md:pl-14 pr-4 py-3.5 md:py-4 border border-gray-300 rounded-xl md:rounded-2xl text-sm md:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A8A]/20 focus:border-[#FF8A8A] transition-all"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 text-[#FF8A8A] focus:ring-[#FF8A8A]"
              />
              <label htmlFor="remember" className="text-gray-600 text-xs md:text-sm font-medium select-none">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full md:w-40 py-3 md:py-4 bg-[#FF8A8A] text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-[#ff7575] transition-colors shadow-lg shadow-[#FF8A8A]/20"
            >
              Login
            </button>
          </form>

          <div className="mt-8 md:mt-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <span className="text-gray-600 font-medium text-sm">Or, Login with</span>
              <div className="flex items-center gap-4">
                <button className="p-1 text-[#1877F2] hover:scale-110 transition-transform"><Facebook size={24} fill="currentColor" /></button>
                <button className="p-1 text-[#EA4335] hover:scale-110 transition-transform"><GoogleIcon /></button>
                <button className="p-1 text-black hover:scale-110 transition-transform"><XIcon /></button>
              </div>
            </div>
            <p className="text-gray-600 font-medium text-sm">
              No account?{' '}
              <button onClick={onGoToSignUp} className="text-[#3BAFDA] font-bold hover:underline">Create One</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ... Icons same as original ...
const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.487h2.039L6.486 3.24H4.298l13.311 17.4z" fill="currentColor"/>
  </svg>
);

export default SignIn;
