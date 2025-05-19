
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';
import { Mail } from 'lucide-react';

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

// Adresse email de réception
const COMPANY_EMAIL = "ismael.steis95@gmail.com"; // Adresse email mise à jour

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
    
    // Validation basique
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.service) {
      toast.error('Veuillez remplir tous les champs obligatoires', {
        duration: 5000,
      });
      return;
    }
    
    try {
      // Créer le corps du message
      const messageBody = `
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Adresse des travaux: ${formData.address}
Service demandé: ${formData.service}
Message: ${formData.message}
      `;
      
      // Créer l'objet du mail
      const subject = `Demande de devis - ${formData.service} - ${formData.name}`;
      
      // Créer le lien mailto
      const mailtoLink = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
      
      // Ouvrir le client de messagerie de l'utilisateur
      window.open(mailtoLink, '_blank');
      
      toast.success('Le formulaire a été préparé pour envoi via votre client de messagerie', {
        duration: 5000,
      });
      
      // Réinitialisation du formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de la préparation du message:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.', {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Alternative: fonction pour copier les informations dans le presse-papier
  const copyToClipboard = () => {
    // Format du message à copier
    const messageContent = `
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Adresse des travaux: ${formData.address}
Service demandé: ${formData.service}
Message: ${formData.message}
    `;
    
    // Copier dans le presse-papier
    navigator.clipboard.writeText(messageContent)
      .then(() => {
        toast.success('Informations copiées dans le presse-papier. Vous pouvez les coller dans votre email.', {
          duration: 5000,
        });
      })
      .catch(err => {
        toast.error('Impossible de copier les informations. Veuillez nous contacter par téléphone.', {
          duration: 5000,
        });
        console.error('Erreur lors de la copie dans le presse-papier:', err);
      });
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
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          type="submit" 
          className="flex-1 bg-steis hover:bg-steis-600"
          disabled={isSubmitting}
        >
          <Mail className="mr-2 h-4 w-4" />
          Envoyer via votre messagerie
        </Button>
        
        <Button 
          type="button" 
          variant="outline"
          className="flex-1"
          onClick={copyToClipboard}
        >
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
