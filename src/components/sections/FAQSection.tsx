'use client';

import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Accordion from '@/components/ui/Accordion';
import { generateFAQSchema } from '@/lib/schema';
import type { FAQ } from '@/lib/schema';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  schemaEnabled?: boolean;
}

export default function FAQSection({
  title = 'Questions Frequentes',
  subtitle,
  faqs,
  schemaEnabled = true,
}: FAQSectionProps) {
  return (
    <section className="py-24 bg-white">
      {schemaEnabled && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(faqs)),
          }}
        />
      )}
      <Container>
        <SectionTitle title={title} subtitle={subtitle} centered />
        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.question}
              content={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
