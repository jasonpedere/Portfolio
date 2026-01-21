import React from 'react';
import { 
  CheckCircle, 
  Calendar, 
  Settings, 
  Building2, 
  Shield, 
  Clock, 
  Zap, 
  MessageCircle,
  ArrowRight,
  Globe,
  CreditCard
} from 'lucide-react';

interface OfferCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitCardProps {
  title: string;
  description: string;
}

const WebServicesMarketingPage: React.FC = () => {
  const handleCTA = () => {
    window.location.href = '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0c] via-[#0f0f14] to-[#0a0a0c]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-purple-600/10 blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
              Limited Time Offer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Affordable Business Website
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              One-Time Payment
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fully working website before payment. No monthly fees. 
            Built specifically for your business needs.
          </p>
          
          <button 
            onClick={handleCTA}
            className="group bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center gap-3 mx-auto"
          >
            Get Your Website Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>6 Months Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Free Domain</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Highlights Section */}
      <section className="py-20 px-6 bg-[#0a0a0c]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What You Get
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to establish your online presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <OfferCard
              icon={<Globe className="w-8 h-8" />}
              title="Customizable Design"
              description="Website fully adjusted to your branding, colors, and business identity"
            />
            <OfferCard
              icon={<Shield className="w-8 h-8" />}
              title="Risk-Free Process"
              description="Full working website delivered first. Pay only when you're satisfied"
            />
            <OfferCard
              icon={<Clock className="w-8 h-8" />}
              title="6 Months Support"
              description="Free technical support and minor updates for half a year included"
            />
            <OfferCard
              icon={<Globe className="w-8 h-8" />}
              title="Free Domain"
              description="Get your own https://www.yourdomain.com if available"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features Included
            </h2>
            <p className="text-xl text-slate-400">
              Professional tools to run your business smoothly
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureItem
              icon={<Calendar className="w-12 h-12" />}
              title="Booking & Reservation System"
              description="Let customers book appointments online 24/7. Automated confirmations and reminders reduce no-shows"
            />
            <FeatureItem
              icon={<Settings className="w-12 h-12" />}
              title="Admin Panel Access"
              description="Easy-to-use dashboard to manage bookings, update content, and view customer information"
            />
            <FeatureItem
              icon={<Building2 className="w-12 h-12" />}
              title="Built for Local Business"
              description="Perfect for restaurants, salons, clinics, spas, repair shops, and service businesses"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0a0a0c] to-indigo-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need. One simple price.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/90 to-indigo-900/30 border-2 border-cyan-500/50 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-1 rounded-full mb-4">
                  BEST VALUE
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-white">₱4,999</span>
                </div>
                <p className="text-2xl font-semibold text-cyan-400 mb-2">One-Time Payment</p>
                <p className="text-slate-400">No monthly fees. Ever.</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <PricingFeature text="Fully customized website design" />
                <PricingFeature text="Booking/reservation system included" />
                <PricingFeature text="Admin panel for easy management" />
                <PricingFeature text="6 months of technical support" />
                <PricingFeature text="Free domain registration (if available)" />
                <PricingFeature text="Mobile-responsive design" />
                <PricingFeature text="Fast loading speed" />
                <PricingFeature text="No hidden charges or surprise fees" />
              </div>
              
              <button 
                onClick={handleCTA}
                className="w-full bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xl font-bold py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                Get Started Now
              </button>
              
              <p className="text-center text-slate-500 mt-6 text-sm">
                🔒 Secure payment. Money-back guarantee if not satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-400">
              Built by developers who understand small business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <BenefitCard
              title="Budget-Friendly for Small Businesses"
              description="We know every peso counts. Our one-time payment model means no recurring costs eating into your profits month after month."
            />
            <BenefitCard
              title="Risk-Free Setup"
              description="See your fully working website first. Test it, review it, use it. Only pay when you're completely satisfied with the result."
            />
            <BenefitCard
              title="Fast Delivery"
              description="Most websites are completed within 7-14 days. We work efficiently without compromising quality to get your business online quickly."
            />
            <BenefitCard
              title="Built for Filipino Businesses"
              description="We understand the local market, Filipino customer behavior, and what works for businesses in the Philippines."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-950/50 via-indigo-950/50 to-purple-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Join hundreds of local businesses who have transformed their online presence. 
            No risk, no monthly fees, just results. Get your professional website today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleCTA}
              className="group bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Message Us Now
            </button>
            
            <button 
              onClick={() => window.location.href = '#pricing'}
              className="bg-slate-800 hover:bg-slate-700 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all border border-slate-600"
            >
              View Pricing
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Quick Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-indigo-500" />
              <span>One-Time Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0a0a0c] border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            ZGeon Solutions
          </h3>
          <p className="text-slate-400 mb-6">
            Empowering local businesses with affordable, professional websites
          </p>
          <div className="flex justify-center gap-8 text-sm text-slate-500">
            <a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <p className="text-slate-600 text-sm mt-6">
            © 2026 ZGeon Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const OfferCard: React.FC<OfferCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 group">
      <div className="bg-gradient-to-r from-cyan-600 to-indigo-600 text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900/60 to-indigo-900/20 border border-slate-700/50 rounded-xl p-8 hover:border-indigo-500/50 transition-all group">
      <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
      <div className="flex items-start gap-3 mb-3">
        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-slate-400 leading-relaxed ml-9">{description}</p>
    </div>
  );
};

const PricingFeature: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
      <span className="text-slate-300">{text}</span>
    </div>
  );
};

export default WebServicesMarketingPage;
