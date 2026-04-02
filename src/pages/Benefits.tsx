import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Phone, ArrowRight, Briefcase, Heart, ChevronRight, Globe, Clock, Upload, Shield, Brain, Sparkles, Link2, Zap, Rss } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Reusable benefit card components
const RealtorCard = ({ title, body, forYouLabel }: { title: string; body: string; forYouLabel: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
        <Briefcase className="h-4 w-4 text-[#0F2745]" />
      </div>
      <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{forYouLabel}</span>
    </div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
  </div>
);

const ClientCard = ({ title, body, forClientsLabel }: { title: string; body: string; forClientsLabel: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
        <Heart className="h-4 w-4 text-blue-600" />
      </div>
      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{forClientsLabel}</span>
    </div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
  </div>
);

const StepIcon = ({ icon: Icon, label, showLine = true }: { icon: React.ElementType; label: string; showLine?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{label}</p>
    {showLine && <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />}
  </div>
);

const Benefits = () => {
  const { t } = useTranslation();
  const forYou = t('benefits.forYou');
  const forClients = t('benefits.forClients');

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t('benefits.heroTitle')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('benefits.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* ── The Journey ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{t('benefits.journeyTitle')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('benefits.journeySubtitle')}
            </p>
          </div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:gap-y-0">

            {/* Step 1: Client Reaches Out */}
            <div className="flex md:justify-end">
              <RealtorCard forYouLabel={forYou} title={t('benefits.j1AgentTitle')} body={t('benefits.j1AgentBody')} />
            </div>
            <StepIcon icon={Phone} label={t('benefits.stepClientReachesOut')} />
            <div className="flex md:justify-start">
              <ClientCard forClientsLabel={forClients} title={t('benefits.j1ClientTitle')} body={t('benefits.j1ClientBody')} />
            </div>

            {/* Step 2: AI Conversation */}
            <div className="flex md:justify-end">
              <RealtorCard forYouLabel={forYou} title={t('benefits.j2AgentTitle')} body={t('benefits.j2AgentBody')} />
            </div>
            <StepIcon icon={MessageSquare} label={t('benefits.stepAiConversation')} />
            <div className="flex md:justify-start">
              <ClientCard forClientsLabel={forClients} title={t('benefits.j2ClientTitle')} body={t('benefits.j2ClientBody')} />
            </div>

            {/* Step 3: Agent Reviews */}
            <div className="flex md:justify-end">
              <RealtorCard forYouLabel={forYou} title={t('benefits.j3AgentTitle')} body={t('benefits.j3AgentBody')} />
            </div>
            <StepIcon icon={FileText} label={t('benefits.stepAgentReviews')} />
            <div className="flex md:justify-start">
              <ClientCard forClientsLabel={forClients} title={t('benefits.j3ClientTitle')} body={t('benefits.j3ClientBody')} />
            </div>

            {/* Step 4: First Showing */}
            <div className="flex md:justify-end">
              <RealtorCard forYouLabel={forYou} title={t('benefits.j4AgentTitle')} body={t('benefits.j4AgentBody')} />
            </div>
            <StepIcon icon={ChevronRight} label={t('benefits.stepFirstShowing')} showLine={false} />
            <div className="flex md:justify-start">
              <ClientCard forClientsLabel={forClients} title={t('benefits.j4ClientTitle')} body={t('benefits.j4ClientBody')} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Additional Benefits ── */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{t('benefits.featuresTitle')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('benefits.featuresSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bilingual */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.bilingualTitle')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.bilingualAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.bilingualClient')}</p>
                </div>
              </div>
            </div>

            {/* Phone Intake */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.phoneIntakeTitle')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.phoneIntakeAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.phoneIntakeClient')}</p>
                </div>
              </div>
            </div>

            {/* Document Intelligence */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Upload className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.docIntelTitle')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.docIntelAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.docIntelClient')}</p>
                </div>
              </div>
            </div>

            {/* Triage & Urgency */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.triageTitle')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.triageAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.triageClient')}</p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.privSecTitle')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.privSecAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.privSecClient')}</p>
                </div>
              </div>
            </div>

            {/* Website Widget */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.widgetTitle')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.widgetAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.widgetClient')}</p>
                </div>
              </div>
            </div>

            {/* AI Intelligence Brief */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.aiBriefTitle')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro+</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.aiBriefAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.aiBriefClient')}</p>
                </div>
              </div>
            </div>

            {/* Marketing Kit */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.marketingKitTitle')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.marketingKitAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.marketingKitClient')}</p>
                </div>
              </div>
            </div>

            {/* CRM Integration */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Link2 className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.crmTitle')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.crmAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.crmClient')}</p>
                </div>
              </div>
            </div>

            {/* Zapier & Webhooks */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.zapierTitle')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.zapierAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.zapierClient')}</p>
                </div>
              </div>
            </div>

            {/* AI Blog Posts */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                  <Rss className="h-5 w-5 text-[#0F2745]" />
                </div>
                <h3 className="text-base font-semibold">{t('benefits.blogGenTitle')}</h3>
                <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">Pro</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{forYou}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.blogGenAgent')}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{forClients}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t('benefits.blogGenClient')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Bottom Line ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            {t('benefits.bottomTitle')}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {t('benefits.bottomBody')}
          </p>
          <p className="text-sm text-slate-500 mb-10">
            {t('benefits.bottomTagline')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#waitlist"
              className="bg-[#0F2745] text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-[#0C2038] transition inline-flex items-center gap-2"
            >
              {t('nav.joinWaitlist')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
            >
              {t('benefits.seeFeatures')}
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">{t('benefits.trialNote')}</p>
        </div>
      </section>
    </>
  );
};

export default Benefits;
