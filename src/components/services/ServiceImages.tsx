
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GalleryHorizontal } from 'lucide-react';

interface ServiceImagesProps {
  title: string;
  additionalImages?: string[];
}

const ServiceImages: React.FC<ServiceImagesProps> = ({ title, additionalImages }) => {
  if (!additionalImages || additionalImages.length === 0) return null;
  
  return (
    <Card className="shadow-lg border-0 overflow-hidden bg-white rounded-xl">
      <div className="bg-steis-600 py-4 px-6">
        <div className="flex items-center">
          <GalleryHorizontal className="h-5 w-5 text-white mr-2" />
          <h3 className="text-2xl font-bold text-white">Nos réalisations</h3>
        </div>
      </div>
      
      <CardContent className="p-6">
        <Carousel className="w-full">
          <CarouselContent>
            {additionalImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image} 
                      alt={`${title} - réalisation ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </AspectRatio>
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

export default ServiceImages;
