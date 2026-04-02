import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const SECTION_LABEL = "text-xs font-semibold uppercase tracking-widest text-slate-500 pt-10 pb-2 px-1 border-b border-slate-100 mb-2";

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{t('faq.pageTitle')}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">{t('faq.pageSubtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className={SECTION_LABEL}>{t('faq.sectionHowItWorks')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="how-1">
              <AccordionTrigger>{t('faq.how1Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how1A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-2">
              <AccordionTrigger>{t('faq.how2Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how2A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-3">
              <AccordionTrigger>{t('faq.how3Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how3A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-4">
              <AccordionTrigger>{t('faq.how4Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how4A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-5">
              <AccordionTrigger>{t('faq.how5Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.how5A')}</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>{t('faq.sectionSetup')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="setup-1">
              <AccordionTrigger>{t('faq.setup1Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.setup1A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="setup-2">
              <AccordionTrigger>{t('faq.setup2Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.setup2A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="setup-3">
              <AccordionTrigger>{t('faq.setup3Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.setup3A')}</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>{t('faq.sectionBilling')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="billing-1">
              <AccordionTrigger>{t('faq.billing1Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.billing1A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="billing-2">
              <AccordionTrigger>{t('faq.billing2Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.billing2A')}</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>{t('faq.sectionSecurity')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sec-1">
              <AccordionTrigger>{t('faq.sec1Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.sec1A')}</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>{t('faq.sectionSupport')}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="support-1">
              <AccordionTrigger>{t('faq.support1Q')}</AccordionTrigger>
              <AccordionContent>{t('faq.support1A')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="support-2">
              <AccordionTrigger>{t('faq.support2Q')}</AccordionTrigger>
              <AccordionContent>
                <Trans i18nKey="faq.support2A">
                  Reach us at <strong>sean@solosolutionsai.com</strong>. We respond within one business day. You can also use the <Link to="/contact" className="underline text-[#0F2745]">contact form</Link>.
                </Trans>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('faq.stillHaveQuestions')}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t('faq.hereToHelp')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#waitlist" className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center">{t('nav.joinWaitlist')}</a>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3">{t('faq.contactUs')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
