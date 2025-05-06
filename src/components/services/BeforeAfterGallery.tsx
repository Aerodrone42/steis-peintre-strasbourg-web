
import React from 'react';

interface BeforeAfterImage {
  before: string;
  after: string;
  description?: string;
}

interface BeforeAfterGalleryProps {
  beforeAfterImages: BeforeAfterImage[];
  title: string;
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ beforeAfterImages, title }) => {
  if (!beforeAfterImages || beforeAfterImages.length === 0) return null;
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-steis mb-4">Avant / Après</h3>
      <div className="grid grid-cols-1 gap-8">
        {/* Placeholder for before/after implementation */}
        {/* This component structure is kept for future implementation */}
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
