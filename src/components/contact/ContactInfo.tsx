
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-steis text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Coordonnées</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Phone className="h-6 w-6 mt-1 shrink-0" />
          <div>
            <h3 className="font-semibold">Téléphone</h3>
            <a href="tel:0780233098" className="hover:underline">07 80 23 30 98</a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 mt-1 shrink-0" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <a href="mailto:ismael.steis95@gmail.com" className="hover:underline">ismael.steis95@gmail.com</a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <MapPin className="h-6 w-6 mt-1 shrink-0" />
          <div>
            <h3 className="font-semibold">Adresse</h3>
            <p>21 Rue Victor Schoelcher, 68200 Mulhouse</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <Clock className="h-6 w-6 mt-1 shrink-0" />
          <div>
            <h3 className="font-semibold">Horaires</h3>
            <p>Lundi - Vendredi: 8h - 18h<br />Samedi: 8h - 12h<br />Dimanche: Fermé</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-steis-400">
        <h3 className="font-semibold mb-2">Zone d'intervention</h3>
        <p>Strasbourg et 30 km alentours</p>
      </div>
    </div>
  );
};

export default ContactInfo;
