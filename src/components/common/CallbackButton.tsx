
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CallbackButton = () => {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-steis hover:bg-steis-600 shadow-lg"
      size="lg"
    >
      <a href="tel:0780233098" className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        07 80 23 30 98
      </a>
    </Button>
  );
};

export default CallbackButton;
