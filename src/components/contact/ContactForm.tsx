import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";
import { Mail, Copy, Loader2 } from "lucide-react";

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
  "Autre",
];

const COMPANY_EMAIL = "ismael.steis95@gmail.com";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      toast.success("Votre demande a été envoyée avec succès. Nous vous contacterons rapidement.", {
        duration: 5000,
      });
      const cleanUrl = window.location.origin + window.location.pathname + "/contact";
      window.history.replaceState({}, "", cleanUrl);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.service) {
      toast.error("Veuillez remplir tous les champs obligatoires", {
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

    navigator.clipboard
      .writeText(messageContent)
      .then(() => {
        toast.success("Informations copiées dans le presse-papier. Vous pouvez les coller dans votre email.", {
          duration: 5000,
        });
      })
      .catch(() => {
        toast.error("Erreur lors de la copie. Veuillez réessayer.", {
          duration: 5000,
        });
      });
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(`Demande de devis - ${formData.service}`);
    const body = encodeURIComponent(`
Bonjour,

Je souhaite obtenir un devis pour le service suivant :

Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Adresse des travaux: ${formData.address}
Service demandé: ${formData.service}

Message:
${formData.message}

Cordialement,
${formData.name}
    `);

    window.open(`mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`, "_self");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const redirectUrl =
        typeof window !== "undefined" ? `${window.location.origin}/contact?success=true` : "/contact?success=true";

      const formSubmitData = new FormData();
      formSubmitData.append("name", formData.name);
      formSubmitData.append("email", formData.email);
      formSubmitData.append("phone", formData.phone);
      formSubmitData.append("address", formData.address);
      formSubmitData.append("service", formData.service);
      formSubmitData.append("message", formData.message);
      formSubmitData.append("_next", redirectUrl);
      formSubmitData.append("_subject", `Demande de devis - ${formData.service}`);
      formSubmitData.append("_template", "table");

      const response = await fetch("https://formsubmit.co/ismael.steis95@gmail.com", {
        method: "POST",
        body: formSubmitData,
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          service: "",
          message: "",
        });
        toast.success("Votre demande a été envoyée avec succès !", {
          duration: 5000,
        });
      } else {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }
    } catch (error) {
      toast.error("Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-steis mb-2">Demande de devis gratuit</h2>
          <p className="text-gray-600">Remplissez ce formulaire pour recevoir un devis personnalisé et gratuit</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="06 12 34 56 78"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service demandé *</Label>
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisissez un service" />
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adresse des travaux *</Label>
            <Input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              placeholder="Adresse complète où les travaux doivent être réalisés"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (optionnel)</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet en détail..."
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" className="flex-1 bg-steis hover:bg-steis/90" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Envoyer la demande
                </>
              )}
            </Button>

            <Button type="button" variant="outline" onClick={copyToClipboard} className="flex-1">
              <Copy className="mr-2 h-4 w-4" />
              Copier les infos
            </Button>

            <Button type="button" variant="outline" onClick={openEmailClient} className="flex-1">
              <Mail className="mr-2 h-4 w-4" />
              Ouvrir email
            </Button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Informations importantes :</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Devis gratuit et sans engagement</li>
            <li>• Réponse sous 24h en moyenne</li>
            <li>• Déplacement gratuit dans un rayon de 30km</li>
            <li>• Artisan certifié et assuré</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
