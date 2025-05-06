
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
