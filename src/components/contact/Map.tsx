
import React from 'react';

const Map = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-steis mb-6">Nous trouver</h2>
      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.492076122744!2d7.307689715646346!3d48.56126087925989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c852c0fce97f%3A0x49b92668bfb7e2f1!2sStade%20de%20la%20Meinau!5e0!3m2!1sfr!2sfr!4v1620388290719!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Carte Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
