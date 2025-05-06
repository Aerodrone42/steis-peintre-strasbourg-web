
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Votre demande de devis a été envoyée avec succès. Nous vous contacterons rapidement.', {
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-steis mb-6">Demande de devis gratuit</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nom et prénom *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Votre nom complet"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Votre adresse email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Votre numéro de téléphone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Adresse des travaux *</Label>
          <Input
            id="address"
            name="address"
            placeholder="Adresse complète"
            required
            value={formData.address}
            onChange={handleChange}
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
      
      <Button 
        type="submit" 
        className="w-full bg-steis hover:bg-steis-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Demander un devis gratuit'}
      </Button>
      
      <p className="text-xs text-gray-500 mt-4">
        * Champs obligatoires. En soumettant ce formulaire, vous acceptez que vos informations 
        soient utilisées uniquement dans le cadre de votre demande de devis.
      </p>
    </form>
  );
};

export default ContactForm;
