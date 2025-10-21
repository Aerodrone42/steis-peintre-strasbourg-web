
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';
import { Mail, Copy, Loader2 } from 'lucide-react';

const services = [
  "Peinture intérieure",
  "Peinture extérieure",
  "Crépi façade et muret",
  "Ravalement de façade",
  "Nettoyage toiture",
  "Nettoyage dallage",
  "Nettoyage façade",
  "Nettoyage gouttière",
  "Nettoyage muret",
  "Peinture boiseries",
  "Peinture ferronneries",
  "Peinture gouttières",
  "Autre"
];

const COMPANY_EMAIL = "ismael.steis95@gmail.com";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      toast.success('Votre demande a été envoyée avec succès. Nous vous contacterons rapidement.', {
        duration: 5000,
      });
      const cleanUrl = window.location.origin + '/contact';
      window.history.replaceState({}, '', cleanUrl);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };
  
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.service) {
      toast.error('Veuillez remplir tous les champs obligatoires', {
        duration: 5000,
      });
      return false;
    }
    return true;
  };
  
  const copyToClipboard = () => {
    const messageContent = `
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Adresse des travaux: ${formData.address}
Service demandé: ${formData.service}
Message: ${formData.message}
    `;
    
    navigator.clipboard.writeText(messageContent)
      .then(() => {
        toast.success('Informations copiées dans le presse-papier. Vous pouvez les coller dans votre email.', {
          duration: 5000,
        });
      })
      .catch(() => {
        toast.error('Impossible de copier les informations. Veuillez nous contacter par téléphone.', {
          duration: 5000,
        });
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }
    setIsSubmitting(true);
  };

  const redirectUrl = (typeof window !== 'undefined' ? `${window.location.origin}` : '') + `/contact?success=true`;

  return (
    <form 
      className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      action={`https://formsubmit.co/${COMPANY_EMAIL}`}
      method="POST"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-steis mb-6">Demande de devis gratuit</h2>
      
      <input type="hidden" name="_subject" value={`Demande de devis - ${formData.service || 'Nouveau client'}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={redirectUrl} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nom et prénom *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Votre nom complet"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Votre adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Votre numéro de téléphone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Adresse des travaux *</Label>
          <Input
            id="address"
            name="address"
            placeholder="Adresse complète"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="service">Type de service *</Label>
        <Select
          value={formData.service}
          onValueChange={handleServiceChange}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez un service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="service" value={formData.service} />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Description du projet</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Détails des travaux à réaliser, dimensions, état actuel..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          type="submit" 
          className="flex-1 bg-steis hover:bg-steis-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              Envoyer ma demande
            </>
          )}
        </Button>
        
        <Button 
          type="button" 
          variant="outline"
          className="flex-1"
          onClick={copyToClipboard}
        >
          <Copy className="mr-2 h-4 w-4" />
          Copier les informations
        </Button>
      </div>
      
      <p className="text-xs text-gray-500 mt-4">
        * Champs obligatoires. En soumettant ce formulaire, vous acceptez que vos informations 
        soient utilisées uniquement dans le cadre de votre demande de devis.
      </p>
    </form>
  );
};

export default ContactForm;
