
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  // Services de couverture
  { name: "Rénovation de toiture", path: "/services/renovation-toiture" },
  { name: "Zinguerie", path: "/services/zinguerie" },
  { name: "Charpente", path: "/services/charpente" },
  // Services de peinture
  { name: "Peinture intérieure", path: "/services/peinture-interieure" },
  { name: "Peinture extérieure", path: "/services/peinture-exterieure" },
  { name: "Crépi façade et muret", path: "/services/crepi-facade-et-muret" },
  { name: "Ravalement de façade", path: "/services/ravalement-de-facade" },
  // Services de nettoyage
  { name: "Nettoyage toiture", path: "/services/nettoyage-toiture" },
  { name: "Nettoyage dallage", path: "/services/nettoyage-dallage" },
  { name: "Nettoyage façade", path: "/services/nettoyage-facade" },
  { name: "Nettoyage gouttière", path: "/services/nettoyage-gouttiere" },
  { name: "Nettoyage muret", path: "/services/nettoyage-muret" },
  // Autres services
  { name: "Peinture boiseries", path: "/services/peinture-boiseries" },
  { name: "Peinture ferronneries", path: "/services/peinture-ferronneries" },
  { name: "Peinture gouttières", path: "/services/peinture-gouttieres" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/e133f954-535b-4a56-8bc8-56b2a83338ad.png" 
              alt="STEIS Ismaël" 
              className="h-12 md:h-16"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-steis">STEIS ISMAËL</h1>
              <p className="text-sm text-gray-600">Artisan peintre</p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12"/>
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16"/>
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/">Accueil</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/a-propos">À propos</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Nos Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.path}>
                          <Link
                            to={service.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/zones">Zones d'intervention</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/contact">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button asChild className="bg-steis hover:bg-steis-600">
              <a href="tel:0780233098" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">07 80 23 30 98</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col gap-2">
              <li>
                <Link 
                  to="/" 
                  className="block px-4 py-2 text-steis hover:bg-steis-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/a-propos" 
                  className="block px-4 py-2 text-steis hover:bg-steis-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Collapsible
                  open={isServicesOpen}
                  onOpenChange={setIsServicesOpen}
                  className="w-full"
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2 text-steis font-medium hover:bg-steis-50 rounded-md">
                    <span>Nos Services</span>
                    {isServicesOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="ml-4 border-l border-steis-100">
                      {services.map((service) => (
                        <li key={service.path}>
                          <Link
                            to={service.path}
                            className="block px-4 py-2 text-steis hover:bg-steis-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li>
                <Link 
                  to="/zones" 
                  className="block px-4 py-2 text-steis hover:bg-steis-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Zones d'intervention
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block px-4 py-2 text-steis hover:bg-steis-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="mt-2">
                <Button asChild className="w-full bg-steis hover:bg-steis-600">
                  <a href="tel:0780233098" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>07 80 23 30 98</span>
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
