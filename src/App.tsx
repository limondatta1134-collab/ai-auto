import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  TrendingUp,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Bot,
  User,
  Sparkles
} from "lucide-react";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Footer } from './components';

const AmbientTracker = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 147, 242, 0.08), transparent 40%)`
        }}
      />
      {children}
    </div>
  );
};

const LiveDemoConsole = () => {
  const [messages, setMessages] = useState<{ sender: 'ai' | 'user', text: string }[]>([
    { sender: 'ai', text: 'Hi! I saw you clicked on our ad for Social Media Management. Are you looking to scale your local biz?' }
  ]);

  useEffect(() => {
    const sequence = [
      { sender: 'user', text: 'Yes, but I don\'t have much time.', delay: 2000 },
      { sender: 'ai', text: 'Perfect. We handle it 100% for you. Are you available for a 10 min sync tomorrow at 2 PM or 4 PM?', delay: 4500 },
      { sender: 'user', text: '4 PM works for me.', delay: 7000 },
      { sender: 'ai', text: 'Awesome! Generating calendar invite...', delay: 9000 },
      { sender: 'ai', text: 'Meeting confirmed! I added it to your calendar and sent a reminder text. Talk soon!', delay: 11000 }
    ];

    const timeouts = sequence.map((msg) =>
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: msg.sender as 'ai' | 'user', text: msg.text }]);
      }, msg.delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative bg-[#0a0f14]/80 border border-slate-700 rounded-xl overflow-hidden aspect-[4/3] md:aspect-video shadow-2xl backdrop-blur-md flex flex-col pt-4">
      <div className="absolute top-0 left-0 w-full h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2 z-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex bg-slate-800/50 rounded-md px-3 py-1 ml-4 items-center gap-2">
          <Bot size={14} className="text-primary" />
          <span className="text-xs text-slate-400 font-mono">Live Demo - Auto Booking</span>
        </div>
      </div>

      <div className="flex-1 p-6 mt-10 overflow-hidden flex flex-col justify-end">
        <div className="flex flex-col gap-4 relative w-full h-full justify-end pb-2">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-end gap-2 max-w-[80%]`}>
                  {msg.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0 mb-1">
                      <Bot size={16} className="text-primary" />
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-slate-800 text-slate-200 border border-slate-700/50 rounded-bl-sm'
                      }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center shrink-0 mb-1">
                      <User size={16} className="text-slate-300" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {messages.length < 6 && messages.length % 2 === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-1 text-slate-500 mt-2 self-end mr-12"
            >
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

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
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="h-14 px-8 bg-primary text-white font-bold rounded-lg flex items-center justify-center hover:opacity-90 transition-all glow-effect text-lg"
          >
            Book Free Automation Audit
          </button>
          <button
            onClick={() => alert('Demo video is being updated. Please check back later!')}
            className="h-14 px-8 bg-slate-800 text-white font-bold rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all text-lg gap-2"
          >
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
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative group w-full animate-float"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <LiveDemoConsole />
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
            whileHover={{ y: -10, scale: 1.02 }}
            className="group p-8 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-primary/50 transition-all flex flex-col gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors"></div>
            <div className="h-14 w-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
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
  <section id="case-studies" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
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
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          whileHover={{ y: plan.featured ? 0 : -5 }}
          className={`relative flex flex-col gap-6 rounded-xl border ${plan.featured ? 'border-2 border-accent scale-105 z-10 neon-glow bg-brand-purple/20' : 'border-slate-800 bg-brand-purple/10'} p-8 transition-transform`}
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
          <button
            onClick={() => window.location.href = `/checkout?plan=${plan.name}`}
            className={`w-full flex cursor-pointer items-center justify-center rounded-lg h-12 px-4 ${plan.featured ? 'bg-accent text-background-dark' : 'bg-slate-800 text-white'} text-sm font-bold hover:brightness-110 transition-all`}
          >
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
        </motion.div>
      ))}
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section id="about" className="w-full bg-slate-100/5 py-20">
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "How fast can I see results?", a: "Most of our clients see an increase in booked meetings within the first 14 days of deployment. Our AI starts capturing and qualifying leads instantly." },
    { q: "Do I need technical skills to use this?", a: "Not at all. We handle the entire build, integration, and training. You just focus on closing the leads we book for you." },
    { q: "Will the AI sound Robotic?", a: "No. We train our AI on your exact brand voice, past conversations, and winning sales scripts. Most prospects have no idea they aren't speaking to a human." },
    { q: "What happens to unqualified leads?", a: "They are politely disqualified and added to a long-term nurture sequence in your CRM, ensuring they don't clog up your actual sales calendar." }
  ];

  return (
    <section className="w-full bg-[#0a0f14] py-20 relative z-10 border-t border-slate-800/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-slate-50 text-3xl md:text-5xl font-black mb-4 font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">Everything you need to know about our automation systems.</p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-slate-800 bg-slate-900/40 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/30 transition-colors cursor-pointer"
              >
                <span className="font-bold text-lg text-slate-100">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-500" />}
              </button>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-6 text-slate-400 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="w-full px-6 py-24 md:py-32 overflow-hidden relative">
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-purple/20 rounded-full blur-[80px]"></div>
    </div>
    <div className="max-w-4xl mx-auto relative z-10 text-center">
      <div className="flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full animate-pulse-ring">
          <Sparkles size={16} className="text-accent" />
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Available for Q4 Onboarding</span>
        </div>
        <h2 className="text-slate-50 text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter font-display">
          Stop Chasing Leads.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Let AI Book Them For You.</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
          Ready to automate your growth? Claim your free blueprint today and see exactly how we can scale your meetings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
          <button
            onClick={() => alert('Thank you! Your free blueprint has been sent to your email.')}
            className="flex min-w-[280px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-accent text-background-dark text-lg font-black transition-all hover:scale-105 hover:brightness-110 shadow-lg shadow-accent/20"
          >
            Get Free Automation Blueprint
          </button>
        </div>
        <p className="text-xs text-slate-500 font-medium">No credit card required • 15-min discovery call</p>
      </div>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <Services />
    <ProcessFlow />
    <Pricing />
    <WhyChooseUs />
    <FAQ />
    <FinalCTA />
  </>
);

const PrivacyPolicy = () => (
  <main className="relative z-10 flex-grow flex flex-col items-center justify-start px-6 py-16 lg:py-32 max-w-4xl mx-auto w-full text-slate-300 gap-8 text-left">
    <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 w-full">Privacy Policy</h1>
    <p>Last updated: October 2024</p>
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>
      <p>We collect information you provide directly to us when you use our services, including but not limited to your name, email address, postal address, phone number, and any other information you choose to provide.</p>

      <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Your Information</h2>
      <p>We use the information we collect to provide, maintain, and improve our services, to process your requests, to send you related information, and to communicate with you about products, services, offers, and events.</p>

      <h2 className="text-2xl font-bold text-white mt-8">3. Information Sharing</h2>
      <p>We do not share your personal information with third parties except as described in this policy, such as with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
    </div>
  </main>
);

const TermsOfService = () => (
  <main className="relative z-10 flex-grow flex flex-col items-center justify-start px-6 py-16 lg:py-32 max-w-4xl mx-auto w-full text-slate-300 gap-8 text-left">
    <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 w-full">Terms of Service</h1>
    <p>Last updated: October 2024</p>
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-2xl font-bold text-white mt-8">1. Acceptance of Terms</h2>
      <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>

      <h2 className="text-2xl font-bold text-white mt-8">2. User Responsibilities</h2>
      <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.</p>

      <h2 className="text-2xl font-bold text-white mt-8">3. Termination</h2>
      <p>We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
    </div>
  </main>
);

const Contact = () => (
  <main className="relative z-10 flex-grow flex flex-col items-center justify-start px-6 py-16 lg:py-32 max-w-4xl mx-auto w-full gap-8 text-center">
    <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4">Contact Support</h1>
    <p className="text-lg text-slate-400 max-w-2xl mb-8">
      Have questions or need help with your automation setup? We're here for you.
    </p>
    <div className="w-full max-w-md bg-slate-900/50 border border-slate-800 p-8 rounded-xl flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-slate-300">Name</label>
        <input type="text" className="bg-[#0a0f14] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-slate-300">Email</label>
        <input type="email" className="bg-[#0a0f14] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-slate-300">Message</label>
        <textarea className="bg-[#0a0f14] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors min-h-[120px]" placeholder="How can we help you?" />
      </div>
      <button
        onClick={() => alert('Message sent! We will get back to you shortly.')}
        className="mt-4 bg-primary text-white font-bold py-3 px-6 rounded-lg text-sm hover:opacity-90 transition-all glow-effect"
      >
        Send Message
      </button>
    </div>
  </main>
);

const Checkout = () => {
  const params = new URLSearchParams(window.location.search);
  const planName = params.get('plan') || 'Selected Plan';

  return (
    <main className="relative z-10 flex-grow flex flex-col items-center justify-start px-6 py-16 lg:py-32 w-full gap-8">
      <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-8">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        <div className="w-full md:w-2/3 bg-slate-900/50 border border-slate-800 p-8 rounded-xl flex flex-col gap-6 text-left">
          <h2 className="text-2xl font-bold text-white mb-4">Payment Method</h2>

          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-primary text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 border-2 border-primary">
              <CreditCard size={20} />
              Credit Card
            </button>
            <button
              onClick={() => alert("Redirecting to PayPal...")}
              className="flex-1 bg-[#0a0f14] text-slate-300 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 border border-slate-800 hover:border-slate-600 transition-colors"
            >
              PayPal
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-300">Card Name</label>
              <input type="text" className="bg-[#0a0f14] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-300">Card Number</label>
              <input type="text" className="bg-[#0a0f14] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-semibold text-slate-300">Expiry Date</label>
                <input type="text" className="bg-[#0a0f14] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="MM/YY" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-semibold text-slate-300">CVC</label>
                <input type="text" className="bg-[#0a0f14] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="123" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-slate-900/50 border border-slate-800 p-8 rounded-xl flex flex-col gap-6 h-fit text-left">
          <h2 className="text-xl font-bold text-white">Order Summary</h2>
          <div className="flex justify-between items-center text-slate-300">
            <span>{planName}</span>
          </div>
          <div className="border-t border-slate-800 my-2"></div>
          <div className="flex justify-between items-center text-white font-bold text-lg">
            <span>Total</span>
            <span className="text-primary text-sm">(Billed Now)</span>
          </div>
          <button
            onClick={() => alert('Payment processed! Welcome aboard.')}
            className="mt-4 bg-primary text-white font-bold py-3 px-6 rounded-lg text-sm hover:opacity-90 transition-all glow-effect w-full"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <AmbientTracker>
        <div className="absolute inset-0 grid-bg z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f14]/80 to-[#0a0f14] z-0 pointer-events-none"></div>

        <Navbar />

        <div className="flex-grow flex flex-col items-center relative z-10 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>

        <Footer />
      </AmbientTracker>
    </Router>
  );
}
