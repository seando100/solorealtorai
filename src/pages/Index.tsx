import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Sparkles, Phone, Clock, UserX, ArrowRight, Check, Lock, Globe, Mail, Zap, Upload, Briefcase, Heart, ChevronRight, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// ─── Hero Illustration ────────────────────────────────────────────────────────

const HeroIllustration = () => (
  <div className="relative" aria-hidden="true">
    {/* Main chat panel */}
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-slate-50">
      <div className="bg-[#0F2745] px-4 py-3 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">KR</span>
        </div>
        <div>
          <p className="text-white text-xs font-semibold leading-tight">Sage</p>
          <p className="text-white/75 text-[10px] leading-tight">Keystone Real Estate · Real Estate Assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span className="text-white/75 text-[10px]">Online</span>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3 bg-slate-50">
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">S</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[80%]">
            <p className="text-xs text-slate-700 leading-relaxed">Hi! I'm Sage with Keystone Real Estate. I'll help gather details about what you're looking for so your agent is fully prepared — it only takes a few minutes.</p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">S</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[80%]">
            <p className="text-xs text-slate-700 leading-relaxed">What brings you in today — are you looking to buy, sell, or both?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#0F2745] rounded-2xl rounded-br-sm px-3 py-2 max-w-[72%]">
            <p className="text-xs text-white leading-relaxed">We're looking for a 3-bedroom home near good schools. Budget is around $450K and we'd like to move by summer.</p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">S</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[80%]">
            <p className="text-xs text-slate-700 leading-relaxed">Great — that's a solid starting point. Are there any must-haves like a garage, yard size, or specific school district? And have you been pre-approved for a mortgage yet?</p>
          </div>
        </div>
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
      <div className="px-3 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
          <p className="text-[11px] text-slate-500">Type your response…</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#0F2745] flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
        </div>
      </div>
    </div>

    {/* Floating notification card */}
    <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl border border-slate-200 p-3.5 w-64 ring-1 ring-slate-900/5">
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Mail className="w-4 h-4 text-blue-600" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-slate-800 leading-tight">New lead received</p>
          <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">Sarah Mitchell · 3BR Colonial · Pre-approved $450K</p>
          <div className="mt-2 bg-amber-50 border border-amber-100 rounded-md px-2 py-1">
            <p className="text-[10px] text-amber-800 leading-snug font-medium">AI: Strong buyer — pre-approved, motivated timeline, flexible on cosmetics</p>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, vertical: 'SoloRealtorAI' }),
      });
    } catch {}
    setSubmitted(true);
  };

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1.5 rounded-full uppercase tracking-widest">
                  <Zap className="h-3 w-3" />
                  {t('index.badge')}
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#3B82F6] px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {t('index.badgeLaunch')}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                {t('index.heroTitle')}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                {t('index.heroSubtitle')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#waitlist"
                  className="bg-[#0F2745] text-white px-7 py-3.5 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center gap-2"
                >
                  {t('nav.joinWaitlist')}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/features"
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
                >
                  {t('index.seeFeatures')}
                </Link>
              </div>
              <p className="mt-3 text-xs text-slate-500">{t('index.beFirst')}</p>
            </div>
            <div className="relative lg:pl-8">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust bar ────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-4">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: Lock,         label: t('index.trustEncrypted')   },
              { icon: Globe,        label: t('index.trustBilingual')   },
              { icon: Phone,        label: t('index.trustChannels')    },
              { icon: Mail,         label: t('index.trustAlerts')      },
              { icon: Zap,          label: t('index.trustSetup')       },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-500">
                <Icon className="h-3.5 w-3.5 text-[#0F2745]/60 flex-shrink-0" />
                <span className="text-xs font-medium whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Pain section ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0F2745]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">{t('index.painTitle')}</h2>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              {t('index.painSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: t('index.painColdTitle'),
                body: t('index.painColdBody'),
              },
              {
                icon: Clock,
                title: t('index.painZeroTitle'),
                body: t('index.painZeroBody'),
              },
              {
                icon: UserX,
                title: t('index.painAfterHoursTitle'),
                body: t('index.painAfterHoursBody'),
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white/8 border border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-white/70" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/65 text-sm mt-10">
            {t('index.painFooter')}
          </p>
        </div>
      </section>

      {/* ── 4. Feature highlights ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('index.featuresTitle')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('index.featuresSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: t('index.featAiIntakeTitle'),
                body: t('index.featAiIntakeBody'),
                link: '/features#ai-intake',
              },
              {
                icon: Phone,
                title: t('index.featPhoneTitle'),
                badge: 'Pro+',
                body: t('index.featPhoneBody'),
                link: '/features#phone-intake',
              },
              {
                icon: FileText,
                title: t('index.featSummaryTitle'),
                body: t('index.featSummaryBody'),
                link: '/features#lead-summary',
              },
              {
                icon: Upload,
                title: t('index.featDocTitle'),
                badge: 'Pro+',
                body: t('index.featDocBody'),
                link: '/features#document-intelligence',
              },
              {
                icon: Brain,
                title: t('index.featBriefTitle'),
                badge: 'Pro+',
                body: t('index.featBriefBody'),
                link: '/features#intelligence-brief',
              },
              {
                icon: Sparkles,
                title: t('index.featMarketingTitle'),
                badge: 'Pro',
                body: t('index.featMarketingBody'),
                link: '/features#marketing-kit',
              },
            ].map(({ icon: Icon, title, badge, body, link }) => (
              <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-[#0F2745]" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold">{title}</h3>
                  {badge && (
                    <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">{badge}</span>
                  )}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{body}</p>
                <Link to={link} className="text-xs font-semibold text-[#0F2745] hover:underline inline-flex items-center gap-1">
                  {t('index.learnMore')} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How It Works ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('index.howTitle')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('index.howSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-slate-200" />
            {[
              {
                number: '01',
                icon: Zap,
                title: t('index.howStep1Title'),
                description: t('index.howStep1Desc'),
              },
              {
                number: '02',
                icon: MessageSquare,
                title: t('index.howStep2Title'),
                description: t('index.howStep2Desc'),
              },
              {
                number: '03',
                icon: FileText,
                title: t('index.howStep3Title'),
                description: t('index.howStep3Desc'),
              },
            ].map(({ number, icon: Icon, title, description }) => (
              <div key={number} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-5 shadow-sm relative z-10">
                  <Icon className="h-6 w-6 text-[#0F2745]" />
                </div>
                <div className="text-xs font-bold text-slate-300 mb-2 tracking-widest">{number}</div>
                <h3 className="text-base font-semibold mb-3">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Dual-Benefit Section ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t('index.dualTitle')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('index.dualSubtitle')}
            </p>
          </div>

          {/* Process flow infographic */}
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:gap-y-0">

            {/* ── Step 1: Client Reaches Out ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{t('index.forYou')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual1AgentTitle')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual1AgentBody')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{t('index.stepClientReachesOut')}</p>
              <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{t('index.forClients')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual1ClientTitle')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual1ClientBody')}</p>
              </div>
            </div>

            {/* ── Step 2: AI Intake Conversation ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{t('index.forYou')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual2AgentTitle')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual2AgentBody')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{t('index.stepAiConversation')}</p>
              <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{t('index.forClients')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual2ClientTitle')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual2ClientBody')}</p>
              </div>
            </div>

            {/* ── Step 3: Agent Reviews ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{t('index.forYou')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual3AgentTitle')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual3AgentBody')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{t('index.stepAgentReviews')}</p>
              <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{t('index.forClients')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual3ClientTitle')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual3ClientBody')}</p>
              </div>
            </div>

            {/* ── Step 4: First Showing ── */}
            <div className="flex md:justify-end">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-[#0F2745]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{t('index.forYou')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual4AgentTitle')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual4AgentBody')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
                <ChevronRight className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{t('index.stepFirstShowing')}</p>
            </div>
            <div className="flex md:justify-start">
              <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{t('index.forClients')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{t('index.dual4ClientTitle')}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{t('index.dual4ClientBody')}</p>
              </div>
            </div>
          </div>

          {/* Bottom tagline + link */}
          <p className="text-center text-sm text-slate-500 mt-14 mb-4">
            {t('index.dualTagline')}
          </p>
          <div className="text-center">
            <Link to="/benefits" className="text-sm font-semibold text-[#0F2745] hover:underline inline-flex items-center gap-1">
              {t('index.seeAllBenefits')} <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. Pricing preview ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('index.pricingTitle')}</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              {t('index.pricingSubtitle')}
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">{t('index.starterLabel')}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">$49</span>
                <span className="text-slate-500 mb-1">{t('index.perMonth')}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{t('index.starterPerAgent')}</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  t('index.starterFeat1'),
                  t('index.starterFeat2'),
                  t('index.starterFeat3'),
                  t('index.starterFeat4'),
                  t('index.starterFeat5'),
                  t('index.starterFeat6'),
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block text-center border border-[#0F2745] text-[#0F2745] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0F2745] hover:text-white transition">
                {t('nav.joinWaitlist')}
              </a>
            </div>
            {/* Pro */}
            <div className="rounded-xl border-2 border-[#0F2745] bg-white p-8 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-[#0F2745] text-white text-xs font-semibold px-3 py-1 rounded-full">{t('index.proMostPopular')}</span>
              </div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">{t('index.proLabel')}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">$79</span>
                <span className="text-slate-500 mb-1">{t('index.perMonth')}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{t('index.proPerAgent')}</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  t('index.proFeat1'),
                  t('index.proFeat2'),
                  t('index.proFeat3'),
                  t('index.proFeat4'),
                  t('index.proFeat5'),
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block text-center bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition">
                {t('nav.joinWaitlist')}
              </a>
            </div>
            {/* Pro+ */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">{t('index.proPlusLabel')}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold tracking-tight">$119</span>
                <span className="text-slate-500 mb-1">{t('index.perMonth')}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{t('index.proPlusPerAgent')}</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  t('index.proPlusFeat1'),
                  t('index.proPlusFeat2'),
                  t('index.proPlusFeat3'),
                  t('index.proPlusFeat4'),
                  t('index.proPlusFeat5'),
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block text-center border border-[#0F2745] text-[#0F2745] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0F2745] hover:text-white transition">
                {t('nav.joinWaitlist')}
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            {t('index.allPlansNote')} <Link to="/pricing" className="text-[#0F2745] hover:underline font-medium">{t('index.comparePlans')}</Link>
          </p>
        </div>
      </section>

      {/* ── 8. Waitlist / Contact ──────────────────────────────────────────── */}
      <section id="waitlist" className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('index.waitlistTitle')}</h2>
            <p className="text-lg text-slate-600">
              {t('index.waitlistSubtitle')}
            </p>
          </div>
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4"><Check className="h-6 w-6 text-green-600" /></div>
              <h3 className="text-xl font-semibold mb-2">{t('index.waitlistSuccessTitle')}</h3>
              <p className="text-slate-600">{t('index.waitlistSuccessBody')}</p>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t('index.waitlistName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-[#3B82F6]"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t('index.waitlistEmail')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-[#3B82F6]"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="practice" className="block text-sm font-medium text-slate-700 mb-1">{t('index.waitlistSpecialization')}</label>
              <input
                type="text"
                id="practice"
                name="practice"
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-[#3B82F6]"
                placeholder={t('index.waitlistSpecPlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t('index.waitlistMessage')}</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-[#3B82F6]"
                placeholder={t('index.waitlistMessagePlaceholder')}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition"
            >
              {t('index.waitlistSubmit')}
            </button>
            <p className="text-xs text-slate-500 text-center">
              {t('index.waitlistDisclaimer')}
            </p>
          </form>
          )}
        </div>
      </section>

      {/* ── 9. Closing CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#0F2745]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('index.closingTitle')}
          </h2>
          <p className="text-lg text-white/75 max-w-xl mx-auto mb-8">
            {t('index.closingSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="bg-white text-[#0F2745] px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-slate-100 transition inline-flex items-center gap-2"
            >
              {t('nav.joinWaitlist')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="text-white/70 hover:text-white text-sm font-medium transition"
            >
              {t('index.viewPricing')}
            </Link>
          </div>
          <p className="mt-4 text-white/65 text-xs">{t('index.closingLaunch')}</p>
        </div>
      </section>
    </>
  );
};

export default Index;
