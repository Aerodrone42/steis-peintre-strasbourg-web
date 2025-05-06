
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const categories = [
  "Tous",
  "Peinture intérieure",
  "Peinture extérieure",
  "Ravalement",
  "Nettoyage"
];

const projects = [
  {
    id: 1,
    title: "Ravalement de façade à Strasbourg",
    category: "Ravalement",
    image: "/lovable-uploads/d9908023-7f21-4e97-aa40-24aa5d561993.png",
    description: "Ravalement complet d'une maison individuelle à Strasbourg. Réparation des fissures et application d'un enduit décoratif."
  },
  {
    id: 2,
    title: "Rénovation salon à Schiltigheim",
    category: "Peinture intérieure",
    image: "/lovable-uploads/a93c114d-cbb4-424b-b11e-7c6afdc0e49c.png",
    description: "Rénovation complète d'un salon à Schiltigheim. Préparation des murs, pose de toile de verre et peinture."
  },
  {
    id: 3,
    title: "Peinture extérieure à Illkirch",
    category: "Peinture extérieure",
    image: "/lovable-uploads/169bf13c-4417-4be4-8b6e-223a071ee74a.png",
    description: "Peinture extérieure d'une maison à Illkirch. Protection contre les intempéries et embellissement de la façade."
  },
  {
    id: 4,
    title: "Nettoyage toiture à Haguenau",
    category: "Nettoyage",
    image: "/lovable-uploads/4fd63f45-4671-41df-b9d0-d4af63d597b6.png",
    description: "Nettoyage et traitement anti-mousse d'une toiture à Haguenau. Élimination des mousses et des lichens."
  },
  {
    id: 5,
    title: "Crépi façade à Obernai",
    category: "Ravalement",
    image: "/lovable-uploads/5b5fab09-1852-418b-bc54-bfd2c38d51a6.png",
    description: "Application d'un crépi décoratif sur la façade d'une maison à Obernai. Finition esthétique et durable."
  },
  {
    id: 6,
    title: "Peinture chambres à Sélestat",
    category: "Peinture intérieure",
    image: "/lovable-uploads/2027b848-d34e-4aea-8de3-0b5d70b40040.png",
    description: "Rénovation complète de deux chambres à Sélestat. Préparation des murs et application d'une peinture de qualité."
  },
  {
    id: 7,
    title: "Nettoyage façade à Molsheim",
    category: "Nettoyage",
    image: "/lovable-uploads/b06aa698-1d6b-4c4c-abba-50e6fba342b6.png",
    description: "Nettoyage haute pression d'une façade à Molsheim. Élimination des salissures et des traces de pollution."
  },
  {
    id: 8,
    title: "Peinture ferronnerie à Strasbourg",
    category: "Peinture extérieure",
    image: "/lovable-uploads/f69e56ea-83d1-48ce-ba83-bb0353834d74.png",
    description: "Peinture de ferronnerie pour une maison à Strasbourg. Protection contre la rouille et embellissement."
  }
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-steis-50 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-steis mb-4">Nos Réalisations</h1>
          <p className="text-lg text-gray-700 mb-4 max-w-3xl">
            Découvrez quelques-uns de nos projets récents. Ces réalisations témoignent
            de notre expertise et de la qualité de notre travail.
          </p>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-steis hover:bg-steis-600" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm opacity-90">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="sm:max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <img 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-steis mb-2">{selectedProject.title}</h2>
                  <p className="text-sm text-gray-500 mb-4">{selectedProject.category}</p>
                  <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                  <Button asChild className="bg-steis hover:bg-steis-600">
                    <a href="/contact">Demander un service similaire</a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
