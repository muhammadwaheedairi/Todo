
import React from 'react';
import { 
  ArrowRight, 
  Menu, 
  Layers,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Globe,
  Smartphone,
  Cpu
} from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGetStarted, onLogin }) => {
  return (
    <div className="relative w-full min-h-screen bg-white font-inter selection:bg-[#F45B5B]/30 scroll-smooth overflow-x-hidden">
      {/* Premium Gradient Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-5%] right-[-10%] w-[800px] h-[800px] bg-[#F45B5B]/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#3BAFDA]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[700px] h-[700px] bg-[#F45B5B]/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-2xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#F45B5B] rounded-xl flex items-center justify-center shadow-lg shadow-[#F45B5B]/20">
                <Layers size={22} className="text-white" />
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tighter uppercase">
                Nexulo<span className="text-[#F45B5B]">Tasks</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-500 font-bold hover:text-[#F45B5B] transition-all text-sm">Features</a>
              <a href="#pricing" className="text-gray-500 font-bold hover:text-[#F45B5B] transition-all text-sm">Pricing</a>
              <a href="#testimonials" className="text-gray-500 font-bold hover:text-[#F45B5B] transition-all text-sm">Success Stories</a>
              <div className="h-6 w-px bg-gray-200"></div>
              <button 
                onClick={onLogin}
                className="text-gray-900 font-black hover:text-[#F45B5B] transition-colors text-sm"
              >
                Sign In
              </button>
              <button 
                onClick={onGetStarted}
                className="bg-gray-900 text-white px-7 py-3 rounded-xl font-black shadow-xl hover:bg-[#F45B5B] hover:-translate-y-0.5 transition-all text-sm"
              >
                Get Started
              </button>
            </div>

            <button className="md:hidden p-2 text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-24 px-4">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-xl shadow-gray-200 animate-bounce">
              <Star size={12} fill="#F45B5B" stroke="none" />
              Voted #1 Task Tool of 2024
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-gray-900 leading-[0.95] mb-10 tracking-tighter">
              Where your vision <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F45B5B] to-[#FF8A8A]">finds its flow.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 mb-14 max-w-3xl leading-relaxed font-medium px-4">
              The simplified workspace that grows with you. Manage tasks and insights in a single, high-performance interface.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={onGetStarted}
                className="w-full sm:w-auto bg-[#F45B5B] text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-[#F45B5B]/30 hover:scale-105 hover:bg-[#E04A4A] transition-all flex items-center justify-center gap-3 group"
              >
                Claim your Free Account
                <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </button>
              <p className="text-gray-400 font-bold text-sm">No credit card required.</p>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section id="features" className="py-32 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-10 bg-[#3BAFDA]/5 rounded-full blur-[80px]"></div>
                <img 
                  src="https://img.freepik.com/free-vector/project-management-concept-illustration_114360-1437.jpg" 
                  alt="Productivity UI" 
                  className="relative w-full rounded-[48px] shadow-2xl border border-gray-100"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                  Designed for <br /><span className="text-[#F45B5B]">Deep Work.</span>
                </h2>
                <div className="space-y-10">
                  <FeatureItem 
                    icon={<Smartphone className="text-[#3BAFDA]" />}
                    title="Cross-Platform Sync"
                    description="Your tasks follow you everywhere. Mobile, web, or desktop - sync is instantaneous."
                  />
                  <FeatureItem 
                    icon={<Globe className="text-[#27AE60]" />}
                    title="Global Access"
                    description="Optimized for speed across all continents. NexuloTasks works offline and syncs when you're back."
                  />
                  <FeatureItem 
                    icon={<Cpu className="text-[#F45B5B]" />}
                    title="Clean Experience"
                    description="No clutter, no distractions. Just you and your goals in a minimalist environment."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Detailed Footer */}
        <footer className="bg-white pt-32 pb-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-12 gap-16 mb-24">
              <div className="col-span-2 md:col-span-4">
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="w-10 h-10 bg-[#F45B5B] rounded-xl flex items-center justify-center">
                    <Layers size={22} className="text-white" />
                  </div>
                  <span className="text-2xl font-black text-gray-900 tracking-tighter uppercase">
                    Nexulo<span className="text-[#F45B5B]">Tasks</span>
                  </span>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed max-w-xs mb-10">
                  Revolutionizing how digital professionals handle their workload with elegance and speed.
                </p>
              </div>

              <div className="col-span-1 md:col-span-2">
                <h4 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-[10px]">Company</h4>
                <ul className="space-y-5">
                  <FooterLink>Our Story</FooterLink>
                  <FooterLink>Blog</FooterLink>
                  <FooterLink>Careers</FooterLink>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex gap-6 items-start group">
    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-black text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
    </div>
  </div>
);

const FooterLink = ({ children }: { children: React.ReactNode }) => (
  <li><a href="#" className="text-gray-500 font-bold hover:text-[#F45B5B] transition-colors text-xs uppercase tracking-wider">{children}</a></li>
);

export default HomePage;