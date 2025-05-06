
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
import { Gallery } from 'lucide-react';

interface ServiceImagesProps {
  title: string;
  additionalImages?: string[];
}

const ServiceImages: React.FC<ServiceImagesProps> = ({ title, additionalImages }) => {
  if (!additionalImages || additionalImages.length === 0) return null;
  
  return (
    <Card className="mt-6 shadow-md border-steis-100 bg-white overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Gallery className="h-5 w-5 text-steis-500 mr-2" />
          <h3 className="text-xl font-semibold text-steis">Nos réalisations</h3>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {additionalImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <AspectRatio ratio={16/9} className="bg-steis-100 overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${title} - réalisation ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 lg:-left-4" />
          <CarouselNext className="right-2 lg:-right-4" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default ServiceImages;
