
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Gallery } from 'lucide-react';

interface PortfolioImage {
  src: string;
  alt: string;
  description?: string;
}

interface PortfolioGalleryProps {
  title: string;
  images: PortfolioImage[];
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ title, images }) => {
  if (!images || images.length === 0) return null;
  
  return (
    <Card className="shadow-lg border-0 overflow-hidden bg-white rounded-xl">
      <div className="bg-steis-600 py-4 px-6">
        <div className="flex items-center">
          <Gallery className="h-5 w-5 text-white mr-2" />
          <h3 className="text-2xl font-bold text-white">Portfolio {title}</h3>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <p className="text-gray-700">
            Découvrez nos réalisations en matière de {title.toLowerCase()}. 
            Chaque projet reflète notre engagement envers la qualité et notre souci du détail.
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </AspectRatio>
                  {image.description && (
                    <div className="mt-2 text-sm text-center text-gray-600">{image.description}</div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 lg:-left-4 bg-white/80 hover:bg-white border-0" />
          <CarouselNext className="right-2 lg:-right-4 bg-white/80 hover:bg-white border-0" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default PortfolioGallery;
