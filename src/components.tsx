import { Globe, Users, PlayCircle } from "lucide-react";

export const Navbar = () => (
    <header className="relative z-50 border-b border-slate-800/50 backdrop-blur-md bg-[#0a0f14]/80 px-6 py-4 lg:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
                <a href="/" className="text-primary hover:opacity-80 transition-opacity">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap fill-primary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                        <h2 className="font-display text-xl font-bold tracking-tight text-slate-100">Nexus AI</h2>
                    </div>
                </a>
            </div>
            <nav className="hidden md:flex items-center gap-8">
                <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="/#solutions">Solutions</a>
                <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="/#case-studies">Case Studies</a>
                <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="/#pricing">Pricing</a>
                <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="/#about">About</a>
            </nav>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => {
                        if (window.location.pathname === '/') {
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            window.location.href = '/#pricing';
                        }
                    }}
                    className="bg-primary text-white font-bold py-2 px-6 rounded-lg text-sm hover:opacity-90 transition-all glow-effect"
                >
                    Get Started
                </button>
            </div>
        </div>
    </header>
);

export const Footer = () => (
    <footer className="border-t border-slate-800/50 py-12 px-6 bg-[#0a0f14]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-10">
                {[
                    { name: "Privacy Policy", path: "/privacy" },
                    { name: "Terms of Service", path: "/terms" },
                    { name: "Contact Support", path: "/contact" }
                ].map((item) => (
                    <a
                        key={item.name}
                        href={item.path}
                        className="text-slate-500 hover:text-slate-300 transition-colors text-sm font-medium cursor-pointer"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="flex gap-6">
                <a href="#" className="text-slate-500 hover:text-primary transition-colors cursor-pointer"><Globe size={20} /></a>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors cursor-pointer"><Users size={20} /></a>
            </div>
            <p className="text-slate-600 text-sm">© 2024 Nexus AI Automation Agency. All rights reserved.</p>
        </div>
    </footer>
);
