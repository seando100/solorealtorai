import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const SECTION_LABEL = "text-xs font-semibold uppercase tracking-widest text-slate-400 pt-10 pb-2 px-1 border-b border-slate-100 mb-2";

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">Everything you need to know about SoloRealtorAI — how it works, what's included, and how to get the most out of it.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className={SECTION_LABEL}>How It Works</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="how-1">
              <AccordionTrigger>How does the AI client intake work?</AccordionTrigger>
              <AccordionContent>When a buyer or seller visits your unique intake link, they're guided through a conversational intake experience powered by an AI assistant. The AI asks questions about their property preferences, timeline, budget, pre-approval status, and any specific needs. Clients respond naturally in their own words, and the system structures their answers into a clean lead summary delivered to your inbox.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-2">
              <AccordionTrigger>What happens after a client submits an intake?</AccordionTrigger>
              <AccordionContent>Two things happen automatically. You receive a detailed email with the client's contact info, property preferences, timeline, and budget — plus AI-generated market insights visible only to you. The client receives a confirmation email summarizing what they submitted. All submissions are stored in your admin portal.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-3">
              <AccordionTrigger>Does the AI assistant give real estate advice?</AccordionTrigger>
              <AccordionContent>No. The AI assistant is strictly an intake tool — it collects information on your behalf. It doesn't provide property valuations, market predictions, or guidance on how a client should proceed. All AI-generated notes are internal aids for your eyes only.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-4">
              <AccordionTrigger>Does it handle both buyers and sellers?</AccordionTrigger>
              <AccordionContent>Yes. Your AI assistant adapts its questions based on whether the client is buying or selling. Buyers are asked about property preferences, budget, pre-approval, and timeline. Sellers are asked about their property details, motivation, timeline, and pricing expectations. Both paths deliver structured summaries to your inbox.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-5">
              <AccordionTrigger>Does SoloRealtorAI support languages other than English?</AccordionTrigger>
              <AccordionContent>Yes. Full bilingual support for English and Spanish. Clients select their preferred language at the start. The entire intake — AI conversation, form fields, and confirmation email — is delivered in their chosen language. Your notification emails are always in English.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Setup & Customization</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="setup-1">
              <AccordionTrigger>How long does setup take?</AccordionTrigger>
              <AccordionContent>Most agents are fully set up within 10 minutes. Enter your name and brokerage, upload your logo, select your specializations, write a custom greeting, add any custom intake questions, and connect your scheduling link. Your branded intake is live immediately.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="setup-2">
              <AccordionTrigger>Can I customize the intake questions?</AccordionTrigger>
              <AccordionContent>Yes, fully. In addition to core fields (name, contact info, property preferences, timeline, budget), you can add unlimited custom questions — neighborhood preferences, must-have features, deal-breakers, or anything specific to your market. Custom questions appear in both the AI chat and the structured form.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="setup-3">
              <AccordionTrigger>Can I connect my scheduling link?</AccordionTrigger>
              <AccordionContent>Yes. Connect Calendly directly or paste any scheduling URL (Acuity, Google Booking, etc.). Clients who complete an intake can automatically receive a scheduling email to book a showing or consultation.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Plans & Billing</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="billing-1">
              <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
              <AccordionContent>Yes. Every new account starts with a 14-day free trial. A credit card is required to start, but you won't be charged until the trial ends.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="billing-2">
              <AccordionTrigger>What is the difference between plans?</AccordionTrigger>
              <AccordionContent>Both Starter and Pro include the full intake system. Starter ($49/month) supports up to 50 intakes. Pro ($79/month) adds the Marketing Kit and 150 intakes. Pro+ ($119/month) adds unlimited intakes, AI phone line, and Document Intelligence.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Security & Privacy</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sec-1">
              <AccordionTrigger>Is my client data secure?</AccordionTrigger>
              <AccordionContent>Yes. All data is encrypted in transit (TLS) and at rest (AES-256). Client data is scoped to your account — no data is shared across accounts or used to train AI models.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Support</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="support-1">
              <AccordionTrigger>Is SoloRealtorAI only for solo agents?</AccordionTrigger>
              <AccordionContent>SoloRealtorAI is built for solo agents and small teams. Each account is tied to one agent, one branded intake link, and one inbox. Agents on a team can each set up their own individual account.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="support-2">
              <AccordionTrigger>What if I need help?</AccordionTrigger>
              <AccordionContent>Reach us at <strong>sean@solosolutionsai.com</strong>. We respond within one business day. You can also use the <Link to="/contact" className="underline text-[#0F2745]">contact form</Link>.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">We're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#waitlist" className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center">Join the Waitlist</a>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
