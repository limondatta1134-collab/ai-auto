import { motion } from "motion/react";
import { 
  MessageSquare, 
  Calendar, 
  ShieldCheck, 
  PlayCircle, 
  CheckCircle2, 
  Zap, 
  Globe, 
  Users,
  MousePointerClick,
  Database,
  BellRing,
  Rocket,
  BrainCircuit,
  TrendingUp
} from "lucide-react";

const Navbar = () => (
  <header className="relative z-50 border-b border-slate-800/50 backdrop-blur-md bg-[#0a0f14]/80 px-6 py-4 lg:px-20">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-primary">
          <Zap size={32} className="fill-primary" />
        </div>
        <h2 className="font-display text-xl font-bold tracking-tight text-slate-100">Nexus AI</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {["Solutions", "Case Studies", "Pricing", "About"].map((item) => (
          <a key={item} className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href={`#${item.toLowerCase().replace(' ', '-')}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button className="bg-primary text-white font-bold py-2 px-6 rounded-lg text-sm hover:opacity-90 transition-all glow-effect">
          Get Started
        </button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 lg:py-32 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-8 text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Next-Gen AI Automation</span>
        </div>
        <h1 className="font-display text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
          Turn Missed Leads Into <span className="text-primary italic">Booked Appointments</span> — 24/7
        </h1>
        <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">
          We build AI-powered lead capture & booking systems that automatically qualify prospects and fill your calendar without manual follow-ups.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="h-14 px-8 bg-primary text-white font-bold rounded-lg flex items-center justify-center hover:opacity-90 transition-all glow-effect text-lg">
            Book Free Automation Audit
          </button>
          <button className="h-14 px-8 bg-slate-800 text-white font-bold rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all text-lg gap-2">
            <PlayCircle size={24} />
            Watch Demo
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0a0f14] bg-slate-700 overflow-hidden">
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <span>Trusted by 500+ service businesses</span>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden aspect-video shadow-2xl">
          <img 
            src="https://picsum.photos/seed/ai-network/1280/720?blur=2" 
            className="absolute inset-0 w-full h-full object-cover opacity-80" 
            alt="AI Visualization" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/50 text-white cursor-pointer hover:scale-110 transition-transform">
              <PlayCircle size={48} className="fill-white/20" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </main>
);

const Services = () => (
  <section id="solutions" className="relative z-10 py-24 bg-slate-950/50 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Stop Losing Leads to <span className="text-primary underline decoration-slate-700 underline-offset-8">Slow Response Times</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Our AI systems ensure every prospect is engaged, qualified, and booked within seconds. Scale your revenue without scaling your headcount.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "24/7 Lead Capture",
            desc: "Never miss a lead, even while you sleep. Our AI agents are persistent, polite, and always available to start a conversation.",
            icon: <MessageSquare size={32} />,
            features: ["Instagram DM Automation", "Website Custom Chatbots"]
          },
          {
            title: "Auto-Qualification",
            desc: "Filter out window shoppers and price-checkers automatically. Only speak to high-intent prospects that meet your exact criteria.",
            icon: <ShieldCheck size={32} />,
            features: ["CRM Lead Tagging", "Custom Intent Scoring"]
          },
          {
            title: "Instant Booking",
            desc: "Seamless integration with your Google or Outlook calendar for zero-friction scheduling. Book meetings directly from the chat.",
            icon: <Calendar size={32} />,
            features: ["Google Calendar Sync", "Automated Follow-ups"]
          }
        ].map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="group p-8 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-primary/50 transition-all flex flex-col gap-6"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              {service.icon}
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-slate-100 mb-2">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 size={16} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessFlow = () => (
  <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">The 6-Step Automation Flow</h2>
      <p className="text-slate-400">From initial contact to confirmed meeting in minutes</p>
    </div>
    <div className="relative grid grid-cols-1 md:grid-cols-6 gap-8">
      <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 flow-line opacity-20"></div>
      {[
        { step: 1, icon: <MousePointerClick size={24} />, title: "Lead Entry", sub: "Ad or Social Media click" },
        { step: 2, icon: <MessageSquare size={24} />, title: "AI Chat", sub: "Instant qualification chat" },
        { step: 3, icon: <Database size={24} />, title: "Data Capture", sub: "Auto-sync to CRM" },
        { step: 4, icon: <Calendar size={24} />, title: "Auto-Book", sub: "Selected calendar slot" },
        { step: 5, icon: <BellRing size={24} />, title: "Reminders", sub: "SMS/Email reminders" },
        { step: 6, icon: <Users size={24} />, title: "The Call", sub: "Closing the qualified lead" },
      ].map((item, idx) => (
        <div key={idx} className="relative flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4 z-10 border-4 border-[#0a0f14]">
            {item.step}
          </div>
          <div className="text-primary mb-3">{item.icon}</div>
          <h4 className="font-bold text-slate-100 mb-2">{item.title}</h4>
          <p className="text-xs text-slate-500">{item.sub}</p>
        </div>
      ))}
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="max-w-[1200px] w-full px-6 py-16 md:py-24 text-center mx-auto">
    <div className="flex flex-col gap-4 mb-16">
      <h2 className="text-slate-50 text-4xl md:text-6xl font-black leading-tight tracking-tighter font-display">
        Simple, Transparent <span className="text-accent">Pricing</span>
      </h2>
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
        Scale your agency with predictable costs. Choose the plan that fits your current growth stage.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {[
        {
          name: "Starter",
          price: "$497",
          desc: "Perfect for small businesses starting with AI.",
          features: ["AI Lead Capture", "Basic CRM Sync", "Email Automation"],
          cta: "Get Started",
          featured: false
        },
        {
          name: "Pro",
          price: "$1,297",
          desc: "Scale your outreach and bookings automatically.",
          features: ["Everything in Starter", "Automated Booking", "Multi-channel AI", "Priority Support"],
          cta: "Start Growing Now",
          featured: true
        },
        {
          name: "Elite",
          price: "Custom",
          desc: "Full-scale enterprise automation engine.",
          features: ["Custom AI Strategy", "Full System Integration", "White-glove Deployment", "24/7 Managed Services"],
          cta: "Talk to Sales",
          featured: false
        }
      ].map((plan, idx) => (
        <div 
          key={idx}
          className={`relative flex flex-col gap-6 rounded-xl border ${plan.featured ? 'border-2 border-accent scale-105 z-10 neon-glow bg-brand-purple/20' : 'border-slate-800 bg-brand-purple/10'} p-8 transition-all`}
        >
          {plan.featured && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background-dark text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Most Popular
            </div>
          )}
          <div className="flex flex-col gap-2 text-left">
            <h3 className="text-slate-100 text-xl font-bold">{plan.name}</h3>
            <div className="flex items-baseline gap-1">
              <span className={`text-4xl font-black tracking-tight ${plan.featured ? 'text-accent' : 'text-white'}`}>{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-slate-400 text-sm font-semibold">/mo</span>}
            </div>
            <p className="text-sm text-slate-400">{plan.desc}</p>
          </div>
          <button className={`w-full flex cursor-pointer items-center justify-center rounded-lg h-12 px-4 ${plan.featured ? 'bg-accent text-background-dark' : 'bg-slate-800 text-white'} text-sm font-bold hover:brightness-110 transition-all`}>
            {plan.cta}
          </button>
          <ul className="flex flex-col gap-4 text-left border-t border-slate-800 pt-6">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={20} className="text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="w-full bg-slate-100/5 py-20">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-slate-50 text-3xl md:text-4xl font-black leading-tight tracking-tight font-display">
          Why Choose Our AI Systems?
        </h2>
        <p className="text-slate-400 text-base max-w-2xl">
          We build proprietary systems that work while you sleep, ensuring no lead is ever left behind.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Fast Deployment", desc: "Don't wait months. Get your custom automation ecosystem live in as little as 7 days.", icon: <Rocket size={32} className="text-accent" /> },
          { title: "AI Strategy", desc: "Bespoke AI workflows designed around your unique business bottlenecks and goals.", icon: <BrainCircuit size={32} className="text-accent" /> },
          { title: "Revenue Focused", desc: "Every node we build has one ultimate goal: maximizing your ROI and bottom line.", icon: <TrendingUp size={32} className="text-accent" /> },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-[#0a0f14] p-6 transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="w-full px-6 py-24 md:py-32 overflow-hidden relative">
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-purple/20 rounded-full blur-[80px]"></div>
    </div>
    <div className="max-w-4xl mx-auto relative z-10 text-center">
      <div className="flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Available for Q4 Onboarding</span>
        </div>
        <h2 className="text-slate-50 text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter font-display">
          Stop Chasing Leads.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Let AI Book Them For You.</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
          Ready to automate your growth? Claim your free blueprint today and see exactly how we can scale your meetings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
          <button className="flex min-w-[280px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-accent text-background-dark text-lg font-black transition-all hover:scale-105 hover:brightness-110 shadow-lg shadow-accent/20">
            Get Free Automation Blueprint
          </button>
        </div>
        <p className="text-xs text-slate-500 font-medium">No credit card required • 15-min discovery call</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-slate-800/50 py-12 px-6 bg-[#0a0f14]">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
      <div className="flex flex-wrap justify-center gap-10">
        {["Privacy Policy", "Terms of Service", "Contact Support"].map((item) => (
          <a key={item} className="text-slate-500 hover:text-slate-300 transition-colors text-sm font-medium" href="#">{item}</a>
        ))}
      </div>
      <div className="flex gap-6">
        <a className="text-slate-500 hover:text-primary transition-colors" href="#"><Globe size={20} /></a>
        <a className="text-slate-500 hover:text-primary transition-colors" href="#"><Users size={20} /></a>
      </div>
      <p className="text-slate-600 text-sm">© 2024 Nexus AI Automation Agency. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="absolute inset-0 grid-bg z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f14]/50 to-[#0a0f14] z-0 pointer-events-none"></div>
      
      <Navbar />
      <Hero />
      <Services />
      <ProcessFlow />
      <Pricing />
      <WhyChooseUs />
      <FinalCTA />
      <Footer />
    </div>
  );
}
