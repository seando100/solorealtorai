import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart3, Mail, Shield, ArrowRight, Sparkles, Phone, Upload, FileSearch, Clock, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandSettingsIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Panel header */}
      <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-700">Profile Settings</p>
        <div className="flex items-center gap-2">
          <div className="h-5 px-3 rounded bg-[#0F2745] flex items-center">
            <span className="text-white text-[9px] font-semibold">Save Changes</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-slate-100">
        {/* Left — settings fields */}
        <div className="p-4 space-y-4">
          {/* Logo upload */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Brokerage Logo</p>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-3 flex items-center gap-3 bg-slate-50">
              <div className="w-10 h-10 rounded bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-[#0F2745] uppercase">Logo</span>
              </div>
              <div>
                <p className="text-[10px] font-medium text-slate-700">keystone-real-estate-logo.png</p>
                <p className="text-[9px] text-slate-400">Click to replace</p>
              </div>
            </div>
          </div>
          {/* Practice name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Business Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">Keystone Real Estate</p>
            </div>
          </div>
          {/* Assistant name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Assistant Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">Sage</p>
            </div>
          </div>
          {/* Vanity URL */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Your Intake URL</p>
            <div className="border border-slate-200 rounded-md overflow-hidden flex text-[10px]">
              <span className="bg-slate-50 px-2 py-1.5 text-slate-400 border-r border-slate-200 whitespace-nowrap">.com/</span>
              <span className="px-2 py-1.5 text-[#0F2745] font-semibold">keystonerealestate</span>
            </div>
            <p className="text-[9px] text-blue-600 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              solorealtorai.com/keystonerealestate is live
            </p>
          </div>
          {/* Calendly */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Scheduling</p>
            <div className="flex items-center gap-2 border border-blue-200 bg-blue-50 rounded-md px-2.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              <p className="text-[10px] text-blue-700 font-medium">Calendly connected</p>
            </div>
          </div>
        </div>
        {/* Right — live preview */}
        <div className="p-4 bg-slate-50/50">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-2.5">Client Preview</p>
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
            {/* Mini browser bar */}
            <div className="bg-slate-100 px-2 py-1 flex items-center gap-1.5 border-b border-slate-200">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
              </div>
              <div className="flex-1 bg-white rounded px-2 py-0.5 text-[8px] text-slate-400 font-mono">
                solorealtorai.com/keystonerealestate
              </div>
            </div>
            {/* Mini client intake page */}
            <div className="bg-[#0F2745] px-3 py-2.5 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] font-bold text-white">KR</span>
              </div>
              <div>
                <p className="text-white text-[9px] font-semibold leading-tight">Sage</p>
                <p className="text-white/60 text-[7px] leading-tight">Keystone Real Estate</p>
              </div>
            </div>
            <div className="px-3 py-3 space-y-2">
              <div className="bg-white rounded-xl rounded-bl-sm border border-slate-100 px-2.5 py-1.5 shadow-sm max-w-[85%]">
                <p className="text-[9px] text-slate-700 leading-snug">Welcome! I'm Sage with Keystone Real Estate. Are you looking to buy, sell, or learn more about a property?</p>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#0F2745] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[75%]">
                  <p className="text-[9px] text-white leading-snug">We're looking for a 3-bedroom near the Riverside school district.</p>
                </div>
              </div>
            </div>
            <div className="px-2 py-2 border-t border-slate-100 bg-white flex items-center gap-1.5">
              <div className="flex-1 bg-slate-50 rounded-full px-2 py-1 border border-slate-200">
                <p className="text-[8px] text-slate-400">Type your response…</p>
              </div>
              <div className="w-5 h-5 rounded-full bg-[#0F2745] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 text-center mt-2">Clients see your brand — never SoloRealtorAI</p>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const ChatModeScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-slate-50">
      {/* App header */}
      <div className="bg-[#0F2745] px-4 py-3 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">KR</span>
        </div>
        <div>
          <p className="text-white text-xs font-semibold leading-tight">Sage</p>
          <p className="text-white/60 text-[10px] leading-tight">Keystone Real Estate · Intake Assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span className="text-white/60 text-[10px]">Online</span>
        </div>
      </div>
      {/* Chat messages */}
      <div className="px-4 py-4 space-y-3 bg-slate-50">
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">S</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">Hi! I'm Sage, your intake assistant with Keystone Real Estate. I'll help gather some information so your agent can find exactly what you're looking for.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">S</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">Are you looking to buy, sell, or both?</p>
          </div>
        </div>
        {/* Client bubble */}
        <div className="flex justify-end">
          <div className="bg-[#0F2745] rounded-2xl rounded-br-sm px-3 py-2 max-w-[72%]">
            <p className="text-xs text-white leading-relaxed">We're looking to buy. We need a 3-bedroom home with a good yard, preferably near Riverside Elementary. Our budget is around $450K.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">S</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">That's a great area — lots of families love the Riverside district. Have you been pre-approved for a mortgage yet, and what's your ideal move-in timeline?</p>
          </div>
        </div>
        {/* Typing indicator */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">S</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm border border-slate-100">
            <div className="flex gap-1 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Input bar */}
      <div className="px-3 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
          <p className="text-[11px] text-slate-400">Type your response…</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#0F2745] flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const IntakeSummaryScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Email header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Logo</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#0F2745] uppercase tracking-wider leading-tight">Keystone Real Estate</p>
            <p className="text-[10px] text-slate-400 leading-tight">New Client Intake — March 5, 2026</p>
          </div>
        </div>
        <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2.5 py-0.5 font-medium">New</span>
      </div>
      {/* Lead details table */}
      <div className="px-6 pt-4 pb-3">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Lead Details</p>
        <div className="rounded-lg border border-slate-100 overflow-hidden text-[11px]">
          {[
            ['Client', 'Sarah Mitchell'],
            ['Email', 'sarah.mitchell@email.com'],
            ['Phone', '(813) 555-0142'],
            ['Location', 'Tampa, FL'],
            ['Transaction Type', 'Buyer — Residential'],
            ['Property Need', '3BR Colonial, Riverside school district, $450K budget'],
            ['Timeline', 'Move by summer 2026 — motivated'],
          ].map(([label, value], i) => (
            <div key={label} className={`flex ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
              <span className="w-[36%] px-3 py-1.5 text-slate-500 font-medium flex-shrink-0">{label}</span>
              <span className="px-3 py-1.5 text-slate-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* AI context notes */}
      <div className="px-6 pb-5">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">AI Context Notes</p>
        <div className="rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 space-y-1.5">
          {[
            'Pre-approved buyer with clear budget ceiling — strong qualification signal for $400-450K range',
            'School district priority suggests family with children — emphasize proximity to parks, bus routes, and community amenities',
            'Summer move-in timeline aligns with peak market — consider off-market opportunities and coming-soon listings',
            'Flexible on cosmetics indicates willingness to consider homes needing light updates — broadens inventory options',
          ].map((note) => (
            <div key={note} className="flex gap-2">
              <span className="text-amber-500 font-bold text-[10px] flex-shrink-0 mt-0.5">•</span>
              <p className="text-[10px] text-amber-900 leading-snug">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const MarketingKitIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5">
      {/* Social card mock — horizontal layout */}
      <div className="flex" style={{ height: 210 }}>
        {/* White logo zone */}
        <div className="w-[36%] bg-white flex flex-col items-center justify-center p-5 gap-3 border-r border-slate-100">
          <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center leading-tight">Your<br/>Logo</span>
          </div>
          <p className="text-[8px] font-semibold text-[#0F2745] uppercase tracking-widest text-center leading-tight">
            Keystone<br/>Real Estate
          </p>
        </div>
        {/* Navy content zone */}
        <div className="flex-1 bg-[#0F2745] flex flex-col justify-center px-6 py-5">
          <p style={{ fontFamily: 'Georgia, serif' }} className="text-white font-bold text-sm leading-snug mb-2.5">
            Your dream home is closer than you think — let's find it together.
          </p>
          <p className="text-[10px] text-white/50 mb-4 tracking-wide">Residential Sales · Buyer Representation</p>
          <div className="border-t border-white/20 pt-3">
            <p className="text-[9px] text-white/40 mb-1">Start your home search at:</p>
            <p className="text-[11px] text-white font-semibold">solorealtorai.com/keystonerealestate</p>
          </div>
        </div>
      </div>
      {/* Bottom strip — color theme + label */}
      <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center gap-3">
        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Color theme</span>
        <div className="flex gap-1.5">
          {['#0F2745','#1C1C1E','#1A4731','#6B1E2E','#334155'].map(c => (
            <div key={c} className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200" style={{ background: c }} />
          ))}
          <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200 bg-blue-500 relative">
            <span className="absolute -top-1 -right-1 text-[6px] bg-white text-slate-500 rounded-full px-[2px] font-bold leading-none" style={{ paddingTop: 1 }}>B</span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const Features = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Page header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built for the Solo Real Estate Agent
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Intake by chat, phone, or widget. AI document analysis. Marketing tools. Everything you need — without adding overhead or hiring staff.
          </p>
        </div>

        {/* Feature 1 — AI Client Intake — text left, visual right */}
        <div id="ai-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Intake That Runs Itself
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Buyers and sellers get a conversational AI intake or a structured form — in English or Spanish.
              You get the details you need. No phone tag, no back-and-forth, no scheduling required on your end.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Conversational AI chat mode and structured form mode</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Give your AI assistant a name — clients meet "Sage" or "Parker," not a generic bot</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Bilingual — clients choose English or Spanish at the start</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Fully customizable intake questions tailored to your specialization</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your disclaimer presented to every client before they begin</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your logo, business name, and greeting — clients never see SoloRealtorAI</li>
            </ul>
          </div>
          <ChatModeScreenshot />
        </div>

        {/* Feature 2 — Lead Summary & AI Insights — visual left, text right */}
        <div id="lead-summary" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            <IntakeSummaryScreenshot />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Know the Client Before the First Meeting
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every submission arrives with a structured lead summary and AI-generated context notes
              — flagging buyer qualification signals, market timing considerations, neighborhood fit,
              and suggested follow-up questions — so you're prepared the moment you pick up the phone.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Organized client profile: name, contact, location, and property preferences</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI contextual notes — qualification signals, market analysis, and listing suggestions — for your eyes only</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Suggested follow-up questions tailored to the transaction type</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Delivered to your inbox the moment intake is submitted</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Client receives a clean, branded confirmation with their submission summary</li>
            </ul>
          </div>
        </div>

        {/* Feature 3 — AI Phone Intake — text left, visual right */}
        <div id="phone-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Phone className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              AI Phone Intake — 24/7
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Give your business a dedicated phone number where callers speak naturally with your AI
              assistant. No hold music, no phone trees — just a professional conversation that captures
              every detail and delivers the same structured summary as chat intake.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Dedicated local phone number for your business</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Callers speak naturally — your AI assistant guides the conversation</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Same structured summary, AI context notes, and email notifications</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Available 24/7 — never miss an after-hours or weekend call</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Intake source clearly labeled (Web Chat vs. Phone Call) in your portal</li>
            </ul>
          </div>
          {/* Phone illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-[#0F2745] px-5 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-2">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <p className="text-white text-sm font-semibold">Your AI Intake Line</p>
                <p className="text-white/50 text-xs mt-0.5">(352) 555-0100</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                {/* Simulated transcript */}
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"Hi, I'm Sage with Keystone Real Estate. I'll gather some information so your agent can find exactly what you're looking for. Are you buying, selling, or both?"</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start justify-end">
                  <div className="bg-[#0F2745] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white leading-relaxed">"We're interested in that colonial on Maple Street — the one listed at $425K. We're pre-approved and looking to move quickly."</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-slate-500">C</span>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"Great — that's a popular listing. Let me get a few details so your agent can schedule a showing right away..."</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] text-slate-500 font-medium">Call in progress — 2:34</span>
                </div>
                <span className="text-[9px] bg-purple-50 text-purple-700 border border-purple-200 rounded-full px-2 py-0.5 font-medium">Phone Call</span>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 4 — Document Intelligence — visual left, text right */}
        <div id="document-intelligence" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            {/* Document Intelligence illustration */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
                <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileSearch className="h-4 w-4 text-[#0F2745]" />
                    <p className="text-xs font-semibold text-slate-700">Document Intelligence</p>
                  </div>
                  <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5 font-medium">4 of 5 received</span>
                </div>
                <div className="px-5 py-3 space-y-2.5">
                  {[
                    { name: 'Pre-Approval_Letter.pdf', status: 'ready', summary: 'Pre-approved for $475K with First National. Fixed rate 6.25%, 30-year term. Valid through Aug 2026.' },
                    { name: 'Seller_Disclosure.pdf', status: 'ready', summary: 'Roof replaced 2023. HVAC serviced annually. Foundation inspection clear. Minor water stain in basement — resolved 2022.' },
                    { name: 'Inspection_Report.pdf', status: 'ready', summary: 'Structural sound. Electrical panel updated 2021. Recommend gutter replacement and minor grading correction on south side.' },
                    { name: 'HOA_Bylaws.pdf', status: 'ready', summary: 'Monthly dues $185. No rental restrictions. Architectural review required for exterior modifications. Reserve fund healthy at $142K.' },
                  ].map((doc) => (
                    <div key={doc.name} className="border border-slate-100 rounded-lg overflow-hidden">
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <p className="text-[10px] font-medium text-slate-700 flex-1">{doc.name}</p>
                        <span className="text-[9px] text-blue-600 font-medium">Ready</span>
                      </div>
                      <div className="px-3 py-2">
                        <p className="text-[10px] text-slate-500 leading-relaxed">{doc.summary}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border border-dashed border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <p className="text-[10px] text-slate-400">Title Search Report — awaiting upload</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Upload className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Documents In, Insights Out
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Request documents from clients with one click. AI recommends what to ask for based on the
              transaction type, clients upload securely, and every document is automatically analyzed — key dates,
              findings, red flags, and a transaction-relevant summary — ready for your review.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI recommends documents based on transaction type and property details</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Clients upload securely via a branded, encrypted portal</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI extracts key dates, findings, and transaction-relevant highlights from each document</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Handles PDFs, images, scanned documents, and Word files</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> 30-day secure retention — pass-through, not a vault</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> No human ever views client documents — fully automated</li>
            </ul>
          </div>
        </div>

        {/* Feature 5 — AI Intelligence Brief — text left, visual right */}
        <div id="intelligence-brief" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Brain className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              AI Intelligence Brief
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every intake automatically generates a deep-dive analysis that goes beyond summarizing what the client said.
              The Intelligence Brief identifies buyer qualification signals, market comparable analysis, neighborhood
              fit scoring, and suggests the follow-up questions that matter most — so you walk into
              every meeting with the insight of a top-producing team.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Buyer qualification assessment — budget-to-market alignment, pre-approval strength, and motivation signals</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Market comparable analysis with price range positioning and inventory availability</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Neighborhood and school district matching based on stated preferences</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Suggested follow-up questions tailored to the specific transaction</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Delivered alongside the intake summary — no extra step required</li>
            </ul>
          </div>
          {/* Intelligence Brief illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-[#0F2745]" />
                  <p className="text-xs font-semibold text-slate-700">AI Intelligence Brief</p>
                </div>
                <span className="text-[9px] bg-[#0F2745]/8 text-[#0F2745] rounded-full px-2 py-0.5 font-semibold uppercase tracking-wide">Pro+</span>
              </div>
              <div className="px-5 py-4 space-y-3">
                {/* Buyer qualification */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Buyer Qualification</p>
                  <div className="space-y-1.5">
                    {[
                      { flag: 'Strong', note: 'Pre-approved at $475K with fixed rate — budget aligns well with $400-450K target range, leaving room for closing costs' },
                      { flag: 'Motivated', note: 'Summer 2026 timeline with flexibility on cosmetics signals a serious, transaction-ready buyer' },
                    ].map((item) => (
                      <div key={item.flag} className="flex gap-2 items-start bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                        <span className="text-[9px] font-semibold text-amber-700 bg-amber-100 rounded px-1.5 py-0.5 flex-shrink-0 mt-px">{item.flag}</span>
                        <p className="text-[10px] text-amber-900 leading-snug">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Market analysis */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Market Analysis</p>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-slate-600 leading-snug">Riverside district 3BR median is $438K (up 4.2% YoY). Current inventory: 12 active listings in range. Average days on market: 18. Competitive but not frenzied — recommend viewing within 48 hours of new listings.</p>
                  </div>
                </div>
                {/* Neighborhood fit */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Neighborhood Fit</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 flex items-start gap-2">
                    <Clock className="h-3.5 w-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] text-blue-800 leading-snug font-medium">Riverside Elementary rated 8/10. Walking distance to 4 of 12 active listings. Also consider adjacent Oakdale district — similar schools, 6% lower median price.</p>
                  </div>
                </div>
                {/* Suggested questions */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Suggested Follow-Up</p>
                  <div className="space-y-1">
                    {[
                      'Would you consider a townhome or only single-family detached?',
                      'How important is garage size — one-car, two-car, or flexible?',
                      'Are you open to homes that need light cosmetic updates for better value?',
                    ].map((q) => (
                      <div key={q} className="flex gap-2 items-start">
                        <span className="text-[#0F2745] font-bold text-[10px] flex-shrink-0 mt-0.5">?</span>
                        <p className="text-[10px] text-slate-600 leading-snug">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 6 — Brand Settings — text left, visual right */}
        <div id="brand-settings" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Your Brand, Your Link
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Clients never see "SoloRealtorAI." They see your business name, your logo, and your intake
              page — at a URL you control. Every detail is configurable from your admin portal,
              and when they're ready to meet, send a one-click scheduling invite.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your own vanity URL (e.g. solorealtorai.com/yourbusiness)</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Upload your logo — shown on every client-facing screen and email</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Set your assistant's name, client greeting, and specialization focus</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Configure disclaimers in English and Spanish</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Pause intake instantly with a custom unavailability message</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Send showing invites via Calendly or any scheduling link</li>
            </ul>
          </div>
          <BrandSettingsIllustration />
        </div>

        {/* Feature 7 — Marketing Kit — visual left, text right */}
        <div id="marketing-kit" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            <MarketingKitIllustration />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Sparkles className="h-3 w-3" />
              Pro Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Look Professional Online, Instantly
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Marketing Kit generates platform-ready social media posts and professionally branded
              visual cards in seconds — tailored to your listings, your open houses, and your intake link.
              No designer. No copywriter. No extra tools.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI-written post copy for Facebook, Instagram, LinkedIn, and Nextdoor</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Branded visual cards pre-sized for every platform — download as PNG, ready to upload</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Edit the card headline (AI-suggested, fully customizable) to match your voice</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> 5 color themes — or use your brand color pulled automatically from your logo</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Website banner sizes included for your business website</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Generate in English or Spanish — bilingual from the start</li>
            </ul>
          </div>
        </div>

        {/* Supporting features row */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20 pt-4 border-t border-gray-100">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="h-4 w-4 text-primary" />
                Admin Portal
              </CardTitle>
              <CardDescription>
                Review every submission, track status, manage documents, and triage your lead pipeline in one place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Color-coded submission aging and triage</li>
                <li>• Status workflow (new → showing → closing)</li>
                <li>• Document request and review dashboard</li>
                <li>• Chat and phone intake unified view</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="h-4 w-4 text-primary" />
                Email Notifications
              </CardTitle>
              <CardDescription>
                You and your client both get a confirmation the moment an intake is submitted.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Instant agent alert email</li>
                <li>• Professional client confirmation</li>
                <li>• Branded with your business identity</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-4 w-4 text-primary" />
                Security &amp; Compliance
              </CardTitle>
              <CardDescription>
                Client data is encrypted in transit and at rest, with built-in privacy notices.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• AES-256 encryption at rest, TLS in transit</li>
                <li>• No human review — fully automated AI processing</li>
                <li>• 30-day document retention with client deletion rights</li>
                <li>• Privacy and data handling notice included</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Coming Q2 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3"
            >
              View Pricing
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
