
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

interface ServiceImagesProps {
  title: string;
  additionalImages?: string[];
}

const ServiceImages: React.FC<ServiceImagesProps> = ({ title, additionalImages }) => {
  if (!additionalImages || additionalImages.length === 0) return null;
  
  return (
    <Card className="mt-6 shadow-md border-steis-100">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-steis mb-4">Nos réalisations</h3>
        
        <Carousel className="w-full">
          <CarouselContent>
            {additionalImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <AspectRatio ratio={4/3} className="bg-steis-100 overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${title} - réalisation ${index + 1}`}
                      className="w-full h-full object-cover" 
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
