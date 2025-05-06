
/**
 * Utilitaire pour améliorer le contenu HTML avec des balises sémantiques pour le SEO
 */

/**
 * Parse le contenu brut et ajoute des balises sémantiques
 * pour améliorer la structure SEO du contenu
 */
export const parseContentWithHeadings = (content: string, city: string): string => {
  // Remplacer les balises p qui contiennent des contenus qui semblent être des titres
  // avec des balises h3 pour améliorer la structure sémantique du document
  let parsedContent = content;
  
  // Améliorer les paragraphes avec des mots-clés importants en strong
  const keywords = [
    'peinture', 'couvreur', 'toiture', 'ravalement', 'façade', 
    'rénovation', 'artisan', 'certifié', 'RGE', 'qualité'
  ];
  
  // Ajouter des mises en évidence pour les mots-clés importants (seulement la première occurrence)
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    const found = parsedContent.match(regex);
    if (found && found.index !== undefined) {
      const originalWord = found[0];
      parsedContent = 
        parsedContent.substring(0, found.index) + 
        `<strong>${originalWord}</strong>` + 
        parsedContent.substring(found.index + originalWord.length);
    }
  });
  
  // Convertir le premier paragraphe en introduction avec une classe spéciale
  parsedContent = parsedContent.replace(
    /<p>(.*?)<\/p>/,
    `<p class="introduction"><strong>À ${city}</strong>, $1</p>`
  );
  
  return parsedContent;
};

/**
 * Crée un contenu contextuel sur les zones d'intervention
 * avec des phrases naturelles intégrant les noms de villes
 */
export const createLocationContext = (city: string, surroundingCities: string[]): string => {
  // Diviser les villes en groupes pour créer des phrases différentes
  const firstGroup = surroundingCities.slice(0, 3);
  const secondGroup = surroundingCities.slice(3, 7);
  const remainingCities = surroundingCities.slice(7);
  
  let locationHtml = '';
  
  // Premier paragraphe - Introduction
  locationHtml += `<p>En tant qu'artisan <strong>peintre et couvreur</strong> basé à <strong>${city}</strong>, STEIS Ismaël offre ses services professionnels dans toute la région. Notre expertise en <strong>peinture</strong>, <strong>toiture</strong> et <strong>ravalement de façade</strong> est reconnue par de nombreux clients satisfaits.</p>`;
  
  // Deuxième paragraphe - Premières villes proches
  if (firstGroup.length > 0) {
    locationHtml += `<p>Nous intervenons régulièrement dans les communes limitrophes comme <strong>${firstGroup.join('</strong>, <strong>')}</strong> pour tous types de travaux de rénovation intérieure et extérieure.</p>`;
  }
  
  // Troisième paragraphe - Deuxième groupe de villes
  if (secondGroup.length > 0) {
    locationHtml += `<p>Notre zone d'intervention s'étend également vers <strong>${secondGroup.join('</strong>, <strong>')}</strong>, où nous proposons des services complets de <strong>rénovation</strong>, <strong>peinture</strong> et <strong>toiture</strong>.</p>`;
  }
  
  // Quatrième paragraphe - Villes restantes et conclusion
  if (remainingCities.length > 0) {
    locationHtml += `<p>Nous nous déplaçons aussi à <strong>${remainingCities.slice(0, 5).join('</strong>, <strong>')}</strong>${remainingCities.length > 5 ? ' et dans d\'autres communes avoisinantes' : ''} pour répondre à tous vos besoins en matière de travaux d'artisanat.</p>`;
  }
  
  // Paragraphe de conclusion
  locationHtml += `<p>Que vous soyez à <strong>${city}</strong> ou dans l'une de ces localités, notre équipe se déplace pour vous offrir un service de qualité, rapide et professionnel, adapté à vos besoins spécifiques.</p>`;
  
  return locationHtml;
};
