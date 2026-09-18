'use client';

import { useState } from 'react';
import { PublicFaq } from '@/lib/marketing-api';

const defaultFaqs = [
  {
    question: 'What does DLabMate help a dental lab manage?',
    answer:
      'DLabMate helps dental labs organize case details (doctor, patient, teeth, material, shade, dates, and notes), follow production stages from entry to delivery, track due dates and overdue cases, manage clinic partner relationships, and export monthly case records.',
  },
  {
    question: 'Can clinics see the progress of their own cases?',
    answer:
      'Yes. Partner clinics get their own login and can view the current status and delivery information for their cases. They can see which stage a case is in without needing to call the lab.',
  },
  {
    question: 'Does it support regular and surgical guide cases?',
    answer:
      'Yes. DLabMate has separate workflows for regular prosthetic cases and surgical guide cases. Surgical guide tracking covers CBCT receipt, impressions, planning, guide preparation, printing, and sleeves.',
  },
  {
    question: 'How do registration and document verification work?',
    answer:
      'You register your lab or clinic with basic details, then submit verification documents. An administrator reviews and approves your account. Until verification is complete, account access is restricted.',
  },
  {
    question: 'Can I use Nepali dates and export case records?',
    answer:
      'Yes. DLabMate supports Nepali (Bikram Sambat) date inputs for case scheduling and due dates. You can also export monthly case records to CSV files for your records.',
  },
  {
    question: 'How do browser notifications work?',
    answer:
      'DLabMate can send browser push notifications for relevant case updates. You will need to grant notification permission in your browser for this feature to work.',
  },
  {
    question: 'What are the current pricing and onboarding options?',
    answer:
      'Contact us for current pricing details. We offer plans scaled to your case volume, with free access for partner clinics viewing their own cases. Reach out via the demo form, email, or WhatsApp to discuss options.',
  },
  {
    question: 'How do I contact support?',
    answer:
      'You can reach our support team at support@dlabmate.com, call us at +977 9843631160, or message us on WhatsApp. For demo requests and general enquiries, use info@dlabmate.com.',
  },
];

interface HomeFAQProps {
  initialFaqs?: PublicFaq[];
}

export default function HomeFAQ({ initialFaqs }: HomeFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const activeFaqs = (initialFaqs && initialFaqs.length > 0 ? initialFaqs : defaultFaqs).slice(0, 6);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {activeFaqs.map((faq, i) => (
        <div
          key={i}
          className={`border rounded-xl transition-all duration-200 ${
            openIndex === i ? 'border-primary/20 bg-primary-soft/30 shadow-sm' : 'border-border bg-white'
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="text-sm sm:text-base font-bold text-text-primary">{faq.question}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className={`flex-shrink-0 text-text-muted transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="text-sm text-text-muted leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export { defaultFaqs as faqs };
