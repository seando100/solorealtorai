import { Check, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

  const STARTER_FEATURES = [
    t('pricing.starterFeat1'),
    t('pricing.starterFeat2'),
    t('pricing.starterFeat3'),
    t('pricing.starterFeat4'),
    t('pricing.starterFeat5'),
    t('pricing.starterFeat6'),
    t('pricing.starterFeat7'),
    t('pricing.starterFeat8'),
    t('pricing.starterFeat9'),
  ];

  const PRO_EXTRAS = [
    t('pricing.proFeat1'),
    t('pricing.proFeat2'),
    t('pricing.proFeat3'),
    t('pricing.proFeat4'),
    t('pricing.proFeat5'),
    t('pricing.proFeat6'),
  ];

  const PRO_PLUS_EXTRAS = [
    t('pricing.proPlusFeat1'),
    t('pricing.proPlusFeat2'),
    t('pricing.proPlusFeat3'),
    t('pricing.proPlusFeat4'),
    t('pricing.proPlusFeat5'),
    t('pricing.proPlusFeat6'),
    t('pricing.proPlusFeat7'),
  ];

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t('pricing.pageTitle')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.pageSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border border-slate-200 flex flex-col">
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{t('pricing.starter')}</p>
              <div className="mb-1">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-muted-foreground text-lg"> {t('pricing.perMonth')}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t('pricing.starterSub')}</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <ul className="space-y-3 mt-6 mb-8 flex-1">
                {STARTER_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/#waitlist" className="block w-full border border-[#0F2745] text-[#0F2745] text-sm font-medium px-6 py-3.5 rounded-md hover:bg-slate-50 transition text-center">
                {t('nav.joinWaitlist')}
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">{t('pricing.comingDate')}</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#0F2745] flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-[#0F2745] text-white text-xs font-semibold px-4 py-1 rounded-full">{t('pricing.mostPopular')}</span>
            </div>
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0F2745] mb-3 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" /> {t('pricing.pro')}
              </p>
              <div className="mb-1">
                <span className="text-5xl font-bold">$79</span>
                <span className="text-muted-foreground text-lg"> {t('pricing.perMonth')}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t('pricing.proSub')}</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-6 mb-3">{t('pricing.proIncludes')}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {PRO_EXTRAS.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-[#0F2745] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/#waitlist" className="block w-full bg-[#0F2745] text-white text-sm font-medium px-6 py-3.5 rounded-md hover:bg-[#0C2038] transition text-center">
                {t('nav.joinWaitlist')}
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">{t('pricing.comingDate')}</p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 flex flex-col relative">
            <CardHeader className="pb-2 pt-8 px-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-1.5">
                <Phone className="h-3 w-3" /> {t('pricing.proPlus')}
              </p>
              <div className="mb-1">
                <span className="text-5xl font-bold">$119</span>
                <span className="text-muted-foreground text-lg"> {t('pricing.perMonth')}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t('pricing.proPlusSub')}</p>
            </CardHeader>
            <CardContent className="px-8 pb-8 flex flex-col flex-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-6 mb-3">{t('pricing.proPlusIncludes')}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {PRO_PLUS_EXTRAS.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-[#0F2745] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/#waitlist" className="block w-full border border-[#0F2745] text-[#0F2745] text-sm font-medium px-6 py-3.5 rounded-md hover:bg-slate-50 transition text-center">
                {t('nav.joinWaitlist')}
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">{t('pricing.comingDate')}</p>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">
          {t('pricing.trialNote')}
        </p>

        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{t('pricing.faqTitle')}</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t('pricing.faq1Q')}</AccordionTrigger>
              <AccordionContent>{t('pricing.faq1A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t('pricing.faq2Q')}</AccordionTrigger>
              <AccordionContent>{t('pricing.faq2A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t('pricing.faq3Q')}</AccordionTrigger>
              <AccordionContent>{t('pricing.faq3A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>{t('pricing.faq4Q')}</AccordionTrigger>
              <AccordionContent>{t('pricing.faq4A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>{t('pricing.faq5Q')}</AccordionTrigger>
              <AccordionContent>{t('pricing.faq5A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>{t('pricing.faq6Q')}</AccordionTrigger>
              <AccordionContent>{t('pricing.faq6A')}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('pricing.readyTitle')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('pricing.readySubtitle')}
          </p>
          <a href="/#waitlist" className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center">
            {t('nav.joinWaitlist')} <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
