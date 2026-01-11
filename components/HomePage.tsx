
import React from 'react';
import { 
  CheckCircle, 
  Layout, 
  Shield, 
  Zap, 
  ArrowRight, 
  Menu, 
  MousePointer2, 
  BarChart3, 
  Layers,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Globe,
  Smartphone,
  Cpu,
  Mail
} from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGetStarted, onLogin }) => {
  return (
    <div className="relative w-full min-h-screen bg-white font-inter selection:bg-[#F45B5B]/30 scroll-smooth overflow-x-hidden">
      {/* Premium Gradient Background Blobs - Absolute instead of Fixed to move with scroll */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-5%] right-[-10%] w-[800px] h-[800px] bg-[#F45B5B]/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#3BAFDA]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[700px] h-[700px] bg-[#F45B5B]/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation - Uses fixed for proper visibility on scroll */}
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
              The workspace that grows with you. Manage projects, tasks, and insights in a single, high-performance interface.
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

        {/* Trusted By / Logo Cloud */}
        <section className="py-20 border-y border-gray-50 bg-[#F8FAFC]/50">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-gray-400 font-black text-xs uppercase tracking-widest mb-12">Empowering the world's most productive teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
              <LogoPlaceholder name="TRAVELDAYS" />
              <LogoPlaceholder name="NEXUS" />
              <LogoPlaceholder name="AETHER" />
              <LogoPlaceholder name="SPARK" />
              <LogoPlaceholder name="ORBIT" />
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
                    title="AI-Powered Sorting"
                    description="Our algorithm learns your habits and automatically suggests priorities for your day."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-16 tracking-tight">Flexible plans for <span className="text-[#F45B5B]">everyone.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard 
                name="Starter" 
                price="0" 
                features={["Unlimited Tasks", "Basic Charts", "Mobile Sync", "Community Support"]} 
              />
              <PricingCard 
                name="Professional" 
                price="12" 
                featured={true}
                features={["Everything in Starter", "AI Priority Sorting", "Advanced Analytics", "Priority Support", "Custom Themes"]} 
              />
              <PricingCard 
                name="Enterprise" 
                price="Custom" 
                features={["Full Team Workspace", "SAML SSO", "Audit Logs", "Dedicated Account Manager", "Unlimited API Access"]} 
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-32 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <TestimonialCard 
                quote="NexuloTasks didn't just organize my day, it organized my life. The UI is a masterclass in modern design."
                author="Sarah Jenkins"
                role="Lead Designer at Apple"
                image="https://picsum.photos/seed/sarah/100/100"
              />
              <TestimonialCard 
                quote="We replaced three different tools with NexuloTasks. Our team's velocity increased by 40% in the first month."
                author="Marcus Chen"
                role="CTO at TechFlow"
                image="https://picsum.photos/seed/marcus/100/100"
              />
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-32 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Get productivity tips in your inbox.</h2>
            <p className="text-gray-400 mb-12 text-lg font-medium">Join 50,000+ achievers who get our weekly newsletter.</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F45B5B] transition-all"
              />
              <button className="bg-[#F45B5B] text-white px-10 py-4 rounded-2xl font-black hover:bg-[#E04A4A] transition-all">
                Subscribe
              </button>
            </form>
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
                <div className="flex gap-4">
                  <SocialLink icon={<Twitter size={20} />} />
                  <SocialLink icon={<Facebook size={20} />} />
                  <SocialLink icon={<Linkedin size={20} />} />
                  <SocialLink icon={<Instagram size={20} />} />
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <h4 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-[10px]">Solutions</h4>
                <ul className="space-y-5">
                  <FooterLink>For Solo Creators</FooterLink>
                  <FooterLink>For Startups</FooterLink>
                  <FooterLink>For Enterprises</FooterLink>
                  <FooterLink>Daily Workflow</FooterLink>
                </ul>
              </div>

              <div className="col-span-1 md:col-span-2">
                <h4 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-[10px]">Resources</h4>
                <ul className="space-y-5">
                  <FooterLink>Documentation</FooterLink>
                  <FooterLink>Help Center</FooterLink>
                  <FooterLink>Academy</FooterLink>
                  <FooterLink>API Reference</FooterLink>
                </ul>
              </div>

              <div className="col-span-1 md:col-span-2">
                <h4 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-[10px]">Legal</h4>
                <ul className="space-y-5">
                  <FooterLink>Privacy Policy</FooterLink>
                  <FooterLink>Terms of Service</FooterLink>
                  <FooterLink>Cookie Policy</FooterLink>
                  <FooterLink>Security</FooterLink>
                </ul>
              </div>

              <div className="col-span-1 md:col-span-2">
                <h4 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-[10px]">Company</h4>
                <ul className="space-y-5">
                  <FooterLink>Our Story</FooterLink>
                  <FooterLink>Blog</FooterLink>
                  <FooterLink>Careers</FooterLink>
                  <FooterLink>Press Kit</FooterLink>
                </ul>
              </div>
            </div>

            <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <span>© 2024 NEXULO TASKS INC.</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <Globe size={14} /> English (US)
                </span>
              </div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center md:text-right">
                Built with precision and heart in San Francisco
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

const LogoPlaceholder = ({ name }: { name: string }) => (
  <span className="text-2xl font-black tracking-widest">{name}</span>
);

const PricingCard = ({ name, price, features, featured = false }: { name: string, price: string, features: string[], featured?: boolean }) => (
  <div className={`p-10 rounded-[40px] border ${featured ? 'bg-gray-900 border-gray-900 text-white shadow-2xl scale-105' : 'bg-white border-gray-100 text-gray-900'} transition-all text-left flex flex-col relative overflow-hidden`}>
    {featured && <div className="absolute top-0 right-0 bg-[#F45B5B] px-6 py-2 rounded-bl-3xl font-black text-[10px] uppercase tracking-widest">Most Popular</div>}
    <div className={`text-[10px] font-black uppercase tracking-widest mb-6 ${featured ? 'text-[#F45B5B]' : 'text-gray-400'}`}>{name}</div>
    <div className="flex items-baseline gap-1 mb-10">
      <span className="text-4xl font-black">{price === 'Custom' ? '' : '$'}</span>
      <span className="text-6xl font-black">{price}</span>
      {price !== 'Custom' && <span className={`text-sm font-bold ${featured ? 'text-gray-400' : 'text-gray-400'}`}>/month</span>}
    </div>
    <ul className="space-y-5 mb-12 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 font-medium text-sm">
          <CheckCircle size={18} className={featured ? 'text-[#F45B5B]' : 'text-[#27AE60]'} />
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-5 rounded-2xl font-black transition-all ${featured ? 'bg-[#F45B5B] text-white hover:bg-[#E04A4A]' : 'bg-gray-900 text-white hover:bg-black'}`}>
      Choose {name}
    </button>
  </div>
);

const TestimonialCard = ({ quote, author, role, image }: { quote: string, author: string, role: string, image: string }) => (
  <div className="flex-1 p-12 bg-white border border-gray-100 rounded-[48px] shadow-sm hover:shadow-xl transition-all group">
    <div className="flex gap-1 mb-8">
      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#F45B5B" stroke="none" />)}
    </div>
    <p className="text-2xl font-bold text-gray-900 mb-10 leading-tight">"{quote}"</p>
    <div className="flex items-center gap-4">
      <img src={image} className="w-14 h-14 rounded-2xl object-cover" alt={author} />
      <div>
        <div className="font-black text-gray-900">{author}</div>
        <div className="text-gray-400 font-bold text-xs uppercase tracking-widest">{role}</div>
      </div>
    </div>
  </div>
);

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#F45B5B] hover:text-white transition-all">
    {icon}
  </a>
);

const FooterLink = ({ children }: { children: React.ReactNode }) => (
  <li><a href="#" className="text-gray-500 font-bold hover:text-[#F45B5B] transition-colors text-xs uppercase tracking-wider">{children}</a></li>
);

export default HomePage;