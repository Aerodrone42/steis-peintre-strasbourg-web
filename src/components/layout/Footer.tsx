
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-steis text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/e133f954-535b-4a56-8bc8-56b2a83338ad.png" 
                alt="STEIS Ismaël" 
                className="h-12 invert"
              />
              <div>
                <h3 className="text-xl font-bold">STEIS ISMAËL</h3>
                <p className="text-sm">Artisan peintre</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Entreprise de peinture et ravalement professionnelle intervenant à Strasbourg 
              et dans un rayon de 30km. Qualité et service garantis.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <a href="https://facebook.com" className="hover:text-steis-200" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="hover:text-steis-200" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
            <div className="p-2 bg-white rounded-lg inline-block">
              <img 
                src="/lovable-uploads/24c1361f-b3c3-4c80-86aa-9f0f47b3ef6b.png" 
                alt="Certifications: Urgence 24h/24 & 7j/7, Garantie Décennale, RGE Qualibat, Artisan" 
                className="h-10 w-auto"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>
                <Link to="/services/peinture-interieure" className="text-sm hover:text-steis-200">
                  Peinture intérieure
                </Link>
              </li>
              <li>
                <Link to="/services/peinture-exterieure" className="text-sm hover:text-steis-200">
                  Peinture extérieure
                </Link>
              </li>
              <li>
                <Link to="/services/crepi-facade-et-muret" className="text-sm hover:text-steis-200">
                  Crépi façade et muret
                </Link>
              </li>
              <li>
                <Link to="/services/ravalement-de-facade" className="text-sm hover:text-steis-200">
                  Ravalement de façade
                </Link>
              </li>
              <li>
                <Link to="/services/nettoyage-toiture" className="text-sm hover:text-steis-200">
                  Nettoyage toiture
                </Link>
              </li>
              <li>
                <Link to="/services/nettoyage-dallage" className="text-sm hover:text-steis-200">
                  Nettoyage dallage
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm">21 Rue Victor Schoelcher, 68200 Mulhouse</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:0780233098" className="text-sm hover:text-steis-200">07 80 23 30 98</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:ismael.steis95@gmail.com" className="text-sm hover:text-steis-200">ismael.steis95@gmail.com</a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">Zone d'intervention</p>
              <p className="text-sm">Strasbourg et 30 km alentours</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-steis-400 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {currentYear} STEIS ISMAËL. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link to="/mentions-legales" className="hover:text-steis-200">Mentions légales</Link>
              <Link to="/politique-de-confidentialite" className="hover:text-steis-200">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
