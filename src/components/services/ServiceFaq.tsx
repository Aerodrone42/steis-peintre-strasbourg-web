
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqProps {
  faqItems: FaqItem[];
}

const ServiceFaq: React.FC<ServiceFaqProps> = ({ faqItems }) => {
  if (!faqItems || faqItems.length === 0) return null;
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-steis mb-4">Questions fréquentes</h3>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <Collapsible key={index} className="border border-gray-200 rounded-lg">
            <CollapsibleTrigger className="w-full p-4 text-left font-medium flex justify-between items-center">
              {item.question}
              <span className="text-steis">+</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 text-gray-700">
              {item.answer}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default ServiceFaq;
