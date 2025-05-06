
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';
import { Phone } from 'lucide-react';

const CallbackButton = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de la demande
    setTimeout(() => {
      setIsSubmitting(false);
      setOpen(false);
      toast.success('Votre demande de rappel a bien été envoyée. Nous vous recontacterons rapidement.', {
        duration: 5000,
      });
      setName('');
      setPhoneNumber('');
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-steis hover:bg-steis-600 shadow-lg"
          size="lg"
        >
          <Phone className="h-4 w-4" />
          Être rappelé
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-steis text-xl">Demande de rappel</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Numéro de téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Votre numéro de téléphone"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-steis hover:bg-steis-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Demander à être rappelé'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallbackButton;
